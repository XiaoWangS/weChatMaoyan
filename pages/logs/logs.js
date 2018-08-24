//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    num: 0
  }, numDec: function () {
    this.setData({
      num: this.data.num - 1
    })
  }, numAdd: function () {
    this.setData({
      num: this.data.num + 1
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})
