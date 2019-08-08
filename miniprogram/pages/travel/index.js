var config = require('config.js');
const App = getApp();
 
Page({
  data: {
    text_back: "< 返回",
    longitude: 113.029449,
    latitude: 23.146902,
    markers: [],
    showlocable:"",
    topHeight: 638,
    style_tab:[
      "color: rgba(16, 16, 16, 0.93)",
      "color: rgba(118, 166, 251, 1)",
      "color: rgba(16, 16, 16, 0.93)"
    ],
    now_siteitem:"",
    scroll_top:0,
    now_tab:1
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

    //初始化载入bus_bar_color数据
    this.setData({
      bus_bar_color: config.BusBarColor
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

  //点击【我的收藏】tab按钮触发
  onClick_TabCollection: function()
  {
    this.changeTab(0);
  },

  //点击【周边出行】tab按钮触发
  onClick_TabAround: function () {
    this.changeTab(1);
  },

  //点击【校车时刻】tab按钮触发
  onClick_TabSchoolBus: function () {
    this.changeTab(2);
  },

  //点击【返回】按钮触发
  onClick_toBack: function()
  {
    wx.navigateBack({});
  },

  changeTab: function(tab_id)
  {
    var style_tab = this.data.style_tab;
    for (var i = 0; i < style_tab.length; i++)
    {
      if(i==tab_id)
      {
        style_tab[i] = "color: rgba(118, 166, 251, 1)";
      }
      else
      {
        style_tab[i] = "color: rgba(16, 16, 16, 0.93)";
      }
    }

    this.setData({
      style_tab: style_tab,
      now_siteitem: "",
      scroll_top: 0,
      now_tab: tab_id
    });
  },

  //点击【定位】按钮触发
  onClick_GetLocation: function()
  {
    var that = this;

    wx.showLoading({
      title: '正在更新当前位置',
      mask: true
    })
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          showlocable: "true"
        });
      },
      fail() {
        wx.showToast({
          title: '无法获取到当前位置',
          icon: "none"
        });
      },
      complete: function () {
        wx.hideLoading()
      }
    });
  },

  //点击【保存图片】按钮触发
  onClick_SaveImage: function()
  {
    wx.navigateTo({
      url: '/pages/travel/save_image/index',
    });
  },

  //点击地点项目触发
  onClick_SiteBar: function(e)
  {
    var id = e.currentTarget.id;

    if(this.data.now_siteitem == id)
    {
      this.setData({
        now_siteitem: ""
      });
    }
    else
    {
      this.setData({
        now_siteitem: id
      });
    }
  }
})