const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * Setup proxy
 * Note that if you change anything in this file you should restart the project to see the results.
 */

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === "production"
          ? ""
          : "https://api.thecatapi.com/",
      changeOrigin: true,
    })
  );
};
