const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router
  .get("/", userController.getUsers)
  .get("/:id", userController.getUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser)

module.exports = router;
