//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("页面初始化")
    var baseuserInfo = wx.getStorageSync('userinfo')
    console.log("获取用户基础信息",baseuserInfo)
    this.setData({
      userInfo: JSON.parse(baseuserInfo.detail.rawData),
    })
  },
})