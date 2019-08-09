var config = require('config.js');
const App = getApp();
var src_longitude = 113.029449;
var src_latitude = 23.146902;

var school_marker = {
  id: 1024,
  longitude: src_longitude,
  latitude: src_latitude,
  zIndex: -1,
  width: 35,
  height: 35,
  iconPath: "/img/travel_bus_school.png",
  callout: {
    content: "学校",
    borderRadius: 6,
    padding: 10,
    borderWidth: 5,
    display: 'BYCLICK'
  }
};
 
Page({
  data: {
    text_back: "< 返回",
    longitude: src_longitude,
    latitude: src_latitude,
    markers: [],
    showlocable:"",
    topHeight: 638,
    style_tab:[
      "color: rgba(118, 166, 251, 1)",
      "color: rgba(16, 16, 16, 0.93)",
      "color: rgba(16, 16, 16, 0.93)"
    ],
    now_siteitem:"",
    scroll_top:0,
    now_tab:0,
    include_points:[],
    scale_size:16
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

    //初始化地点收藏存储数据
    var site_data;
    var collect_number;
    try
    {
      site_data = wx.getStorageSync("travel_sitedate");
      collect_number = wx.getStorageSync("travel_collectnumber");
      if(!site_data)
      {
        site_data = config.SiteData;
      }

      if (!collect_number)
      {
        collect_number = 0;
      }
    }
    catch (e)
    {
      site_data = config.SiteData;
      collect_number = 0;
    }

    //初始化载入site_data数据
    this.setData({
      site_data: site_data,
      collect_number: collect_number
    });

    //跳转到【周边出行】
    this.onClick_TabAround();
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

    this.setData({
      longitude:src_longitude,
      latitude:src_latitude,
      markers:[school_marker],
      include_points:[]
    });
  },

  //点击【周边出行】tab按钮触发
  onClick_TabAround: function () {
    this.changeTab(1);

    this.setData({
      longitude: src_longitude,
      latitude: src_latitude,
      markers: [school_marker]
    });
  },

  //点击【校车时刻】tab按钮触发
  onClick_TabSchoolBus: function () {
    this.changeTab(2);

    var school_marker = {
      id: 1024,
      longitude: 113.029103,
      latitude: 23.147961,
      zIndex: -1,
      width: 20,
      height: 22,
      iconPath: "/img/cursor.png",
      callout: {
        content: "候车点",
        borderRadius: 6,
        padding: 10,
        borderWidth: 5,
        display: 'ALWAYS'
      }
    };

    this.setData({
      longitude: 113.029103,
      latitude: 23.147961,
      markers: [school_marker]
    });
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
      now_tab: tab_id,
      scale_size: 16
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
    var ids = e.currentTarget.dataset.ids;

    if(this.data.now_siteitem == id)
    {
      if (this.data.now_tab==0)
      {
        this.onClick_TabCollection();
      }
      else if (this.data.now_tab==1)
      {
        this.onClick_TabAround();
      }
      else
      {
        this.onClick_TabSchoolBus();
      }
    }
    else
    {
      var site_marker = {
        id: ids,
        longitude: this.data.site_data[ids].position.lng,
        latitude: this.data.site_data[ids].position.lat,
        zIndex: -1,
        width: 20,
        height: 22,
        iconPath: "/img/cursor.png",
        callout:{
          content: this.data.site_data[ids].site_name,
          borderRadius: 6,
          padding: 10,
          borderWidth: 5,
          display: 'ALWAYS'
        }
      };

      var include_points = [
        {
          latitude: src_latitude,
          longitude: src_longitude
        },
        {
          latitude: this.data.site_data[ids].position.lat,
          longitude: this.data.site_data[ids].position.lng
        }
      ];

      var scale_size = this.data.scale_size - 3;

      var center_longitude = (src_longitude + this.data.site_data[ids].position.lng)/2;
      var center_latitude = (src_latitude + this.data.site_data[ids].position.lat)/2;


      this.setData({
        now_siteitem: id,
        markers: [school_marker, site_marker],
        longitude: center_longitude,
        latitude: center_latitude,
        include_points: include_points
      });

      this.setData({
        scale_size: scale_size
      });
    }
  },

  //点击收藏时触发
  onClick_Collect: function(e)
  {
    var ids = e.currentTarget.dataset.ids;
    var site_data = this.data.site_data;
    var collect_number = this.data.collect_number;

    site_data[ids].is_collected = true;
    collect_number = collect_number + 1;

    this.setData({
      site_data: site_data,
      collect_number: collect_number
    });

    wx.setStorage({
      key: 'travel_sitedate',
      data: site_data,
    });
    wx.setStorage({
      key: 'travel_collectnumber',
      data: collect_number,
    });
  },

  //点击取消收藏时触发
  onClick_UnCollect: function(e)
  {
    var ids = e.currentTarget.dataset.ids;
    var site_data = this.data.site_data;
    var collect_number = this.data.collect_number;

    site_data[ids].is_collected = false;
    collect_number = collect_number - 1;

    this.setData({
      site_data: site_data
    });

    this.setData({
      site_data: site_data,
      collect_number: collect_number
    });

    wx.setStorage({
      key: 'travel_sitedate',
      data: site_data,
    });
    wx.setStorage({
      key: 'travel_collectnumber',
      data: collect_number,
    });
  }
})