const express = require('express');
const router = express.Router();
const {
  createAnnouncement,
  getAnnouncements,
} = require('../controllers/announcement.controller');

router.post('/', createAnnouncement);
router.get('/', getAnnouncements);

module.exports = router;
