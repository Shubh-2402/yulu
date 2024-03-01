const express = require("express");
const { userController } = require("../controllers");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { authorizeRoles } = require("../middlewares/authorizeRoles");
const router = express.Router();

router
  .get("/", authenticateToken, authorizeRoles("user", "admin"), userController.getUsers)
  .get("/:id", authenticateToken, authorizeRoles("user", "admin"), userController.getUser)
  .patch("/:id", authenticateToken, authorizeRoles("admin"), userController.updateUser)
  .delete("/:id", authenticateToken, authorizeRoles("admin"), userController.deleteUser)

module.exports = router;
