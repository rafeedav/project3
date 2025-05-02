const express = require('express');
const router = express.Router();
const deviceService = require('../services/deviceService');

// Get all devices
router.get('/', (req, res) => {
  const devices = deviceService.getAllDevices();
  res.json(devices);
});

// Get specific device status
router.get('/:id', (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: 'Device ID is required' });
  }

  const device = deviceService.getDeviceById(id);

  if (device) {
    res.json(device);
  } else {
    res.status(404).json({ message: 'Device not found' });
  }
});

module.exports = router;
