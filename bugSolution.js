const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
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