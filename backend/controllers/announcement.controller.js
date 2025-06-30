const Announcement = require('../models/announcement.nodel');

// Create
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, message } = req.body;
    const announcement = await Announcement.create({ title, message });
    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create announcement' });
  }
};

// Fetch All
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
};
