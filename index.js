// initialization of our application, require all installed modules
const express = require ('express'),
      body-parser = require ('body-parser'),
      method-override = require ('method-override'),
      morgan = require ('morgan'),
      pg = require ('pg'), // we make the connection with sequelize so we don't need to require
      pug = require ('pug'),
      sequelize = require ('sequelize');

var app = express(),
    sequelize = Sequelize('bubodb', porcess.env.POSTGRES_USER, porcess.env.POSTGRES_PASSWORD, {postgrs});

    /* var sequelize = new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },

      // SQLite only
      storage: 'path/to/database.sqlite'
    });

    // Or you can simply use a connection uri
    var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname'); */

notice we call the define method from sequelize and create and object called notice/messages with the following with title and body,. we put that all in a global variable.


specified verision of morgan we are going to use 'dev'
