const ApiError = require("../class/ApiError");
const ProductsModel = require("../model/Products");
const productsModel = new ProductsModel();
const cryptoPassword = require("../utils/cryptoPassword");

class Products {
    post(req, res) {
        const payload = {
          ...req.body
        };

        productsModel.add(payload).then((product) => {
            product.get().then((productRef) => {
            const data = productRef.data();
            res
              .status(201)
              .json({ id: product.id, name: data.name, description: data.description });
          });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
      }
    put(req, res) {
        const { id } = req.params;

        const payload = {
          ...req.body
        };

        productsModel
          .update(id, payload)
          .then(() => {
            res.send("Produto alterado com sucesso");
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      }

    delete(req, res) {
        const { id } = req.params;
        productsModel
          .delete(id)
          .then(() => {
            res.send("Produto deletado com sucesso");
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      }
    get(req, res) {
        const { id } = req.params;
    if (!id) {
        productsModel.getAll().then((products) => {
            const list = []
            products.forEach(product => {
                list.push({ id: product.id, ... product.data() })
            });
            if (list.length == 0) {
                res
                  .status(204)
                  .send(new ApiError("Nenhum produto encontrado", "not_found"));
              }
            res.json(list);
        }).catch((error) => {
            res.status(500).send(error);
        });
    } else {
        productsModel
        .get(id)
        .then((product) => {
          if (!product.exists) {
            res
              .status(204)
              .send(new ApiError("Produto não encontrado", "not_found"));
          }
          res.json({ id: product.id, ... product.data() });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    }

    }
}

module.exports = Products;