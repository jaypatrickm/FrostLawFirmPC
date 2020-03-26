require('dotenv').config();
module.exports = {
  distDir: '_next',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  env: {
    sendgrid_api_key: process.env.sendgrid_api_key
  }
};
