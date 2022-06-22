require('dotenv').config();

const express = require('express');
const mainRoter = require('./src/routes');
const db = require('./src/config/db');

const server = express();
const PORT = process.env.PORT || 8080;

db.connect()
   .then(() => {
      console.log('Database Connected');

      server.use(express.urlencoded({ extended: false }));
      server.use(express.json());

      server.use(mainRoter);

      server.listen(PORT, () => {
         console.log(`App listening on port ${PORT}`);
      });
   })
   .catch((error) => {
      console.log(error);
   });
