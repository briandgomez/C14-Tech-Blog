const { Post } = require('../models');

const postdata = [
    {
        user_id: 1,
        title: 'Morbi non quam nec dui luctus rutrum.',
        body: 'Seed 1'
    },
    {
        user_id: 2,
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        body: 'Seed 2'
    },
    {
        user_id: 3,
        title: 'Nunc purus.',
        body: 'Seed 3'
    },
    {
        user_id: 4,
        title: 'Pellentesque eget nunc.',
        body: 'Seed 4'
    },
    {
        user_id: 5,
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        body: 'Seed 5'
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
