// index.js
const { fetchMyIP } = require('./iss');

// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };


 const { fetchCoordsByIP } = require('./iss')

 fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
  
    console.log('It worked! Returned IP:' , ip);

  });

  fetchCoordsByIP(IP, (error,data) => {
    if (error) {
        console.log("It didn't work!" , error);
        return;
    } else {
        console.log("It worked! Returned Coordinates:", data);
        
    }
  });

fetchMyIP();
module.exports = { fetchMyIP };

// index.js

// // The code below is temporary and can be commented out.
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
