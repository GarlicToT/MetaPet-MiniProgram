// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
        // onLoad: function() {
        //   this.setData({
        //     backgroundImageUrl: "assets/images/index_background.jpg"
        //   });
        // },      
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('home page onLoad');
        // wx.navigateTo({
        //   url: '/pages/login/login.wxml' 
        // });
        // wx.redirectTo({
        //   url: '/pages/login/login.wxml' 
        // });
        // wx.reLaunch({
        //
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('home page onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('home page onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('home page onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('home page onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log('home page onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('home page onReachBottom');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        console.log('home page onShareAppMessage');
    }
})

Component({
    methods: {
        // 绑定home.wxml中loginButton的点击事件，点击后跳转到login.wxml
        go_login: function() {
            wx.navigateTo({
              url: '/pages/login/login',
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
        }
    }
})