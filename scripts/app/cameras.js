define(['OrbitControls', './data'], function(THREE, data){
  
  //Create top view camera
  var topView = new THREE.PerspectiveCamera(45, (data.get('opts.swidth') / data.get('opts.sheight')), data.get('opts.near'), data.get('opts.far')*2);
  topView.position.set(0, 2000, 0);
  
  var cabinCamera = new THREE.PerspectiveCamera(45, (data.get('opts.swidth') / data.get('opts.sheight')), data.get('opts.near'), data.get('opts.far')*2);
  
  var shipCamera = new THREE.PerspectiveCamera(45, (data.get('opts.swidth') / data.get('opts.sheight')), data.get('opts.near'), data.get('opts.far')*2);
  
  return {'topView' : topView, 'cabin' : cabinCamera, 'ship' : shipCamera};
});