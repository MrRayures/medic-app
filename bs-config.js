// bs-config.js
const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  server: {
    baseDir: "./", // serve from project root (adjust to "dist" or "public" if you build)
    middleware: [
      historyApiFallback({
        // optional: rewrites or index file
        // verbose: true
      })
    ]
  },
  files: ["*.html", "src/js/*.js", "src/assets/*.css"], // watch and reload on change
  watchEvents: ["change"],
  notify: false,
  open: true,
  port: 3000
};