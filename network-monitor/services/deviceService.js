const devices = [
  { id: '1', name: 'Router-1', ip: '192.168.1.1', status: 'online' },
  { id: '2', name: 'Switch-1', ip: '192.168.1.2', status: 'offline' },
  { id: '3', name: 'Firewall-1', ip: '192.168.1.3', status: 'online' }
];

function getAllDevices() {
  return devices;
}

function getDeviceById(id) {
  return devices.find(device => device.id === id);
}

module.exports = {
  getAllDevices,
  getDeviceById
};
