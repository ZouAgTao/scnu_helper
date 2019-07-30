//app.js
App({
  globalData: {
    navHeight: 0
  },
  onLaunch: function ()
  {
    if (!wx.cloud)
    {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    }
    else
    {
      wx.cloud.init({
        env: 'scnu-dev-iyplf',
        traceUser: true,
      });
    }

    //获取状态栏高度
    var that = this;
    wx.getSystemInfo({
      success: function(res)
      {
        that.globalData.navHeight = res.statusBarHeight;
        that.globalData.screenHeight = res.screenHeight;
      }
    });
  }
})
