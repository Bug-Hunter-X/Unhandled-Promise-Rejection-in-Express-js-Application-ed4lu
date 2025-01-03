# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  The `bug.js` file shows an Express app with an asynchronous operation that might fail.  Crucially, it lacks proper error handling, leading to a crash if the asynchronous operation rejects.

The `bugSolution.js` file provides a corrected version with robust error handling.