const fs = require('fs').promises; // Use the promises version of the fs module

// Define an async function to read a file
async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8'); // Wait for the file to be read
    console.log(data); // Log the file content
  } catch (err) {
    console.error('Error reading file:', err.message); // Handle any errors
  }
}

readFile();