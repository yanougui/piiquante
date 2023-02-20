const rateLimit = require("express-rate-limit");

//Limite d'utilisation de requête à 3 maximum
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
});
module.exports = { limiter: limiter };
