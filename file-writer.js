// file-writer.js
const fs = require('fs'); // Import the File System module

// Write data to a file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File created successfully!');
});