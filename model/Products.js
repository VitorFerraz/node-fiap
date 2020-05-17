const BaseModel = require("./BaseModel");

class Products extends BaseModel {
    constructor() {
        super();
    }

    add(payload) {
        return this.db.collection("products").add(payload);
    }

    update(id, payload) {
        return this.db.collection("products").doc(id).set(payload);
    }

    delete(id) {
        return this.db.collection("products").doc(id).delete();
    }

    get(id) {
        return this.db.collection("products").doc(id).get();
    }

    getAll() {
       return this.db.collection("products").get();
        // return products.docs.map(doc => doc.data());
    }

    getBy(conditions) {
        let query = this.db.collection("products");

        conditions.forEach((condition) => {
            query = query.where(condition.field, condition.operator, condition.value);
        });

        return query.get();
    }
}

module.exports = Products;
