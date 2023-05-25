// pages/go_design/go_design.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isInputFocused: false
    },

    handleInputFocus(event) {
        // Add a class to the input element when it is focused
        this.setData({
          isInputFocused: true
        });
      },
      
    handleInputBlur(event) {
    // Remove the class from the input element when it is blurred
    this.setData({
        isInputFocused: false
    });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('go_design page onLoad');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('go_design page onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('go_design page onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('go_design page onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('go_design page onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log('go_design page onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('go_design page onReachBottom');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        console.log('go_design page onShareAppMessage');
    }
})

Component({
    methods: {
        // 绑定home.wxml中loginButton的点击事件，点击后跳转到home_page.wxml
        home_page: function() {
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
        handleCheckboxChange(e) {
            this.setData({
              isChecked: e.detail.value
            })
        }
    }
})