const express = require("express");
const app = express();
const router = express.Router();
const accountController = require ("../controller/accountController");

router.post("/register", accountController.createAccount);
router.get("/login", accountController.readAccount);
module.exports = router;
