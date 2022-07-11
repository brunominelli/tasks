require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'ToDoList',
    host: process.env.HOSTNAME || 'localhost',
    dialect: process.env.DIALECT || 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'ToDoList',
    host: process.env.HOSTNAME || 'localhost',
    dialect: process.env.DIALECT || 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'ToDoList',
    host: process.env.HOSTNAME || 'localhost',
    dialect: process.env.DIALECT || 'mysql',
  },
};
