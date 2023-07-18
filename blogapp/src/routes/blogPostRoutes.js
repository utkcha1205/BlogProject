// routes/blogPostRoutes.js
const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

// Define routes for blog posts
router.get('/blogposts', blogPostController.getAll);
router.get('/blogposts/:id', blogPostController.getById);
router.post('/blogposts', blogPostController.create);
router.put('/blogposts/:id', blogPostController.update);
router.delete('/blogposts/:id', blogPostController.delete);

module.exports = router;
