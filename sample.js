const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Sample route is working!' });
});

module.exports = router;
