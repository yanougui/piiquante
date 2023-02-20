const jwt = require("jsonwebtoken");
require("dotenv").config();

//Vérification de la validité du token avec la fonction verify.
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw " ID utilisateur non valide";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Demande non autorisée!"),
    });
  }
};
