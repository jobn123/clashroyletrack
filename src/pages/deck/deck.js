//deck.js
Page({
  data: {
    cards: []
  },
  onLoad: function () {
    var that = this
    // wx.request({
    //   url: 'https://51537554.ngrok.io/api/popularCardslists/?format=json',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       cards: res.data[0].cards
    //     })
    //   }
    // })
  }
})

