//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    decks: [],
    cards: []
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  goToCards: function() {
    // wx.navigateTo({
    //   url: '../cards/cards',
    // })
    wx.openUrl("https://www.zhihu.com/question/60253383")
  },
  onLoad: function () {

    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://c2554f86.ngrok.io/api/index/?format=json',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          decks: res.data[0].decks,
          cards: res.data[0].popularCards
        })
      }
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
