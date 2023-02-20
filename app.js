//importaion des dépendances
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

// Connexion à MongoDB avec l'importation des variables
const password = process.env.DB_PASSWORD;
const userName = process.env.USER_NAME;
const dataBase_Name = process.env.DATABASE_NAME;
const mongoDb = process.env.MONGO_DB_SRV;
const mongo_net = process.env.MONGO_NET;
const uri = `${mongoDb}${userName}:${password}${mongo_net}${dataBase_Name}`;
mongoose
  .connect(uri)
  .then(() => console.log("La connexion à MongoDB a bien été établie!"))
  .catch(() => console.log("La connexion à MongoDB a échouée !"));

const app = express();

//Protection des en-têtes HTTP avec Helmet.
app.use(
  helmet({
    //Seules les demandes provenant du même site peuvent lire la ressource
    crossOriginResourcePolicy: { policy: "same-site" },
  })
);

//Configuration des en-têtes CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
//Gestion des images dans un dossier images.
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
