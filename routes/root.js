const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const response = { 
    status: true,
    message: "You probably shouldn't be here, but...",
    data: {
        service: "test-api",
        version: "1.0"
    }
  };

  res.send(`<pre>${JSON.stringify(response, null, 4)}</pre>`);
});

router.use('/api', require('./api/sendmail'));

module.exports = router;