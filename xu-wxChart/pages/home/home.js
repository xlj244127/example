const app = getApp()

Page({
  data: {
    isDots: true,
    interval: true,
    imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    foodImgUrl: [
      '/image/s4.png',
      '/image/s5.png',
      '/image/s6.png'
    ]
  },
  toPageAction: function() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  onLoad: function() {

  }
})