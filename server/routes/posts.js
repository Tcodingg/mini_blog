const { getPost, createPost, deletePost } = require("../controllers/posts");
const express = require("express");

const router = express.Router();
router.get("/", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

module.exports = router;
