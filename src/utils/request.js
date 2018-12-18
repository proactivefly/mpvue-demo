var rootUrl = 'https://devm.qingxiangchuxing.com' //根路由

/**
 * [request description]
 * @param  {[type]} url    [请求地址]
 * @param  {[type]} params [请求参数]
 * @param  {[type]} type   [get || post]
 * @return {[type]}        [description]
 */
function request(url,params,type) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: rootUrl + url,
      data: params,
      method:type?type:'POST',
      success: function(res) {
        resolve(res.data)
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}
export default request
