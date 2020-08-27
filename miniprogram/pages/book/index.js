//index.js

// const { config } = require("process");
const menu = require('menu.js')
const app = getApp();
//const cloud = require('wx-server-sdk')

Page({
  data: {
    name: {},
    zindex: 0,
    //文件转换变量
    isloading: true,
    article: {},
    timer: undefined,
    realurl: '',
    article001: [],
    articlejson: "",
    //侧拉栏变量
    open: false,
    // mark 是指原点x轴坐标
    mark: 0,
    marky: 0,
    // newmark 是指移动的最新点的x轴坐标 
    newmark: 0,
    newmarky: 0,
    istoright: true,
    //返回按钮
    text_back: "< 返回",
    //分享按钮
    text_share: "分享",
    //搜索变量
    selectHide: false,
    inputValue: '',
    getSearch: [],
    modalHidden: true,
    chinesename: '',
    isIPX: app.globalData.isIPX,
  },


  /**********************   文件转换部分js start  ***********************/
  onLoad: function (options) {
    let that = this

    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});

// 使用案例

    this.setData({
      menu: menu.menu,
      chinesemenu: menu.chinesemenu
    })

    //【此段修改有疑惑请联系Ag】回退到首页的动态逻辑
    if (app.globalData.is_to_index) {
      app.globalData.is_to_index = false;
      wx.redirectTo({
        url: '/pages/index/index',
      });
    }

    //获取中文名
    for (var i = 0; i < this.data.menu.length; i++) {
      if (this.data.menu[i] == options.name + '') {
        this.setData({
          chinesename: this.data.chinesemenu[i]
        })
      }
    }

    this.setData({
      name: options.name
    })

    //获取数据库的FileID
    //页面跳转


    //获取真实地址
    //目前不需要
    wx.cloud.getTempFileURL({
      fileList: ['cloud://scnu-dev-iyplf.7363-scnu-dev-iyplf-1259750702/' + options.name + '.md'],
      success: res => {
        console.log(res.fileList)
      },
      fail: err => { }
    })

    console.log(that.data.realurl)

    //判断是否第一次进入
    //若为第一次进入，则便利所有文件，把获取的数据都放入本地缓存
    // if (!wx.getStorageSync('articlejson')) {

    //请求Markdown文件内容
    // for (var i = 0; i < 8; i++) {

    //由于加载需要时间，需要在此写一个loading加载


    app.getText(app.docDir + options.name + '.md', (res) => {
      if (res.data) {
        //将markdown内容转换为towxml数据
        let articleData = app.towxml.toJson(res.data, 'markdown');
        this.setData({
          article001: articleData,
        })


        //设置文章数据，并清除页面loading
        //加载
        that.setData({
          article: articleData,
        });
        wx.hideToast();
      };

    });

  },
  /**********************   搜索框部分js start  ***********************/

  bindInput: function (e) {
    this.setData({
      //获取搜索输入的值
      inputValue: e.detail.value
    })
  },
  setSearchStorage: function () {
    let data;
    let localStorageValue = [];
    if (this.data.inputValue != '') {
      //用indexof方法查询是否匹配
      console.log('searchData', this.data.articlejson.indexOf(this.data.inputValue));
      if (this.data.articlejson.indexOf(this.data.inputValue) >= 0) {
        //需要带参数跳转，这里目前还没写
        wx.navigateTo({
          //跳转到搜索结果页面
          url: '../result/index'
        })
      } else {
        wx.navigateBack({
          //传入error参数，在result界面显示无结果
          url: '../result/index'
        })
      }

    } else {
      console.error;
    }

  },
  /**********************   搜索框部分js start  ***********************/

  /**********************   侧拉栏部分js start  ***********************/
  // 点击左上角小图标事件
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false,
        zindex: -1
      });
    } else {
      this.setData({
        open: true,
        zindex: 99,
      });
    }
  },

  tap_start: function (e) {
    // touchstart事件
    // 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
    this.data.mark = this.data.newmark = e.touches[0].pageX;
    this.data.marky = this.data.newmarky = e.touches[0].pageY;
  },

  tap_drag: function (e) {
    // touchmove事件
    this.data.newmark = e.touches[0].pageX;
    this.data.newmarky = e.touches[0].pageY;
    console.log(this.data.mark - this.data.newmark)
    // 手指从左向右移动
    // if ((this.data.mark < this.data.newmark-0.3) && Math.abs(this.data.marky- this.data.newmarky)<0.8 ) {
    //   this.istoright = true;
    // }

    // 手指从右向左移动
    if (this.data.mark > this.data.newmark) {
      this.istoright = false;
    }
    this.data.mark = this.data.newmark;
  },

  tap_end: function (e) {
    // touchend事件
    this.data.mark = 0;
    this.data.newmark = 0;
    // 通过改变 opne 的值，让主页加上滑动的样式
    if (this.istoright) {
      this.setData({
        open: true,
        zindex: 99,
      });
    } else {
      this.setData({
        open: false,
        zindex: 0
      });
    }

  },
  /**********************   侧拉栏部分js end  ***********************/

  jump_to_last: function (e) {
    for (var i = 0; i < this.data.menu.length; i++) {
      if (this.data.name + '' == this.data.menu[i]) {
        if (i == 0) {
          wx.redirectTo({
            url: '/pages/book/index?name=' + this.data.menu[this.data.menu.length - 1],
          });
        } else {
          wx.redirectTo({
            url: '/pages/book/index?name=' + this.data.menu[i - 1],
          });
        }
      }
    }
  },
  jump_to_next: function (e) {
    for (var i = 0; i < this.data.menu.length; i++) {
      if (this.data.name + '' == this.data.menu[i]) {
        if (i == this.data.menu.length - 1) {
          wx.redirectTo({
            url: '/pages/book/index?name=' + this.data.menu[0],
          });
        } else {
          wx.redirectTo({
            url: '/pages/book/index?name=' + this.data.menu[i + 1],
          });
        }
      }
    }
  },
  //点击【返回】按钮触发
  onClick_toBack: function () {
    let pages = getCurrentPages();
    let index_page = pages[0];
    var index_route = index_page.route;

    if (index_route == "pages/index/index") {
      wx.navigateBack({
        delta: 99999
      });
    }
    else {
      if (pages.length == 1) {
        wx.redirectTo({
          url: '/pages/index/index',
        });
      }
      else {
        app.globalData.is_to_index = true;

        wx.navigateBack({
          delta: 99999
        });
      }
    }
  },
  //禁止下拉
  onPageScroll: function (e) {
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  //跳转
  onPageRedirect: function (e) {
    wx.redirectTo({
      url: 'index?name=' + e.currentTarget.dataset.name,
    })
  },
  //分享
  onShareAppMessage: function () {

    return {

      title: this.data.chinesename,

      // desc: '自定义分享描述',

      path: 'pages/book/index?name=' + this.data.name,

    }

  }
})