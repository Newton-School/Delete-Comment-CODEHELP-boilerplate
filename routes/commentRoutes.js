const express = require("express");

const { createComment, getComment, deleteComment } = require("../controllers/commentControllers");

const router = express.Router();

router.get("/:id", getComment);
router.post("/create", createComment);
router.post("/delete/:id", deleteComment);

module.exports = router;