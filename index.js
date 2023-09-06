const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use('/', require('./routes/root'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
