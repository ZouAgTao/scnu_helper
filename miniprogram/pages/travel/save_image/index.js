const App = getApp();

Page({
  data: {
    text_back: "< 返回"
  },

  onLoad: function (options)
  {
    //自适应填充
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        if (res.model == "iPhone 5") {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 + 192,
            statusBarHeight: App.globalData.navHeight * 2 + 16
          });
        }
        else if (res.model == "Nexus 5") {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 + 50,
            statusBarHeight: App.globalData.navHeight * 2 + 8
          });
        }
        else if (res.model.search("iPhone") != -1 && res.model.search("Plus") != -1) {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 - 140,
            statusBarHeight: App.globalData.navHeight * 2 - 6
          });
        }
        else if (res.model.search("iPhone") != -1 && res.model.search("XR") != -1) {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 - 172,
            statusBarHeight: App.globalData.navHeight * 2 - 10
          });
        }
        else if (res.model.search("iPhone") != -1 && res.model.search("XS") != -1) {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 - 172,
            statusBarHeight: App.globalData.navHeight * 2 - 10
          });
        }
        else if (res.model.search("iPhone") != -1) {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2,
            statusBarHeight: App.globalData.navHeight * 2
          });
        }
        else if (res.model.search("Nexus") != -1) {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 - 136,
            statusBarHeight: App.globalData.navHeight * 2 + 10
          });
        }
        else {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 + 100,
            statusBarHeight: App.globalData.navHeight * 2 + 10
          });
        }
      }
    });

    //导航栏高度
    this.setData({
      navHeight: App.globalData.navHeight * 2 + 90
    });
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },

  //点击【返回】按钮触发
  onClick_toBack: function()
  {
    wx.navigateBack({});
  },

  //点击【保存图片】触发
  onClick_SaveImage: function()
  {
    wx.saveImageToPhotosAlbum({
      filePath: '/img/bustime_b.png',
      success(res) {
        wx.showToast({
          title: '保存成功',
        });
      },
      fail(res) {
        wx.showToast({
          title: '保存失败',
        });
      }
    });
  }
})