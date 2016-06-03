var indexTpl = require('../tpl/index.string');
document.body.innerHTML += indexTpl;
//SPA.defineView('index', {
//html: indexTpl,
//plugins: ['delegated'],
//bindActions: {
//  'exit': function () {
//    this.hide();
//  }
//}
//});
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  })