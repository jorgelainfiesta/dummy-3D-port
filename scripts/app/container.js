define(['OrbitControls', './data', './materials'], function (THREE, data, materials) {
  //Crane base
  
  
  var createContainer = function(x, y){
    var geometry = new THREE.BoxGeometry(data.get('opts.container.length'), data.get('opts.container.width'), data.get('opts.container.height'));
    
    var texture;
    switch(parseInt(Math.random()*4)){
        case 0: texture = materials.blueMaterial; break;
        case 1: texture = materials.greenMaterial; break;
        case 2: texture = materials.orangeMaterial; break;
        case 3: texture = materials.grayMaterial; break;
        default: texture = materials.grayMaterial; break;
    }
    var container = new THREE.Mesh( geometry, texture);
    container.position.set(x, y, data.get('opts.container.height')/2);
    return container;
  };
  
  var baseLength = (data.get('opts.container.width') + 10) * 10;
  var geometry = new THREE.PlaneBufferGeometry(data.get('opts.rail.length'), baseLength);

  var containerBase = new THREE.Mesh(geometry, materials.invisibleMaterial);

  
  var xstart = -data.get('opts.rail.length') * 0.7 + data.get('opts.container.length') * 0.5;
  var ystart = -data.get('opts.container.width') * 5;
  for(var i = 0; i < 14; i++){
    for(var j = 0; j < 10; j++){
      var skip = parseInt(Math.random()*3);
      var newcontainer = createContainer(xstart + i*(data.get('opts.container.length')+10)*skip, ystart + j*(data.get('opts.container.width')+10));
    containerBase.add(newcontainer);
    }
  }
  
  return {lot: containerBase};
});