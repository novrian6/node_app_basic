const axios = require('axios'); // Import Axios

// Define an async function to fetch data from an API
async function getUserData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); // Wait for the promise to resolve
    console.log(response.data); // Log the data once fetched
  } catch (error) {
    console.error('Error fetching data:', error.message); // Catch any errors
  }
}

getUserData();