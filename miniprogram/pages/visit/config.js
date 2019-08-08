/*
[type]
0：校门    1：建筑    2：宿舍    3：餐饮    4：运动    5：设施
*/
var site_data = [
  {
    "showable": true,
    "sub_title": "华南师范大学南海校区正门",
    "icon": "",
    "position": {
      "lng": 23.144050,
      "lat": 113.028810
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "华南师范大学南海校区正门"
    },
    "id": "zhengmen",
    "title": "正门",
    "type": 0,
    "color": "rgba(118, 209, 251, 1)"
  },
  {
    "showable": true,
    "sub_title": "华南师范大学南海校区北门",
    "icon": "",
    "position": {
      "lng": 23.148830,
      "lat": 113.029130
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "华南师范大学南海校区北门（后门），部分快递收发点位于北门"
    },
    "id": "beimen",
    "title": "北门",
    "type": 0,
    "color": "rgba(117, 206, 250, 1)"
  },
  {
    "showable": true,
    "sub_title": "软件学院行政办公楼",
    "icon": "",
    "position": {
      "lng": 23.144630,
      "lat": 113.027530
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "软件学院行政办公楼，新生报到点。软件学院教师办公场地，院学生会，团委等学生组织办公室也设于此处"
    },
    "id": "ruanjianxueyuan",
    "title": "软件学院",
    "type": 1,
    "color": "rgba(117, 204, 249, 1)"
  },
  {
    "showable": true,
    "sub_title": "国际商学院行政办公楼",
    "icon": "",
    "position": {
      "lng": 23.145361,
      "lat": 113.027172
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "国际商学院行政办公楼，新生报到点。国际商学院教师办公场地，院学生会，团委等学生组织办公室也设于此处"
    },
    "id": "guojishangxueyuan",
    "title": "国际商学院",
    "type": 1,
    "color": "rgba(117, 202, 248, 1)"
  },
  {
    "showable": true,
    "sub_title": "城市文化学院行政办公楼",
    "icon": "",
    "position": {
      "lng": 23.145019,
      "lat": 113.026852
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "城市文化学院行政办公楼，新生报到点。城市文化学院教师办公场地，院学生会，团委等学生组织办公室也设于此处"
    },
    "id": "chengshiwenhuaxueyuan",
    "title": "城市文化学院",
    "type": 1,
    "color": "rgba(117, 200, 247, 1)"
  },
  {
    "showable": true,
    "sub_title": "职业教育学院行政办公楼",
    "icon": "",
    "position": {
      "lng": 23.145017,
      "lat": 113.027332
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "职业教育学院行政办公楼，新生报到点。职业教育学院教师办公场地，院学生会，团委等学生组织办公室也设于此处"
    },
    "id": "zhiyejiaoyuxueyuan",
    "title": "职业教育学院",
    "type": 1,
    "color": "rgba(116, 198, 246, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.146216,
      "lat": 113.026739
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "南海校区图书馆于2002年7月正式投入使用。建筑面积138万平方米，现有纸质馆藏60多万册(件)，电子图书近7万种，阅览室座位1134个。从2011年9月起，三个校区图书馆统一使用图书馆管理系统，实现了三校区图书的通借通还。图书馆为读者提供书刊借阅、电子资源和音像服务、读者培训、参考咨询、新书通报、图书推荐、购书推荐等服务。负一楼的多媒体室和一楼的自习室设有空调，图书馆内还提供讨论室，如需使用请提前预约"
    },
    "id": "tushuguan",
    "title": "图书馆",
    "type": 1,
    "color": "rgba(116, 196, 246, 1)"
  },
  {
    "showable": true,
    "sub_title": "集教学，活动等多种职能为一体",
    "icon": "",
    "position": {
      "lng": 23.144819,
      "lat": 113.027297
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "国际商学院一些课程的上课地点位于综合楼。IBC实创中心位于综合楼三楼，为学生提供上课/学习/开会/活动的场地，这里还开过非正式课程，一些大型比赛（比如模拟APEC高校选拔赛等）平时自习可以不用预约，如需开会/比赛/举办活动等需要提前预约。环境一流，具体使用情况可查看公众号”IBC实创中心"
    },
    "id": "zonghelou",
    "title": "综合楼",
    "type": 1,
    "color": "rgba(116, 194, 245, 1)"
  },
  {
    "showable": true,
    "sub_title": "多功能会议厅，机房及实验室",
    "icon": "",
    "position": {
      "lng": 23.146050,
      "lat": 113.028200
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "信息中心内设有计算机机房以及实验室。一楼设有多功能会议厅可用于中大型会议或开展活动"
    },
    "id": "xinxizhongxin",
    "title": "信息中心",
    "type": 1,
    "color": "rgba(116, 192, 244, 1)"
  },
  {
    "showable": true,
    "sub_title": "南海校区行政办公楼",
    "icon": "",
    "position": {
      "lng": 23.145350,
      "lat": 113.028190
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "南海校区行政办公楼"
    },
    "id": "bangonglou",
    "title": "办公楼",
    "type": 1,
    "color": "rgba(115, 190, 243, 1)"
  },
  {
    "showable": true,
    "sub_title": "南海校区教学大楼",
    "icon": "",
    "position": {
      "lng": 23.146568,
      "lat": 113.028015
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "南海校区教学大楼建筑面积1.76万多平方米，分A、B、C三个教学区，可同时容纳5500名学生；多媒体教室内计算机、投影机、实物投影仪、话筒等先进设备设施齐全"
    },
    "id": "jiaoxuelou",
    "title": "教学楼",
    "type": 1,
    "color": "rgba(115, 188, 242, 1)"
  },
  {
    "showable": true,
    "sub_title": "位于教学楼前面的康有为雕像",
    "icon": "",
    "position": {
      "lng": 23.146980,
      "lat": 113.027859
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于教学楼前面的康有为雕像，是学校一道亮丽的人文景观"
    },
    "id": "kangyouweiguangchang",
    "title": "康有为广场",
    "type": 1,
    "color": "rgba(115, 185, 242, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.146038,
      "lat": 113.030058
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "学生活动中心是校区团工委、学生会、社联、青协以及部分学生组织办公室所在地；勤工助学管理中心、心理咨询中心等机构也设于此处。这里是同学们展现自我风采的地方，每到周四下午的社团活动时间，这里便会热闹非凡，各种比赛、文艺演出不时会在这里举办。"
    },
    "id": "xueshenghuodongzhongxin",
    "title": "学生活动中心",
    "type": 1,
    "color": "rgba(115, 183, 241, 1)"
  },
  {
    "showable": true,
    "sub_title": "购物，餐饮",
    "icon": "",
    "position": {
      "lng": 23.147320,
      "lat": 113.027172
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "商业街一楼有美食坊，水果店。二楼有超市，打印店以及凉茶铺。创业吧位于三楼"
    },
    "id": "shangyejie",
    "title": "商业街",
    "type": 1,
    "color": "rgba(114, 181, 240, 1)"
  },
  {
    "showable": true,
    "sub_title": "校区医院",
    "icon": "",
    "position": {
      "lng": 23.147557,
      "lat": 113.029554
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "医务室位于学生宿舍D座与商业街中间的小路，里面有专门的医生值班。挂号需携带病历本和现金，如有购买医保，就诊可以报销一部分费用。"
    },
    "id": "xiaoyiwu",
    "title": "校医务",
    "type": 1,
    "color": "rgba(114, 179, 239, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.146599,
      "lat": 113.029952
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuA",
    "title": "学生公寓A",
    "type": 2,
    "color": "rgba(114, 177, 238, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147447,
      "lat": 113.029950
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuB",
    "title": "学生公寓B",
    "type": 2,
    "color": "rgba(114, 175, 238, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147786,
      "lat": 113.030286
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuC",
    "title": "学生公寓C",
    "type": 2,
    "color": "rgba(113, 173, 237, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147901,
      "lat": 113.029715
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuD",
    "title": "学生公寓D",
    "type": 2,
    "color": "rgba(113, 171, 236, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.148562,
      "lat": 113.029578
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuE",
    "title": "学生公寓E",
    "type": 2,
    "color": "rgba(113, 169, 235, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.148509,
      "lat": 113.030283
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuF",
    "title": "学生公寓F",
    "type": 2,
    "color": "rgba(113, 167, 234, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.149015,
      "lat": 113.031232
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuG",
    "title": "学生公寓G",
    "type": 2,
    "color": "rgba(112, 164, 234, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.148979,
      "lat": 113.032036
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "每座宿舍楼一楼设有门禁，需要刷校园一卡通进出。旁边设宿管室，宿管轮流值班，宿舍设备损坏、忘带宿舍钥匙等可到宿管处寻求帮助。需要保修可以到楼下登记需求，宿舍楼门禁时间：周日到周四：23:00；周五、周六：23:30； 各宿舍楼设有多个自习区，可用于学习、研讨等"
    },
    "id": "xueshenggongyuH",
    "title": "学生公寓H",
    "type": 2,
    "color": "rgba(112, 162, 233, 1)"
  },
  {
    "showable": true,
    "sub_title": "学术交流中心A座",
    "icon": "",
    "position": {
      "lng": 23.148287,
      "lat": 113.031737
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "学术交流中心A座，提供双人间。价格￥238一晚，统一在学术交流中心A座前台进行房间办理。联系方式：0757-86687380 ， 18029363606"
    },
    "id": "zhaodaisuoA",
    "title": "招待所A",
    "type": 2,
    "color": "rgba(112, 160, 232, 1)"
  },
  {
    "showable": true,
    "sub_title": "学术交流中心B座",
    "icon": "",
    "position": {
      "lng": 23.146585,
      "lat": 113.030734
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "学术交流中心B座，提供单人间。价格￥128一晚，统一在学术交流中心A座前台进行房间办理。联系方式：0757-86687380 ， 18029363606"
    },
    "id": "zhaodaisuoB",
    "title": "招待所B",
    "type": 2,
    "color": "rgba(112, 158, 231, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.148510,
      "lat": 113.031090
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "南海校区教职工宿舍"
    },
    "id": "jiaogongsushe",
    "title": "教工宿舍",
    "type": 2,
    "color": "rgba(111, 156, 230, 1)"
  },
  {
    "showable": true,
    "sub_title": "熹园食堂",
    "icon": "",
    "position": {
      "lng": 23.146546,
      "lat": 113.029543
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "南海校区唯一的食堂熹园，学生公寓A座对面。熹园面向校内师生开放两层楼。一楼有小吃部、汤品部、自选套餐、特色美食等【中午有糖水炖品、照烧饭，麻辣烫，明火煲仔饭，烧腊卤味饭，煎扒饭，粉面系列等】；二楼为自选菜品窗口【早餐提供西式包点，饮品，豆浆也是只有二楼提供】。两层楼平日均供应一日三餐。周六日和节假日二楼不开放。食堂两层楼目前有空调和诸多风扇，夏季比较清凉。学生可以使用学生卡刷卡买单，或者购买当天可用的饭票，在食堂一楼入门有饭票售卖处。熹园食堂连着熹园面包坊，售卖饮品，面包和一些小吃，还有一个酸奶柜，可用学生卡刷卡。"
    },
    "id": "shitang",
    "title": "食堂",
    "type": 3,
    "color": "rgba(111, 154, 230, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147320,
      "lat": 113.029364
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于商业街一楼，供应午晚餐和饮品，可以提供外卖服务至宿舍门口。"
    },
    "id": "meishifang",
    "title": "美食坊",
    "type": 3,
    "color": "rgba(111, 152, 229, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147320,
      "lat": 113.029364
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于商业街三楼，提供甜点和饮料等，社团多在这开会，有些讲座也在这里举行，属于学生自营，对外招人。"
    },
    "id": "chuangyeba",
    "title": "创业吧",
    "type": 3,
    "color": "rgba(111, 150, 228, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.145361,
      "lat": 113.027172
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于国际商学院院楼一楼，提供各式饮品、小吃等，经常推出新品，是国际商学院的学院项目，会有老师负责，学院比较重视的一个咖啡厅，经常用于接待外宾和外教，属于学生自营，对外招人。"
    },
    "id": "delikafei",
    "title": "deli咖啡",
    "type": 3,
    "color": "rgba(110, 148, 227, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.145017,
      "lat": 113.027332
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于职业教育学院院楼一楼，提供各式饮品、小吃等。属于学生自营，对外招人。"
    },
    "id": "lingdianyi",
    "title": "零点一",
    "type": 3,
    "color": "rgba(110, 146, 226, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147320,
      "lat": 113.029364
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于商业街二楼，出售凉茶、烧烤、奶茶和小吃等，可以送外卖，外卖8元起送，可以送至宿舍楼下，有些可以送到宿舍门口。"
    },
    "id": "qingxintang",
    "title": "清心堂",
    "type": 3,
    "color": "rgba(110, 143, 226, 1)"
  },
  {
    "showable": true,
    "sub_title": "图书馆负一楼咖啡厅",
    "icon": "",
    "position": {
      "lng": 23.146038,
      "lat": 113.026955
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于图书馆负一层机房旁边,提供各式饮品、小吃等。学生自营，对外招人。"
    },
    "id": "tushuguanfuyiloukafeiting",
    "title": "Ce’starc咖啡厅",
    "type": 3,
    "color": "rgba(110, 141, 225, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147419,
      "lat": 113.029579
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "校内生活超市，位于商业街二楼。"
    },
    "id": "chaoshi",
    "title": "超市",
    "type": 3,
    "color": "rgba(109, 139, 224, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.148266,
      "lat": 113.028736
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "体育馆内设有篮球场，羽毛球馆（位于体育馆后侧）。大型活动和集会也会在此开展"
    },
    "id": "tiyuguan",
    "title": "体育馆",
    "type": 4,
    "color": "rgba(109, 137, 223, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.147419,
      "lat": 113.029579
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "校区内有两个篮球场，分别位于体育馆门口和游泳池旁边的水泥地"
    },
    "id": "lanqiuchang",
    "title": "篮球场",
    "type": 4,
    "color": "rgba(109, 135, 222, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.148509,
      "lat": 113.027762
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "外围标准400米跑道，中间为足球场。田径场晚上没有灯"
    },
    "id": "tianjingchang",
    "title": "田径场",
    "type": 4,
    "color": "rgba(109, 133, 222, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.149017,
      "lat": 113.026453
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "仅限上课使用，平时不对外开放"
    },
    "id": "youyongchi",
    "title": "游泳池",
    "type": 4,
    "color": "rgba(108, 131, 221, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.149029,
      "lat": 113.026451
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "排球场，晚上使用会开灯"
    },
    "id": "paiqiuchang",
    "title": "排球场",
    "type": 4,
    "color": "rgba(108, 129, 220, 1)"
  },
  {
    "showable": true,
    "sub_title": "",
    "icon": "",
    "position": {
      "lng": 23.149029,
      "lat": 113.026451
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "网球场"
    },
    "id": "wangqiuchang",
    "title": "网球场",
    "type": 4,
    "color": "rgba(108, 127, 219, 1)"
  },
  {
    "showable": true,
    "sub_title": "位于饭堂二楼与商业街相连",
    "icon": "",
    "position": {
      "lng": 23.146902,
      "lat": 113.029449
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "校园卡充值处，位于饭堂二楼与商业街相连，可以进行校卡充值，挂失，补办，水费充值等。左侧为人工服务窗口，支持现金支付。右侧有两台自助圈存机，办理了校园银行卡后可在圈存机进行自助圈存转账和水费充值业务。具体操作可见首页新生攻略中“一卡通充值”。"
    },
    "id": "yiqiatongchongzhichu",
    "title": "一卡通充值处",
    "type": 5,
    "color": "rgba(108, 125, 218, 1)"
  },
  {
    "showable": true,
    "sub_title": "位于学生宿舍F座楼下",
    "icon": "",
    "position": {
      "lng": 23.148413,
      "lat": 113.030933
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于学生宿舍F座楼下。开放时间都是早上10点到晚上8点。除了京东，申通与百世会要求在后门指定时间自行取走快递外，所以快递都默认放在菜鸟驿站。"
    },
    "id": "cainiaoyizhan",
    "title": "菜鸟驿站",
    "type": 5,
    "color": "rgba(107, 122, 218, 1)"
  },
  {
    "showable": true,
    "sub_title": "位于商业街一楼，建行取款机",
    "icon": "",
    "position": {
      "lng": 23.147419,
      "lat": 113.029579
    },
    "info": {
      "imgable": false,
      "icons": [],
      "text": "位于商业街一楼"
    },
    "id": "zizhuqukuanji",
    "title": "自助取款机",
    "type": 5,
    "color": "rgba(107, 120, 217, 1)"
  }
]

module.exports.SiteData = site_data;