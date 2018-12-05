const merge = require('merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',  
})