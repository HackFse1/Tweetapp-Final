const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      // target: 'http://localhost:8082', // API endpoint 1
      target: 'http://tweetappuserservice1-env.eba-b7kvjkfa.ap-northeast-1.elasticbeanstalk.com/', // API endpoint 1
      //target: 'http://3.87.108.193:8082',
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      // target: 'http://localhost:8083', // API endpoint 2
      target: 'http://tweetapptweetservice1-env-1.eba-2qm9wfaa.ap-northeast-1.elasticbeanstalk.com/',
      //target: 'http://34.229.167.216:8083',
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}