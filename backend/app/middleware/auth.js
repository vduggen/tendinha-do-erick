const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
    if (req.body.senha) {
        req.body.senha = bcrypt(req.body.senha, 8);
    }
    next();
};