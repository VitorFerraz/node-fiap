const cryptoPassword = require("../cryptoPassword");
process.env.SECRET = describe("cryptoPassword", () => {
  it("should return a valid crypto password", () => {
    const password = "12345";
    expect(cryptoPassword(password)).not.toBeNull();
  });

  it("should return a different crypto password", () => {
    const password = "12345";
    let newPassword = cryptoPassword(password);
    expect(newPassword).not.toEqual(password);
  });
});
