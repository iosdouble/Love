// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("加载登录页面")
    var userInfo = wx.getStorageSync('userinfo') || {};
    console.log("获取全局用户信息", userInfo)
    if (Object.keys(userInfo).length!=0) {
      wx.switchTab({
        url: '../index/index',
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  userLogin: function (res) {
    var that = this
    var userInfo = wx.getStorageSync('userinfo') || {};
    console.log("获取全局用户信息", userInfo)
    if (Object.keys(userInfo).length===0) {
      console.log("点击了登录按钮", res)
      wx.setStorage({
        data: res,
        key: 'userinfo',
      })
    }
    wx.switchTab({
      url: '../index/index',
    })
    // wx.getUserInfo({
    //   lang: "zh_CN",
    //   success(res){
    //     console.log(res)
    //   }
    // })
    // wx.login({
    //   success (res){
    //     wx.request({
    //       url: 'http://localhost:8888/api/login?code='+res.code,
    //       success:function(ressponse){
    //         console.log(ressponse)
    //       }
    //     })
    //   }
    // })

  }


})