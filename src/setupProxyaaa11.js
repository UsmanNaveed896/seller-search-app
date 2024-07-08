// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://searchapp.ai',
//       changeOrigin: true,
//       secure: false, // Disable SSL verification for development
//       timeout: 5000, // Set a timeout to avoid long waiting times
//       onProxyReq: (proxyReq, req, res) => {
//         // Add any custom headers or logging if needed
//       },
//       onError: (err, req, res) => {
//         console.error('Proxy error:', err);
//         res.status(500).send('Proxy error: ' + err.message);
//       },
//       logLevel: 'debug', // Enable detailed logging for troubleshooting
//     })
//   );
// };