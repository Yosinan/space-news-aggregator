const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { getUser, getUserById, registerUser, loginUser, logoutUser, updateUserPassword, deleteUser } = require("../controllers/userController");

// using the APIs
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getUser);
router.get("/:id", auth, getUserById);
router.put("/change/:id", auth, updateUserPassword);
router.delete("/delete/:id", auth, deleteUser);


module.exports = router;
