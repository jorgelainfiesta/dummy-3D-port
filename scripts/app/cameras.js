define(['OrbitControls', './data'], function(THREE, data){
  
  //Create top view camera
  var topView = new THREE.PerspectiveCamera(45, (data.get('opts.swidth') / data.get('opts.sheight')), data.get('opts.near'), data.get('opts.far')*2);
  topView.position.set(200, 200, 0);
  
  return {'topView' : topView};
});