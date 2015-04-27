(function(){

  var FlipOnIt = {

    timerId: null,
    wrapper: null,
    isAnimating: false,
    element: null,
    frameSize: 0,
    frameCount: 0,
    repeat: false,


    init: function(element, frameSize, frameCount, repeat) {

      var self = this;

      self.element = element;
      self.frameCount = frameCount;
      self.frameSize = frameSize;
      self.repeat = repeat;
      self.wrapper = document.getElementById('coinAnimWrapper');

      self.element.addEventListener('click', function(){

         if (self.isAnimating == false) {

            window.clearInterval(self.timerId);
            self.wrapper.className = 'coin-anim-wrapper';
            self.startAnimation();
          }

      });

      self.startAnimation();
    },


    pulse: function() {

      this.wrapper.className = this.wrapper.className + ' coin-anim-play';
    },


    startAnimation: function() {

      var self = this;
      var i = 0;
      self.isAnimating = true;
      
      self.timerId = setInterval(function () {
        
        if (!self.repeat && i >= self.frameCount) {

          self.pulse();
          self.isAnimating = false;
          window.clearInterval(self.timerId);
        }

        if (i >= self.frameCount) {
          i = 0;
        }

        self.element.style.backgroundPosition = '-' + (i * self.frameSize) + 'px 0px';
        i++;

        console.log(self.element.style.backgroundPosition);

      }, 1000/24);

    }

  };


  document.addEventListener("DOMContentLoaded", function () {

    var element = document.getElementById('coinAnim');
    FlipOnIt.init(element, 190, 94, false);



  }, false);

})();

