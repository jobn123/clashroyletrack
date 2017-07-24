'use strict';

var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    console.log('onLoad');
    var that = this;

    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      });
    });
  }
});