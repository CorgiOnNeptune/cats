// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly.
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

// CHANGE 1: Moved console.log to new function.
const returnData = data => {
  console.log(`Return Value:\n${data}`);
};

// Change 2: we're now passing two arguments to breedDetailsFromFile
breedDetailsFromFile('Bombay', returnData);