const express = require('express');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');
const helpers = require('./helpers/saveData');
require('dotenv/config');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  fileupload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.post('/api', async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        data: null,
        message: 'no files uploaded',
      });
    } else {
      const uploadedFile = req.files.bigdata;
      uploadedFile.mv('./file.csv', (err) => {
        if (err) {
          res.send({
            data: null,
            message: err,
          });
        } else {
          res.setHeader('Content-Type', 'application/json')
          helpers.saveCSVtoDB((err, msg, data) => {
            if(!err && data) {
              res.json(data)
            } else {
              res.json({error: err, message: msg, data: null})
            }
          })
        }
      });
    }
  } catch (error) {
    res.send({
      data: null,
      message: error,
    });
  }
});

mongoose.connect(process.env.DB_CONN, () => console.log('connected to DB!'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
