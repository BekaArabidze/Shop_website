const express = require('express');
const router = express.Router();


//
// ─── CONTOLLERS ─────────────────────────────────────────────────────────────────
//
const adminBlogControllers = require("../../controllers/admin/admin.contollers.blog")
const adminServicesControllers = require("../../controllers/admin/admin.contollers.services")


// ─── BLOG POSTS ─────────────────────────────────────────────────────────────────
router.get('/blog-posts', adminBlogControllers.getAllblogs);
router.post('/post-blog-post', adminBlogControllers.postBlogs);


// ─── SERVICES ─────────────────────────────────────────────────────────────────
router.get('/services', adminServicesControllers.getAllServices);
router.post('/create-service', adminServicesControllers.postService);
router.put('/update-service/:serviceId', adminServicesControllers.updateService);
router.delete('/delete-service/:serviceId', adminServicesControllers.deleteService);



module.exports = router; 