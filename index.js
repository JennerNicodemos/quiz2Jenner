const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;

// Create a Schema object

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    myName: { type: String },
    mySID: { type: Number, unique: true, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// Create a Model object

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form

  // connect to the database and log the connection

  // add the data to the database

  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
