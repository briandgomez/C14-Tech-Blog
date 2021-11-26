const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I am post 1',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'I am post 2',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'I am post 3',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'I am post 4',
        user_id: 1,
        post_id: 20
    },
    {
        comment_text: 'I am post 5',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'I am post 6',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'I am post 7',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'I am post 8',
        user_id: 6,
        post_id: 20
    },
    {
        comment_text: 'I am post 9',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'I am post 10',
        user_id: 5,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
