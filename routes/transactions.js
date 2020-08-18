const express = require('express');

const router = express.Router();

// @route GET /api/transactions
// @desc Transactions resource management
router.get('/', (req, res, next) => {
  res.status(200).json({ resource: 'Transactions' });
});

module.exports = router;
