// const baseSize = 100
// // 设置 rem 函数
// function setRem() {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 750
//   // 设置页面根节点字体大小
//   document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
// }
// // 初始化
// setRem()
// // 改变窗口大小时重新设置 rem
// window.onresize = function() {
//   setRem()
// }

// 字体大小兼容
(function (doc, win, undefined) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);


// (function (window, document) {

//   function resize () {
//     var ww = window.innerWidth;
//     if (ww > window.screen.width) {
//       window.requestAnimationFrame(resize);
//     }
//     else {
//       if (ww > 750) ww = 750;
//       document.documentElement.style.fontSize = ww * 100 / 750 + 'px';
//     }
//   }

//   if (document.readyState !== 'loading') {
//     resize();
//   } else {
//     document.addEventListener('DOMContentLoaded', resize);
//   }

//   window.addEventListener('resize', resize);

// })(window, document);
