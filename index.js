// server.js
const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('before:run', () => {
    const reportsDir = path.join(__dirname, '..', '..', 'cypress', 'reports');
    try {
      if (fs.existsSync(reportsDir)) {
        // Only attempt to delete if the folder is not in use
        fs.rmdirSync(reportsDir, { recursive: true });
      }
    } catch (error) {
      console.error('Error cleaning up reports folder:', error);
    }
  });

  return config;
};
