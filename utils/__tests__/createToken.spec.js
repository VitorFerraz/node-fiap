const createToken = require("../createToken");
process.env.SECRET = describe("createToken", () => {
  it("should return token with default expires", () => {
    expect(createToken({ id: 1 })).not.toBeNull();
  });

  it("should return token with default expires", () => {
    expect(createToken({ id: 1 }, "60s")).not.toBeNull();
  });

  it("should return a error", () => {
    let thrownError = null;

    try {
      createToken({ id: 1 }, "60s", null);
    } catch (error) {
      thrownError = error;
    }

    expect(thrownError).not.toBeNull();
  });
});
