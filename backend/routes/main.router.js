const express = require('express');
const router = express.Router();

// Minimal router so the app can start without errors.
router.get('/', (req, res) => {
  res.json({ ok: true, message: 'API is running' });
});

module.exports = router;
