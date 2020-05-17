const supertest = require("supertest");
const app = require("../../server");
jest.mock("../../utils/createToken", () => () => "19mob");
describe("/POST auth", () => {
  it("should be response with token", (done) => {
    supertest(app)
      .post("/auth")
      .send({ email: "vitorvarela3@gmail.com", password: "123456" })
      .set("Accept", "application/json")
      .end((error, response) => {
        expect(response.body.token).toEqual("19mob");
        expect(response.statusCode).toEqual(200);
        done();
      });
  });

  it("should be response with error", (done) => {
    supertest(app)
      .post("/auth")
      .send({ email: "", password: "" })
      .set("Accept", "application/json")
      .expect(
        401,
        {
          code: "not_authorized",
          message: "Usuario não autorizado",
        },
        done
      )
  });
});
