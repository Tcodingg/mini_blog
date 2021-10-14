const { getPost, createPost } = require("../controllers/posts");
const express = require("express");

const router = express.Router();
router.get("/", getPost);
router.post("/", createPost);

module.exports = router;
