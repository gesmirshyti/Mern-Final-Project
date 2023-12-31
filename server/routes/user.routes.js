const UserController = require("../controller/user.controller")
const { authenticate } = require('../config/jwt.config');
const PostController = require("../controller/post.controller");
// const CommentController = require('../controller/comment.controller');


module.exports =(app) =>{
    app.post("/api/register",UserController.register)
    app.post("/api/login",UserController.login)
    app.post("/api/logout",UserController.logout)
    app.patch('/api/profile/update/:id',authenticate, UserController.updateUser);
    app.get('/api/users/:id', UserController.getUser)

    app.get('/api/profile/posts',authenticate, PostController.getAllPosts); 
    app.post('/api/profile/createPost', PostController.createPost);
    // app.get('/api/profile/posts/:id',authenticate, PostController.addCommentToPost);
    app.delete('/api/profile/:id',authenticate, PostController.deletePost);  
    app.get('/api/post/:id', PostController.getPost)
    app.patch('/api/post/details/edit/:id', PostController.updatePost)


    app.post('/api/home/comments/create', PostController.createComment);
    // app.get('/api/home/post/details/:id', PostController.getCommentsByPostId);
    app.post('/api/posts/like/:postId',authenticate, PostController.likePost);
    app.post('/api/posts/unlike/:postId',authenticate, PostController.unlikePost);
    app.get('/api/likedPosts',authenticate, PostController.getLikedPosts);



}