const fs = require('fs').promises; // Import the promises API from the File System module

// Read the file using promises
fs.readFile('example.txt', 'utf8')
  .then((data) => {
    // Log the file content if successful
    console.log('File contents:', data);
  })
  .catch((err) => {
    // Log the error if the file read fails
    console.error('Error reading file:', err.message);
  });