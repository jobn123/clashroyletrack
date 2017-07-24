//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    decks: [{
      title: 'Arena 1',
      place: 'Goblin Stadium',
      img: '../../images/arenas_1.png'
    }, {
      title: 'Arena 2',
      place: 'Goblin Stadium',
      img: '../../images/arenas_2.png'
      }, {
        title: 'Arena 3',
        place: 'Goblin Stadium',
        img: '../../images/arenas_3.png'
    }, {
      title: 'Arena 4',
      place: 'Goblin Stadium',
      img: '../../images/arenas_4.png'
      }, {
        title: 'Arena 5',
        place: 'Goblin Stadium',
        img: '../../images/arenas_5.png'
    }, {
      title: 'Arena 6',
      place: 'Goblin Stadium',
      img: '../../images/arenas_6.png'
      }, {
        title: 'Arena 7',
        place: 'Goblin Stadium',
        img: '../../images/arenas_7.png'
    }, {
      title: 'Arena 8',
      place: 'Goblin Stadium',
      img: '../../images/arenas_8.png'
      }, {
        title: 'Arena 9',
        place: 'Goblin Stadium',
        img: '../../images/arenas_9.png'
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
