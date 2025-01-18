const express = requiew('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//dotenv config
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
  res.status(200).send({ message: 'server running sucessfully' });
});

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.bgYellow,
  );
});
