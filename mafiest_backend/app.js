const express = require('express');
const cors = require('cors');
const middleware = require('./utils/middleware');

// Import routers
const recordingsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const contactsRouter = require('./controllers/contacts');
const activitiesRouter = require('./controllers/tareasRouters');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recordings', recordingsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/activities', activitiesRouter);

// Error handling
app.use(middleware.errorHandler);

module.exports = app;
