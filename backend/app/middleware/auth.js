const bcrypt = require("bcrypt");

module.exports = (req, res, next) => {
  const { senha } = req.body;

  if (senha) {
    bcrypt.hash(senha, 10).then((item) => {
      console.log(item);
      req.body.senha = item;
      next();
    });
  }

  // next();
};
