const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling missing! 
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a failure condition (e.g., database error, network issue)
      const shouldFail = Math.random() < 0.5; 
      if (shouldFail) {
        reject(new Error('Asynchronous operation failed!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}