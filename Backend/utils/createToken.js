const jwt = require("jsonwebtoken");

const createToken = async (email, id) => {
    return jwt.sign(
        {
          email,
          id
        },
        salt,
        {
          expiresIn: "1h",
        }
      );
  };

  module.exports = {
    createToken
  };