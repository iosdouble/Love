//index.js
//获取应用实例
const app = getApp()



Page({
  data: {
    array: [{
        message: "foo"
      },
      {
        message: "bar"
      }
    ],
    hello: "Hello World!",
    timer: '', //定时器名字
    countDownNum: '60', //倒计时初始值
    id: '',//请求数据参数id
    musicMsg: {},//接收数据对象
  },
  onLoad: function () {

  },
  onShow: function () {
    //什么时候触发倒计时，就在什么地方调用这个函数
    this.countDown();
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum; //获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () { //这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  },
  // 开始播放
  listenerButtonPlay: function (src) {
    console.log(src)
    const bgMusic = wx.getBackgroundAudioManager()
    console.log(bgMusic)
    var that = this
    console.log(src)
    bgMusic.src = src;
    console.log("播放音乐",bgMusic)
    bgMusic.play(); //播放音乐
  },
  getPicInfo() {
    var that = this
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=74055853',
      method: 'GET',
      success: function (res) {
        console.log("请求成功",res)
        var bgMusic = wx.createInnerAudioContext()
        console.log("=====",bgMusic)
        bgMusic.src = res.data.bitrate.file_link;
        console.log("播放音乐",bgMusic)
        bgMusic.play(); //播放音乐
        // that.listenerButtonPlay(res.data.bitrate.file_link) //成功回调执行播放音乐
        // that.setData({
        //   musicMsg: res.data.bitrate, //赋值对象
        // })

      }
    })
  },

  onUnload() {
    var that = this
    that.listenerButtonStop() //页面卸载时停止播放
    console.log("离开")
  },

  //暂停
  audioPause: function () {
    var that = this
    bgMusic.pause(); //暂停播放音乐
    console.log('暂停')
  },
  audioPlay: function () {
    var that = this
    bgMusic.play(); //停止播放
    console.log('继续播放')
  },
  //停止播放
  listenerButtonStop: function () {
    bgMusic.stop()
  },
})