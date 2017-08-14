//deck.js
Page({
  data: {
    cards: []
  },
  onLoad: function (opts) {
    var that = this
    console.log("get Params")
    console.log(opts.id)
    wx.request({
      url: 'https://51537554.ngrok.io/api/getArenaCardsById/?aid='+ opts.id +'&format=json',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          cards: res.data.data
        })
      }
    })
  }
})


