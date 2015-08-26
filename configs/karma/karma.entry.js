var context = require.context('../../src/__tests__', true, /\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
