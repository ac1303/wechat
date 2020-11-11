// pages/price/price.js
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    code:null,
    position:[{
      id:"1",
      pst:"全车"
    },{
      id:"2",
      pst:"机盖"
    },{
      id:"3",
      pst:"前杠"
    },{
      id:"4",
      pst:"前叶子板"
    },{
      id:"5",
      pst:"车门"
    },{
      id:"6",
      pst:"后叶子板"
    },{
      id:"7",
      pst:"后杠"
    },{
      id:"8",
      pst:"后盖"
    },{
      id:"9",
      pst:"地坎"
    },{
      id:"10",
      pst:"后视镜"
    }],
    quanche:[{
      id:"PVC(会员)",
      prices:"3980"
    },{
      id:"PVC(非会员)",
      prices:"4980"
    },{
      id:"TPH(会员)",
      prices:"4980"
    },{
      id:"TPH(非会员)",
      prices:"5980"
    },{
      id:"TPR",
      prices:"8880"
    },{
      id:"TPR(U+)",
      prices:"10800"
    },{
      id:"TPU",
      prices:"17000"
    },{
      id:"3MAX",
      prices:"19000"
    }],
    jigai:[
      {
        id:"PVC(小轿车)",
        prices:"680"
      },{
        id:"PVC(大型车)",
        prices:"740"
      },{
        id:"TPR(小轿车)",
        prices:"1080"
      },{
        id:"TPR(大型车)",
        prices:"1140"
      },{
        id:"TPR(U+)(小轿车)",
        prices:"1300"
      },{
        id:"TPR(U+)(大型车)",
        prices:"1450"
      },{
        id:"TPU(小轿车)",
        prices:"2700"
      },{
        id:"TPU(大型车)",
        prices:"2900"
      },{
        id:"3MAX(小轿车)",
        prices:"3000"
      },{
        id:"3MAX(大型车)",
        prices:"3200"
      },
    ],
    qiangang:[
      {
        id:"PVC",
        prices:"880"
      },{
        id:"TPR",
        prices:"1380"
      },{
        id:"TPR(U+)",
        prices:"1800"
      },{
        id:"TPU",
        prices:"5580"
      },{
        id:"3MAX",
        prices:"6200"
      },
    ],
    qianyeziban:[
      {
        id:"PVC",
        prices:"420"
      },{
        id:"TPR",
        prices:"650"
      },{
        id:"TPR(U+)",
        prices:"970"
      },{
        id:"TPU",
        prices:"2500"
      },{
        id:"3MAX",
        prices:"2800"
      },
    ],
    chemen:[
      {
        id:"PVC",
        prices:"420"
      },{
        id:"TPR",
        prices:"650"
      },{
        id:"TPR(U+)",
        prices:"970"
      },{
        id:"TPU",
        prices:"1530"
      },{
        id:"3MAX",
        prices:"1700"
      },
    ],
    houyeziban:[
      {
        id:"PVC",
        prices:"780"
      },{
        id:"TPR",
        prices:"1200"
      },{
        id:"TPR(U+)",
        prices:"1750"
      },{
        id:"TPU",
        prices:"6280"
      },{
        id:"3MAX",
        prices:"6950"
      },
    ],
    hougang:[
      {
        id:"PVC",
        prices:"880"
      },{
        id:"TPR",
        prices:"1380"
      },{
        id:"TPR(U+)",
        prices:"1900"
      },{
        id:"TPU",
        prices:"5580"
      },{
        id:"3MAX",
        prices:"6200"
      },
    ],
    hougai:[
      {
        id:"PVC",
        prices:"280"
      },{
        id:"TPR",
        prices:"450"
      },{
        id:"TPR(U+)",
        prices:"650"
      },{
        id:"TPU",
        prices:"800"
      },{
        id:"3MAX",
        prices:"920"
      },
    ],
    dikan:[
      {
        id:"PVC",
        prices:"120"
      },{
        id:"TPR",
        prices:"180"
      },{
        id:"TPR(U+)",
        prices:"230"
      },{
        id:"TPU",
        prices:"300"
      },{
        id:"3MAX",
        prices:"335"
      },
    ],
    houshijing:[
      {
        id:"PVC",
        prices:"100"
      },{
        id:"TPR",
        prices:"150"
      },{
        id:"TPR(U+)",
        prices:"250"
      },{
        id:"TPU",
        prices:"335"
      },{
        id:"3MAX",
        prices:"370"
      },
    ]
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  code(e){
    // e.currentTarget.dataset.value
   
    switch(parseInt(e.currentTarget.dataset.value)){
        case 1:
          this.setData({
            arr:this.data.quanche
          })
        break;
        case 2:
          this.setData({
            arr:this.data.jigai
          })
        break;
        case 3:
          this.setData({
            arr:this.data.qiangang
          })
        break;
        case 4:
          this.setData({
            arr:this.data.qianyeziban
          })
        break;
        case 5:
          this.setData({
            arr:this.data.chemen
          })
        break;
        case 6:
          this.setData({
            arr:this.data.houyeziban
          })
        break;
        case 7:
          this.setData({
            arr:this.data.hougang
          })
        break;
        case 8:
          this.setData({
            arr:this.data.hougai
          })
        break;
        case 9:
          this.setData({
            arr:this.data.dikan
          })
        break;
        case 10:
          this.setData({
            arr:this.data.houshijing
          })
        break;
    }
  }
})