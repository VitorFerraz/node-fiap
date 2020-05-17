const supertest = require("supertest");
const app = require("../../server");

describe("empty auth", ()=> {
    it("should return 401 status code and throw error auth not found", done => { 
        supertest(app)
        .get("/users/1")
        .expect(
           401,
           {
             code: "auth_not_found",
             message: "Autorização não encontrado",
           },
           done
         )
    })

    it("should return 401 status code and throw error token not found", done => { 
        supertest(app)
        .get("/users/1")
        .set('Authorization', 'abc123')
        .expect(
           401,
           {
             code: "token_not_found",
             message: "Token não encontrado",
           },
           done
         )
    })
})
