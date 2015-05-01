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
  
  var craneSound = new Audio(data.get('opts.audio.crane'));
  //Handle buttons for crane
  $("nav.contextual .crane button").on("touchstart mousedown", function(){
    var action = $(this).data('action');
    craneSound.play();
    moveCrane(action);
    //For continous button press
    timeout = setInterval(function () {
      moveCrane(action);
    }, 100);
    return false;
  });
  
  var moveShip = function(action){
    switch(action){
      case 'move-left':
        if(data.get('ship.basex') > -1280){
          data.increment('ship.basex', -10);
        }
      break;
      case 'move-right':
        if(data.get('ship.basex') < 1280){
          data.increment('ship.basex', 10);
        }
      break;
      case 'move-down':
        if(data.get('ship.basez') < -300){
          data.increment('ship.basez', 10);
        }
      break;
      case 'move-up':
        if(data.get('ship.basez') < 1280){
          data.increment('ship.basez', -10);
        }
      break;
    }
  };

  //Handle buttons for ship
  $("nav.contextual .ship button").on("touchstart mousedown", function(){
    var action = $(this).data('action');
    moveShip(action);
    //For continous button press
    timeout = setInterval(function () {
      moveShip(action);
    }, 100);
    return false;
  });
  
  //Remove interval
  $(document).on('touchend mouseup mouseout', function(){
    clearInterval(timeout);
//    craneSound.stop();
    return false;
  });
  
  $(".main button").on('click', function(){
    var self = $(this);
    $('.main button.selected').removeClass('selected');
    self.addClass('selected');
    $('.contextual ul').hide();
  
    if(self.hasClass('crane')){
      $('.contextual ul.crane').show();
      data.set('cabinCamera', true);
      
    } else if(self.hasClass('ship')){
      $('.contextual ul.ship').show();
      data.set('cabinCamera', false);
    } else if(self.hasClass('eye')){
      $('.contextual ul.crane').show();
      data.set('cabinCamera', false);
    }
  });

});