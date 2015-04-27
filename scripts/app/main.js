define(['jquery', './animation', './renderer', './gui'], function ($, animation, renderer) {

  
  //Run animate
  animation.animate();
  
  //Insert into body
  document.body.appendChild(renderer.domElement);
});