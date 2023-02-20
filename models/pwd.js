const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

//Règles définies pour la création du mot de passe.
passwordSchema
  .is()
  .min(8) // Minimum 8 caractères
  .is()
  .max(100) // Maximum 100 caractères
  .has()
  .uppercase(1) // Doit contenir au moins 1 majuscule
  .has()
  .lowercase() // Doit contenir des minuscules
  .has()
  .digits(2) // Doit contenir au moins 2 chiffres
  .has()
  .not()
  .spaces() // Ne doit pas contenir d'espaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "Azerty123"]); //refuse ces mots de passe

module.exports = passwordSchema;
