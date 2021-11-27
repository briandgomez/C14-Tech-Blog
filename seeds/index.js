const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- seedAll Successfull -----\n')

    await seedUsers();
    console.log('\n----- Users seeded -----\n')

    await seedPosts();
    console.log('\n----- Posts seeded -----\n')

    await seedComments();
    console.log('\n----- Comments seeded -----\n')

    process.exit(0);
};

seedAll();
