var config = require('config.js');
const App = getApp();

Page({
  data: {
    longitude: 113.029449,
    latitude: 23.146902,
    markers:[],
    satellitable:"",
    text_back: "< 返回",
    topHeight: 638,
    showlocable:"",
    now_type: "tab_all",
    now_siteitem: "",
    scroll_top: 0,
    style_content_tab: [
      {
        icon:"_active",
        text:"content_tab_text_active"
      },
      {
        icon: "",
        text: "content_tab_text"
      },
      {
        icon: "",
        text: "content_tab_text"
      },
      {
        icon: "",
        text: "content_tab_text"
      },
      {
        icon: "",
        text: "content_tab_text"
      },
      {
        icon: "",
        text: "content_tab_text"
      },
      {
        icon: "",
        text: "content_tab_text"
      }
    ]
  },

  onLoad: function (options)
  {
    //自适应填充
    var that = this;
    wx.getSystemInfo({
      success: function(res) 
      {
        if (res.model == "iPhone 5")
        {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 + 192,
            statusBarHeight: App.globalData.navHeight * 2 + 16
          });
        }
        else if (res.model == "Nexus 5")
        {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 + 50,
            statusBarHeight: App.globalData.navHeight * 2 + 8
          });
        }
        else if (res.model.search("iPhone") != -1 && res.model.search("Plus") != -1)
        {
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
        else if (res.model.search("iPhone") != -1)
        {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2,
            statusBarHeight: App.globalData.navHeight * 2
          });
        }
        else if (res.model.search("Nexus") != -1 )
        {
          that.setData({
            autoHeight: (res.screenHeight - 319) * 2 - 136,
            statusBarHeight: App.globalData.navHeight * 2 + 10
          });
        }
        else
        {
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

    //初始化载入site_data数据
    this.setData({
      site_data: config.SiteData
    });

    this.changeNowType(0);

    this.dealMarkers(config.SiteData);
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

  changeNowType : function(type){
    var style_content_tab = this.data.style_content_tab;
    for (var i = 0; i < style_content_tab.length; i++)
    {
      style_content_tab[i].icon = "";
      style_content_tab[i].text = "content_tab_text";
    }

    style_content_tab[type].icon = "_active";
    style_content_tab[type].text = "content_tab_text_active";
    this.setData({
      style_content_tab: style_content_tab,
      now_siteitem: "",
      scroll_top: 0
    });
  },

  dealMarkers: function(site_data)
  {
    this.setData({
      markers:[]
    });
    var markers = [];
    for (var i = 0; i < site_data.length; i++)
    {
      if (site_data[i].showable)
      {
        var marker = {
          id: i,
          longitude: site_data[i].position.lat,
          latitude: site_data[i].position.lng,
          zIndex: -1,
          width:20,
          height:22,
          iconPath: "/img/cursor.png"
        };

        markers.push(marker);
      }
    }
    this.setData({
      markers: markers
    });
  },

  //点击导航栏的【返回】触发
  onClick_toBack: function ()
  {
    wx.navigateBack({});
  },

  //点击【全部】按钮触发
  onClick_ShowAll: function()
  {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++)
    {
      site_data[i].showable = true;
    }

    this.changeNowType(0);

    this.setData({
      site_data: site_data,
      now_type: "tab_all"
    });

    this.dealMarkers(site_data);
  },

  //点击【校门】按钮触发
  onClick_ShowXiaoMen: function()
  {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++) {
      if (site_data[i].type == 0)
      {
        site_data[i].showable = true;
      }
      else
      {
        site_data[i].showable = false;
      }
    }

    this.changeNowType(1);

    this.setData({
      site_data: site_data,
      now_type: "tab_xiaomen"
    });

    this.dealMarkers(site_data);
  },

  //点击【建筑】按钮触发
  onClick_ShowJianZhu: function () {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++) {
      if (site_data[i].type == 1) {
        site_data[i].showable = true;
      }
      else {
        site_data[i].showable = false;
      }
    }

    this.changeNowType(2);

    this.setData({
      site_data: site_data,
      now_type: "tab_jianzhu"
    });

    this.dealMarkers(site_data);
  },

  //点击【宿舍】按钮触发
  onClick_ShowSuShe: function () {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++) {
      if (site_data[i].type == 2) {
        site_data[i].showable = true;
      }
      else {
        site_data[i].showable = false;
      }
    }

    this.changeNowType(3);

    this.setData({
      site_data: site_data,
      now_type: "tab_sushe"
    });

    this.dealMarkers(site_data);
  },

  //点击【餐饮】按钮触发
  onClick_ShowCanYin: function () {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++) {
      if (site_data[i].type == 3) {
        site_data[i].showable = true;
      }
      else {
        site_data[i].showable = false;
      }
    }

    this.changeNowType(4);

    this.setData({
      site_data: site_data,
      now_type: "tab_canyin"
    });

    this.dealMarkers(site_data);
  },

  //点击【运动】按钮触发
  onClick_ShowYunDong: function () {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++) {
      if (site_data[i].type == 4) {
        site_data[i].showable = true;
      }
      else {
        site_data[i].showable = false;
      }
    }

    this.changeNowType(5);

    this.setData({
      site_data: site_data,
      now_type: "tab_yundong"
    });

    this.dealMarkers(site_data);
  },

  //点击【设施】按钮触发
  onClick_ShowSheShi: function () {
    var site_data = this.data.site_data;
    for (var i = 0; i < site_data.length; i++) {
      if (site_data[i].type == 5) {
        site_data[i].showable = true;
      }
      else {
        site_data[i].showable = false;
      }
    }

    this.changeNowType(6);

    this.setData({
      site_data: site_data,
      now_type: "tab_sheshi"
    });

    this.dealMarkers(site_data);
  },

  //点击地点项目时触发
  onClick_TapItem: function(e)
  {
    var index = e.currentTarget.dataset.index_id;

    var markers = this.data.markers;
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].id !== index) {
        markers[i].callout = undefined;
      }
      else {
        markers[i].callout = {
          content: this.data.site_data[index].title + "  >>",
          borderRadius: 6,
          padding: 10,
          borderWidth: 5,
          display: 'ALWAYS'
        };
      }
    }

    this.setData({
      markers: markers,
      now_siteitem: e.currentTarget.id,
      latitude: this.data.site_data[index].position.lng,
      longitude: this.data.site_data[index].position.lat
    });

    this.toDetailPage(e.currentTarget.dataset.index_id);

    // if (this.data.now_siteitem != e.currentTarget.id)
    // {
    //   var markers = this.data.markers;
    //   for (var i = 0; i < markers.length; i++) {
    //     if (markers[i].id !== index) {
    //       markers[i].callout = undefined;
    //     }
    //     else {
    //       markers[i].callout = {
    //         content: this.data.site_data[index].title + "  >>",
    //         borderRadius: 6,
    //         padding: 10,
    //         borderWidth:5,
    //         display: 'ALWAYS'
    //       };
    //     }
    //   }

    //   this.setData({
    //     markers: markers,
    //     now_siteitem: e.currentTarget.id,
    //     latitude: this.data.site_data[index].position.lng,
    //     longitude: this.data.site_data[index].position.lat
    //   });
    // }
    // else
    // {
    //   this.toDetailPage(e.currentTarget.dataset.index_id);
    // }
  },

  //点击Marker时触发
  onClick_TapMarker: function(e)
  {
    var index = e.markerId;
    var id = this.data.site_data[index].id;

    if (this.data.now_siteitem != id)
    {
      var markers = this.data.markers;
      for (var i = 0; i < markers.length; i++)
      {
        if (markers[i].id !== index)
        {
          markers[i].callout = undefined;
        }
        else
        {
          markers[i].callout = {
            content: this.data.site_data[index].title + "  >>",
            borderRadius:6,
            padding:10,
            borderWidth: 5,
            display: 'ALWAYS'
          };
        }
      }

      this.setData({
        markers: markers,
        now_siteitem: id
      });
    }

    this.setData({
      latitude: this.data.site_data[index].position.lng,
      longitude: this.data.site_data[index].position.lat
    });
  },

  //点击气泡时触发
  onClick_TapCallout: function(e)
  {
    var index = e.markerId;

    this.toDetailPage(index);
  },

  //进入介绍详情页
  toDetailPage: function (index_id)
  {
    App.globalData.site = this.data.site_data[index_id];
    wx.navigateTo({
      url: '/pages/visit/detail/index'
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
      success(res)
      {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          showlocable:"true"
        });
      },
      fail()
      {
        wx.showToast({
          title: '无法获取到当前位置',
          icon: "none"
        });
      },
      complete: function ()
      {
        wx.hideLoading()
      }
    });
  },

  //点击【切换】按钮触发
  onClick_ChangeMode: function()
  {
    var now_state = this.data.satellitable;
    if (now_state)
    {
      this.setData({
        satellitable:""
      });
    }
    else
    {
      this.setData({
        satellitable: "true"
      });
    }
  }
})