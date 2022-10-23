import Vue from 'vue';
import VanillaTilt from 'vanilla-tilt';

// Define VueTilt-Directive
const VueTilt = {

  install: function(Vue, Options) {
    Vue.directive('tilt', function (el, binding) {
      VanillaTilt.init(el, {
        glare: true,
        "max-glare": 0.3
      });
    });
  }
};

Vue.use(VueTilt);
