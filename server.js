//Helps connect to differrent files and directories easier
const path = require('path');

const express = require('express');
//Creates a session
const session = require('express-session');
const exphbs = require('express-handlebars');

//Creates express application
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Session requirements
const sess = {
    secret: 'secret-password',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helper')

const hbs = exphbs.create({ helpers });

//Uses handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});