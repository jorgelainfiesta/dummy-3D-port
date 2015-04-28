define(['jquery', './data'], function($, data){
  
  
  var moveCrane = function(action){
    switch(action){
      case 'move-left':
        if(data.get('crane.basex') > -1280){
          data.increment('crane.basex', -10);
        }
      break;
      case 'move-right':
        if(data.get('crane.basex') < 1280){
          data.increment('crane.basex', 10);
        }
      break;
      case 'rotate-left':
        data.increment('crane.firstrotate', -0.1);
      break;
      case 'rotate-right':
        data.increment('crane.firstrotate', 0.1);
      break;
      case 'move-up':
        if(data.get('crane.secondrotate') < -0.3){
          data.increment('crane.secondrotate', 0.1);
        }
      break;
      case 'move-down':
        if(data.get('crane.secondrotate') > -1.5){
          data.increment('crane.secondrotate', -0.1);
        }
      break;
      case 'rotate-up':
        if(data.get('crane.thirdrotate') < 2.2){
          data.increment('crane.thirdrotate', 0.1);
        }
      break;
      case 'rotate-down':
        if(data.get('crane.thirdrotate') > 0.40){
          data.increment('crane.thirdrotate', -0.1);
        }
      break;
    }
  };
  var timeout;
  //Handle buttons for crane
  $("nav.contextual .crane button").on("touchstart mousedown", function(){
    var action = $(this).data('action');
    moveCrane(action);
    //For continous button press
    timeout = setInterval(function () {
      moveCrane(action);
    }, 100);
    return false;
  });
  //Remove interval
  $(document).on('touchend mouseup mouseout', function(){
    clearInterval(timeout);
    return false;
  });

});