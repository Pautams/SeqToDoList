const express = require("express");
const app = express();
const router = express.Router();
const accountController = require ("../controller/taskController");

router.post("/create_task",taskController.createTask);
router.post("/delete_task",taskController.deleteTask);
router.post("/update_task",taskController.updateTask);
module.exports = router;