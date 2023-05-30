// pages/store/store.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isInputFocused: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('store page onLoad');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('store page onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('store page onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('store page onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('store page onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log('store page onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('store page onReachBottom');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        console.log('store page onShareAppMessage');
    }
})

Component({
    pageLifetimes: {
      show() {
        if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
            selected: 1
          })
        }
      }
    }
  })
  