// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phoneNumber: '',
        password: '',
        isChecked: false
    },

    handleUsernameInput: function(e) {
        this.setData({
            phoneNumber: e.detail.value
        });
    },

    handlePasswordInput: function(e) {
        this.setData({
            password: e.detail.value
        }); 
    },

    login: function() {
        // Retrieve the entered values
        const phoneNumber = this.data.phoneNumber;
        const password = this.data.password;
    
        // Perform input validation
        if (!phoneNumber) {
          wx.showToast({
            title: '请输入手机号',
            icon: 'none'
          });
          return;
        }
    
        if (!password) {
          wx.showToast({
            title: '请输入密码',
            icon: 'none'
          });
          return;
        }
    },

    
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('login page onLoad');
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
        console.log('login page onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('login page onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('login page onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('login page onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log('login page onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('login page onReachBottom');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        console.log('login page onShareAppMessage');
    }
})

Component({
    methods: {
        // 绑定home.wxml中loginButton的点击事件，点击后跳转到login.wxml
        login: function() {
            wx.navigateTo({
              url: '/pages/go_design/go_design',
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