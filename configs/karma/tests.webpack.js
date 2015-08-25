var context = require.context('../../src/javascripts', true, /\.spec\.js$/);
context.keys().forEach(context);
