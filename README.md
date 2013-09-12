## Express app skeleton

<!-- change this to point to YOUR travis build icon -->
[![Build Status](https://travis-ci.org/zuzak/express-skeleton.png?branch=master)](https://travis-ci.org/zuzak/express-skeleton)

**[Click here to fork this repository](https://github.com/zuzak/express-skeleton/fork)**

This is a skeleton for a [node.js](http://nodejs.org) web application, using
[express](http://expressjs.com) and [jade](http://jade-lang.com).

It also includes a sane configuration file mechanism with the help of
[convict](https://github.com/lloyd/node-convict), and contains a ready-to-extend
[travis](https://travis-ci.org) test suite utilising
[mocha](http://visionmedia.github.io/mocha).

## Usage
1. [Fork this repository.](https://github.com/zuzak/express-skeleton/fork).
2. Clone the repository to your workspace.
2. Edit the ``package.json`` file by adding a name.
   ```json
   {
       "name":"sandbox",
       "version":"0.0.1",
       ...etc
   }
   ```
3. Run ``npm install`` to pull in the dependencies.
4. Run ``npm start`` to run the web server.
5. Run ``npm test`` to run the test suite.
6. Set up automated testing by visiting your
   [travis profile](https://travis-ci.org/profile).
7. Replace this ``README.md`` with something appropriate to your project.
