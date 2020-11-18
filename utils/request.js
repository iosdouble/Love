const config = require("../config/index")
//请求码接口
const requestAsk = (obj, method='get') => {
  let header ={
    Language: config.request.Language,
    Device: config.request.Device,
  }
  let token = wx.getStorageSync('userToken')
  if(token){
    header['x-access-token'] = token
  }

  wx.request({
    url: config.request.host + obj.url.url,
    header,
    method: method,
    data: obj.data,   //参数
    success:res=>{
      if(obj && obj.success && typeof obj.success === "function"){
        obj.success(res)
      }
    },
    fail:err=>{
      if(obj && obj.fail && typeof obj.fail === "function"){
        obj.fail(err)
      }
    },
    complete:com=>{
      if(obj && obj.complete && typeof obj.complete === "function"){
        obj.complete(err)
      }
    }
  })

}
module.exports = requestAsk;
