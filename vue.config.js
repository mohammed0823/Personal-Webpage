const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/YOUR_REPOSITORY_NAME>/' : '/'
};

