// file-reader.js
const fs = require('fs'); // Import the File System module

// Read the file example.txt in utf-8 encoding
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    // Handle the error if the file does not exist or is unreadable
    console.error('Error reading file:', err.message);
    return;
  }
  // Log the file contents to the console
  console.log('File contents:', data);
});