const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//If User is deleted so are the Posts
Post.belongsTo(User, {
    foreignKey: 'user_id',
    //CASCADE links the childe to the parent and will delete or update depending on what the parent does
    onDelete: 'CASCADE'
});

//If Post is deleted so are the Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//If User is deleted so are the Comments
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post
};