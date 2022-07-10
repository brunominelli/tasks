const express = require('express');
require('express-async-errors');
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const { handleErrors } = require('./middlewares');

const tasks = require('./routes/tasks');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/tasks', tasks);

app.use(handleErrors);

app.listen(process.env.PORT, () => {
  const message = `Rodando na porta ${process.env.PORT}`;
  console.log(message);
});
