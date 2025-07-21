import jQuery from 'jquery';
import 'bxslider/dist/jquery.bxslider.min.js';
import 'bxslider/dist/jquery.bxslider.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$ = window.jQuery = jQuery;
    
    nuxtApp.hook('app:mounted', () => {
      $('.slider').bxSlider({
        pager: false
      });
    });
  }
});