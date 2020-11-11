// pages/anli/anli.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id;
    var title=options.title;
    var that = this;
    wx.request({
    url: 'https://fxtiemo.top/wx/list/'+id+'/txt.txt',
      success: function (res) {
         that.setData({
           txt: res.data,
           //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
         })
      }
    });
    wx.request({
      url: 'https://fxtiemo.top/wx/list/list_api.php?id='+id,
        success: function (res) {
           that.setData({
             test: res.data,
             //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
           })
        }
      });
      that.setData({
        title:title,
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})