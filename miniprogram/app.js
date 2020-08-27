//app.js
const Towxml = require('/towxml/main');
App({
  globalData: {
    navHeight: 0,
    is_to_index:false,
    //判断是否是iPhone X
    isIPX: false,
  },
  onLaunch: function ()
  {
    //判断是否是iPhone X
    this.checkIsIPhoneX()

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
  },
  //创建一个towxml对象，供其它页面调用
  

  //声明Markdown文件目录路径
  docDir: 'https://7363-scnu-dev-iyplf-1259750702.tcb.qcloud.la/',

  //声明一个数据请求方法
  getText: (url, callback) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/octet-stream'
      },
      success: (res) => {
        if (typeof callback === 'function') {
          callback(res);
        };
      }
    });
  },
  towxml : new Towxml(),

  
  checkIsIPhoneX: function () {
    const self = this
    wx.getSystemInfo({
      success: function (res) {
        // 根据 model 进行判断
        if (res.model.search('iPhone X') != -1) {
          self.globalData.isIPX = true
        }
        // 或者根据 screenHeight 进行判断
        // if (res.screenHeight == 812) {
        //   self.globalData.isIPX = true
        // }
      }
    })
  },
})
