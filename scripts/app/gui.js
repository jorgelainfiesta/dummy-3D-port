define(['jquery', './data'], function($, data){
  
  
  var moveCrane = function(action){
    switch(action){
      case 'move-left':
        data.increment('crane.basex', -10);
      break;
      case 'move-right':
        data.increment('crane.basex', 10);
      break;
      case 'rotate-left':
        data.increment('crane.firstrotate', -0.1);
      break;
      case 'rotate-right':
        data.increment('crane.firstrotate', 0.1);
      break;
      case 'move-up':
        data.increment('crane.secondrotate', -0.1);
      break;
      case 'move-down':
        data.increment('crane.secondrotate', 0.1);
      break;
    }
  };
  var timeout;
  //Handle buttons for crane
  $("nav.contextual .crane button").on("mousedown", function(){
    var action = $(this).data('action');
    moveCrane(action);
    //For continous button press
    timeout = setInterval(function () {
      moveCrane(action);
    }, 100);
    return false;
  });
  //Remove interval
  $(document).on('mouseout', function(){
    clearInterval(timeout);
    return false;
  }).on('mouseup', function(){
    clearInterval(timeout);
    return false;
 });

});