// pages/main/main.js
Page({
  data: {
    movie: [],
    ip:'http://172.20.10.8:9527'
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://172.20.10.8:9527/getAudio', //仅为示例，并非真实的接口地址
      data: {
        page: 1, rows: 6
      },
      method: 'GET',
      success: (res)=> {
          this.setData({
            movie: res.data.rows
          })   
 
      }
    })

  },
  clickMusic:function() {
      console.log(222222)
  }
})