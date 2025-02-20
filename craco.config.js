const path = require('path');
module.exports = {
  webpack: {
    alias: {
      "@components/*": ["components/*"],
      "@services/*": ["services/*"],
      "@contexts/*": ["contexts/*"],
      "@reducers/*": ["reducers/*"],
      "@assets/*": ["assets/*"],
      "@common/*": ["common/*"],
    }
  },
};