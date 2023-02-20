const passwordSchema = require("../models/pwd");

//Contrôle du mot de passe saisi par l'utilisateur afin que celui-ci corresponde au schema.
module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.status(400).json({
      message:
        "Le mot de passe doit contenir 8 caractères minimum, une majuscule, minuscules et deux chiffres minimum !!!",
    });
  } else {
    next();
  }
};
