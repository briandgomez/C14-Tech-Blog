const { Comment } = require('../models');

const commentdata = [
    {
        body: 'I am post 1',
    },
    {
        body: 'I am post 2',
    },
    {
        body: 'I am post 3',
    },
    {
        body: 'I am post 4',
    },
    {
        body: 'I am post 5',
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
