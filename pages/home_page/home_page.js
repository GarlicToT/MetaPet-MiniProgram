// pages/home_page/home_page.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})

Component({
    methods: {
        navigateToHomePage: function() {
            wx.navigateTo({
              url: '/pages/home_page/home_page',
                events: {
                  // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                  acceptDataFromOpenedPage: function(data) {
                    console.log(data)
                  },
                  someEvent: function(data) {
                    console.log(data)
                  }
                },
                success: function(res) {
                  // 通过eventChannel向被打开页面传送数据
                  res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
                }
              })
        },

        navigateToStorePage: function() {
            wx.navigateTo({
              url: '/pages/store/store',
                events: {
                  // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                  acceptDataFromOpenedPage: function(data) {
                    console.log(data)
                  },
                  someEvent: function(data) {
                    console.log(data)
                  }
                },
                success: function(res) {
                  // 通过eventChannel向被打开页面传送数据
                  res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
                }
              })
        },
    },
  });
  