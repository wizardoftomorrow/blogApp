const express = require('express'),
      router = express.Router();

router.get('/', (request, response) => {
  response.render('messages/index');
});

module.exports = router;
