var scrollUp = (function () {
  
  var timerId; // stored timer in case you want to use clearInterval later
  var wrapper = document.getElementById('coinAnimWrapper');

  function pulse() {
    wrapper.className = wrapper.className + ' coin-anim-play';
  };

  return function (height, times, element, repeat) {

    element.addEventListener('click', function(){
        
        window.clearInterval(timerId);
        wrapper.className = 'coin-anim-wrapper';
        scrollUp(250, 12, element, false);
    });

    var i = 0; // a simple counter
    timerId = setInterval(function () {
      
      if (!repeat && i >= times) {
        pulse();
        window.clearInterval(timerId);
      }

      if (i > times) {
        i = 0;
      }

      element.style.backgroundPosition = "0px -" + (i * height) + 'px'; //scroll up
      i++;

    }, 40); // every 100 milliseconds
  };

})();

var elem = document.getElementById('coinAnim');

// start animation:
scrollUp(250, 12, elem, false)