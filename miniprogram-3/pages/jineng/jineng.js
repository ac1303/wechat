const app = getApp();
Page({
  onShow: function () {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
  },
  onLoad() {
  },
  onHide: function () {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: false
      })
    }, 500)
  },
})