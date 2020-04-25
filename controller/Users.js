const ApiError = require("../class/ApiError");
const UsersModel = require("../model/Users");
const usersModel = new UsersModel();
const cryptoPassword = require("../utils/cryptoPassword");
class Users {
  post(req, res) {
    const payload = {
      ...req.body,
      password: cryptoPassword(req.body.password),
    };

    usersModel.add(payload).then((user) => {
      user.get().then((userRef) => {
        const data = userRef.data();
        console.log(data);

        res
          .status(201)
          .json({ id: user.id, email: data.email, name: data.name });
      });
    });
  }

  put(req, res) {
    const { id } = req.params;

    const payload = {
      ...req.body,
      password: cryptoPassword(req.body.password),
    };

    usersModel
      .update(id, payload)
      .then(() => {
        res.send("Usuario alterado com sucesso");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  delete(req, res) {
    const { id } = req.params;
    usersModel
      .delete(id)
      .then(() => {
        res.send("Usuario deletado com sucesso");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  get(req, res) {
    const { id } = req.params;

    usersModel
      .get(id)
      .then((user) => {
        if (!user.exists) {
          res
            .status(404)
            .send(new ApiError("Usuario não encontrado", "not_found"));
        }

        res.json(user.data());
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

module.exports = Users;
