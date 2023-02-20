const express = require("express");
const router = express.Router();

const sauceController = require("../controllers/sauces");
//Renforcement de la sécurité sur les routes
const authentification = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", authentification, multer, sauceController.createSauce);
router.put("/:id", authentification, multer, sauceController.modifySauce);
router.delete("/:id", authentification, sauceController.deleteSauce);
router.get("/:id", authentification, sauceController.getOneSauce);
router.get("/", authentification, sauceController.getAllSauce);

router.post("/:id/like", authentification, sauceController.likeDislike);

module.exports = router;
