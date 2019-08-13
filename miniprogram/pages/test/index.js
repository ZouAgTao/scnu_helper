//index.js

const app = getApp();
//const cloud = require('wx-server-sdk')

Page({
  data: {
    name: {},
    zindex : 0,
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
    //目录
    menu: ['schoolintroduction', 'process', 'fee1', 'fee2', 'fee3', 'dormitory', 'website', 'timetable', 'militarytraining', 'expressdelivery', 'diet', 'faq'],
    chinesemenu: ['校园概览', '报道流程', '学费缴纳', '网费缴纳', '一卡通充值', '宿舍介绍', '常用网站', '时间表', '关于军训', '关于快递', '校内餐饮','常见问题'],
    chinesename : '',
  },


  /**********************   文件转换部分js start  ***********************/
  onLoad: function(options) {
    //获取中文名
    for(var i=0;i<this.data.menu.length;i++){
      if(this.data.menu[i] == options.name+''){
        this.setData({
          chinesename : this.data.chinesemenu[i]
        })
      }
    }
  
    this.setData({
      name: options.name
    })
    const _ts = this;

    //获取数据库的FileID
    //页面跳转


    //获取真实地址
    //目前不需要
    var that = this
    wx.cloud.getTempFileURL({
      fileList: ['cloud://scnu-dev-iyplf.7363-scnu-dev-iyplf-1259750702/' + options.name +'.md'],
      success: res => {
        //console.log(res.fileList[0].tempFileURL)
        // that.setData({
        //   realurl: res.fileList
        // })
        console.log(res.fileList)
      },
      fail: err => {}
    })

    console.log(that.data.realurl)

    //判断是否第一次进入
    //若为第一次进入，则便利所有文件，把获取的数据都放入本地缓存
    // if (!wx.getStorageSync('articlejson')) {

    //请求Markdown文件内容
    // for (var i = 0; i < 8; i++) {

    //由于加载需要时间，需要在此写一个loading加载

var that = this;
    app.getText(app.docDir + options.name + '.md' , (res) => {
      if (res.data) {
        //将markdown内容转换为towxml数据
        let articleData = app.towxml.toJson(res.data, 'markdown');
        this.setData({
          article001: articleData,
        })
        // console.log('articleData', articleData);
        // articleData = app.towxml.initData(articleData, {
        //   base: 'https://7363-scnu-dev-iyplf-1259750702.tcb.qcloud.la/',
        //   app: _ts
        // })
        // articleData.theme = 'light';


        //设置文章数据，并清除页面loading
        //加载
        _ts.setData({
          article: articleData,
          isloading: false
        });

      };
      //先将文本提取到json
      // for (var i = 0; i < this.data.article001.child.length; i++) {
      //   if ((this.data.article001.child[i]._e.nodeName == "p") && (this.data.article001.child[i].node == "element")) {
      //     if (this.data.article001.child[i].child[0].text) {
      //       this.setData({
      //         articlejson: this.data.articlejson + this.data.article001.child[i].child[0].text
      //       })
      //     }

      //   }
      // }
      // console.log(this.data.articlejson)

    });

    // }
    /**********************   文件转换部分js end  ***********************/
    //将转换出的json数据本地缓存
    // wx.setStorage({
    //   key: "article001",
    //   data: this.data.articlejson,
    //   success: function() {
    //     console.log('写入json成功');
    //   },
    //   fail: function() {
    //     console.log('写入json发生错误')
    //   }
    // })

    //加载到首页
    // app.getText(app.docDir + options.name + '.md', (res) => {
    //   if (res.data) {
    //     //将markdown内容转换为towxml数据
    //     let articleData = app.towxml.toJson(res.data, 'markdown');
    //     this.setData({
    //       article001: articleData,
    //     })
    //     console.log('articleData', articleData);
    //     articleData = app.towxml.initData(articleData, {
    //       base: 'https://7363-scnu-dev-iyplf-1259750702.tcb.qcloud.la/',
    //       app: _ts
    //     })
    //     articleData.theme = 'light';


    //     //设置文章数据，并清除页面loading
    //     //加载
    //     _ts.setData({
    //       article: articleData,
    //       isloading: false
    //     });
    //   };
    // });

    // } else {
    //   //直接加载首页

    //   app.getText(app.docDir +  +options.name + '.md', (res) => {
    //     if (res.data) {
    //       //将markdown内容转换为towxml数据
    //       let articleData = app.towxml.toJson(res.data, 'markdown');
    //       this.setData({
    //         article001: articleData,
    //       })
    //       console.log('articleData', articleData);
    //       articleData = app.towxml.initData(articleData, {
    //         base: 'https://7363-scnu-dev-iyplf-1259750702.tcb.qcloud.la/',
    //         app: _ts
    //       })
    //       articleData.theme = 'light';


    //       //设置文章数据，并清除页面loading
    //       //加载
    //       _ts.setData({
    //         article: articleData,
    //         isloading: false
    //       });
    //     };
    //   });
    // }

  },
  /**********************   搜索框部分js start  ***********************/

  bindInput: function(e) {
    this.setData({
      //获取搜索输入的值
      inputValue: e.detail.value
    })
  },
  setSearchStorage: function() {
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
  tap_ch: function(e) {
    if (this.data.open) {
      this.setData({
        open: false,
        zindex : -1
      });
    } else {
      this.setData({
        open: true,
        zindex : 99,
      });
    }
  },

  tap_start: function(e) {
    // touchstart事件
    // 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
    this.data.mark = this.data.newmark = e.touches[0].pageX;
    this.data.marky = this.data.newmarky = e.touches[0].pageY;
  },

  tap_drag: function(e) {
    // touchmove事件
    this.data.newmark = e.touches[0].pageX;
    this.data.newmarky = e.touches[0].pageY;
console.log(this.data.mark-this.data.newmark)
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

  tap_end: function(e) {
    // touchend事件
    this.data.mark = 0;
    this.data.newmark = 0;
    // 通过改变 opne 的值，让主页加上滑动的样式
    if (this.istoright) {
      this.setData({
        open: true,
        zindex : 99,
      });
    } else {
      this.setData({
        open: false,
        zindex : 0
      });
    }

  },
  /**********************   侧拉栏部分js end  ***********************/

  jump_to_last: function(e) {
    for (var i = 0; i < this.data.menu.length; i++) {
      if (this.data.name + '' == this.data.menu[i]) {
        if (i == 0) {
          wx.redirectTo({
            url: '/pages/test/index?name=' + this.data.menu[this.data.menu.length - 1],
          });
        } else {
          wx.redirectTo({
            url: '/pages/test/index?name=' + this.data.menu[i - 1],
          });
        }
      }
    }
  },
  jump_to_next: function(e) {
    for (var i = 0; i < this.data.menu.length; i++) {
      if (this.data.name + '' == this.data.menu[i]) {
        if (i == this.data.menu.length - 1) {
          wx.redirectTo({
            url: '/pages/test/index?name=' + this.data.menu[0],
          });
        } else {
          wx.redirectTo({
            url: '/pages/test/index?name=' + this.data.menu[i + 1],
          });
        }
      }
    }
  },
  //点击【返回】按钮触发
  onClick_toBack: function() {
    let pages = getCurrentPages();
    let index_page = pages[0];
    var index_route = index_page.route;

    if (index_route == "pages/index/index")
    {
      wx.navigateBack({
        delta: 99999
      });
    }
    else
    {
      if(pages.length > 1)
      {
        wx.redirectTo({
          url: '/pages/index/index',
        })
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
  onPageRedirect: function(e) {
    wx.redirectTo({
      url: 'index?name=' + e.currentTarget.dataset.name,
    })
  },
  //分享
  onShareAppMessage: function () {

    return {

      title: this.data.chinesename,

      // desc: '自定义分享描述',

      path: 'pages/test/index?name=' + this.data.name,

    }

  }
})