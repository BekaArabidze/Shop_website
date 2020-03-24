//
// ─── MODELS ─────────────────────────────────────────────────────────────────────
//
const BlogPost = require('../../models/blog-post.model')


//
// ─── QUERYS ─────────────────────────────────────────────────────────────────────
//
const adminQuerys = require('../../querys/admin.querys')


//
// ─── BLOG ───────────────────────────────────────────────────────────────────────
//
exports.getAllblogs = async (req, res) => {

    try {
        const blogPosts = await adminQuerys.getFromCollection('blogPosts')

        res.status(200).json({
            "blogPosts": blogPosts
        });
    } catch (error) {
        console.log(error)
    }
}

exports.postBlogs = async (req, res) => {
    const { name, description } = req.body;

    const blogPost = await new BlogPost(
        name,
        description
    )

    try {
        await adminQuerys.postToCollection('blogPosts', blogPost);

        res.status(200).json({
            "message": "succsessfully inserted the object"
        });
    } catch (error) {
        console.log(error)
    }

}



