const context = require.context('../../__tests__', true, /\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
