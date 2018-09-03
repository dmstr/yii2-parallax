/**
 * Created by gbisurgi on 28.08.18.
 */
window.requestParallaxFrame = function () {
  return (
    window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
}();

var inViewport = function (rect) {
  return (rect.top + rect.height >= 0 && rect.bottom - rect.height <= window.innerHeight);
};

window.addEventListener('load', function () {
  var elements = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  console.log(elements);
  window.addEventListener('scroll', function () {
    window.requestParallaxFrame(function () {
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      elements.forEach(function (e) {
        var attributes = e.getAttribute('data-parallax').replace(/\s/g,'').split(',');
        var x = Number(attributes[0]) || 0;
        var y = Number(attributes[1]) || 0;
        var startCondition = attributes[2] || 'visible';
        var rect = e.getBoundingClientRect();
        var offsetTop = rect.top + scrollTop;
        var move = startCondition === 'asap' ? scrollTop : (scrollTop - offsetTop + window.innerHeight);
        if (inViewport(rect)) {
          e.setAttribute('style', '-webkit-transform: translate(' + move * x + 'px, ' + move * y + 'px); -ms-transform: translate(' + move * x + 'px, ' + move * y + 'px); transform: translate(' + move * x + 'px, ' + move * y + 'px);');
        }
      });
    });
  });
});
