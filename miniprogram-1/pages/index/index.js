Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://fxtiemo.top/wx/swiper/0/pic.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://fxtiemo.top/wx/swiper/1/pic.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://fxtiemo.top/wx/swiper/2/pic.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://fxtiemo.top/wx/swiper/3/pic.jpg'
    },],
  },
  onLoad() {
    this.towerSwiper("swiperList");
    // 初始化towerSwiper 传已有的数组名即可
    var that = this;
    wx.request({
      url: 'https://fxtiemo.top/wx/list/api.php',
      success: function (res) {
         that.setData({
           test: res.data,
           //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
         })
      }
    });
    // wx.request({
    //   url: 'https://fxtiemo.top/wx/button/api.php',
    //   success: function (res) {
    //      that.setData({
    //        btn: res.data,
    //        //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
    //      })
    //   }
    // });
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  btn_1:function(e){
    wx.navigateTo({
      url: '/pages/price/price',
    })
  },
  btn_2:function(e){
    wx.switchTab({
      url: '/pages/page1/page1',
    })
  },
  btn_3:function(e){
    wx.navigateTo({
      url: '/pages/product/product',
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
})