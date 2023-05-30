// custom-tab-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        show: true,
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        "list": [{
            "pagePath": "pages/home_page/home_page",
            "text": "首页",
            "iconPath": "image/home_icon.png"    
        }, {
            "pagePath": "pages/store/store",
            "text": "商城",
            "iconPath": "image/shop_icon.png"
        },{
            "pagePath": "pages/community/community",
            "text": "社区",
            "iconPath": "image/community_icon.png"
        },{
            "pagePath": "pages/mine/mine",
            "text": "我的",
            "iconPath": "image/me_icon.png"
        }]
    },

    attached() {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({url})
            this.setData({
              selected: data.index
            })
          }
    }
})
