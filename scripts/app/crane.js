define(['OrbitControls', './data', './materials'], function (THREE, data, materials) {
  //Crane base
  var geometry = new THREE.BoxGeometry(data.get('opts.crane.width'), data.get('opts.crane.width'), data.get('opts.crane.width') * 0.5);
  var cranebase = new THREE.Mesh( geometry, materials.craneBaseMaterial );
  cranebase.position.z = data.get('opts.crane.width') * 0.25;
  
  //Set up first edge
  var geometry = new THREE.CylinderGeometry( data.get('opts.crane.width') * 0.20,  data.get('opts.crane.width') * 0.15, 200, 100, 100);
  var firstEdge = new THREE.Mesh(geometry, materials.craneBaseMaterial);
  firstEdge.position.z = 150;
  firstEdge.rotation.x = -Math.PI * 0.5;
  cranebase.add(firstEdge);
  
  //Set up the platform
  var geometry = new THREE.CylinderGeometry( data.get('opts.crane.width') * 0.40,  data.get('opts.crane.width') * 0.40, 25, 100, 100);
  var platform = new THREE.Mesh(geometry, materials.craneWireTexture);
  platform.position.y = 20;
  firstEdge.add(platform);
  
  //Set up engine box
  var geometry = new THREE.BoxGeometry( data.get('opts.crane.width') * 0.60,  80, data.get('opts.crane.width') * 0.60);
  var engines = new THREE.Mesh(geometry, materials.craneBaseMaterial);
  engines.position.set(80, -120, 0);
  firstEdge.add(engines);
  
  //Set up cabin
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  var cabin = new THREE.Mesh( geometry, materials.glassMaterial );
  cabin.position.set(-50, -70, 0);
  firstEdge.add(cabin);
  
  return {crane: cranebase};
});