const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Getting all seeds..');

    await seedUsers();
    console.log('Retrieved all users');

    await seedPosts();
    console.log('Retrieved all posts');

    await seedComments();
    console.log('Retrieved all comments');

    process.exit(0);
};

seedAll();
