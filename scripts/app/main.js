define(['jquery', './animation', './renderer'], function ($, animation, renderer) {

  //Handle buttons for crane
  $("nav.contextual .crane").on("click", "button", function(){
    alert($(this).data('action'));
  });
  
  //Run animate
  animation.animate();
  
  //Insert into body
  document.body.appendChild(renderer.domElement);
});