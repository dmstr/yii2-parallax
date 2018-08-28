/**
 * Created by gbisurgi on 28.08.18.
 */
window.requestParallaxFrame = function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
}();

window.addEventListener('load', function () {
  var elements = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  window.addEventListener('scroll', function () {
    window.requestParallaxFrame(function () {
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      elements.forEach(function (e) {
        var attributes = e.getAttribute('data-parallax').split(',');
        var x = Number(attributes[0]) || 0;
        var y = Number(attributes[1]) || 0;
        var move = (scrollTop - e.offsetTop + window.innerHeight);
        e.setAttribute('style', '-webkit-transform: translate(' + Math.floor(move * x) + 'px, ' + Math.floor(move * y) + 'px); -ms-transform: translate(' + Math.floor(move * x) + 'px, ' + Math.floor(move * y) + 'px); transform: translate(' + Math.floor(move * x) + 'px, ' + Math.floor(move * y) + 'px);');
      });
    });
  });
});
