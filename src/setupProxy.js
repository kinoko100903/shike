//http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
const proxy = require('http-proxy-middleware');

module.exports = (app)=>{
  app.use("/b2c_base",proxy({
    target:"https://m.vsigo.cn",
    changeOrigin:true
  }))
}


//https://m.vsigo.cn/b2c_base/common/getcategorylist         