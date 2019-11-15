require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const subscriberRouter = require('./routes/subscribers');

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Connected to DB'));

app.use(express.json());
app.use('/subscribers', subscriberRouter);

app.listen(3000, () => console.log('Server Started'));
