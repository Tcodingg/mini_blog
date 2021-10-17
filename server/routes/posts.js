const {
   getPost,
   createPost,
   deletePost,
   likePost,
} = require("../controllers/posts");
const express = require("express");

const router = express.Router();
router.get("/", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;
