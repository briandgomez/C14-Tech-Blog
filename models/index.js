const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

//If User is deleted all associated Posts will be deleted
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

//If User is deleted all associated Comments will be deleted
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

//If a Post is deleted all associated Comments will be deleted
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment };
