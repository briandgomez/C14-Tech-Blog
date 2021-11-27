const { Post } = require('../models');

const postdata = [
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        body: 'Seed 1'
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        body: 'Seed 2'
    },
    {
        title: 'Nunc purus.',
        body: 'Seed 3'
    },
    {
        title: 'Pellentesque eget nunc.',
        body: 'Seed 4'
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        body: 'Seed 5'
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
