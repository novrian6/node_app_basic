// api-request.js
const axios = require('axios'); // Import Axios

// Make a GET request to a public API
axios.get('https://api.github.com/users/octocat')
  .then((response) => {
    console.log('User Data:', response.data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error.message);
  });