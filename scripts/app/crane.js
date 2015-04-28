define(['OrbitControls', './data', './materials'], function (THREE, data, materials) {
  //Crane base
  var geometry = new THREE.BoxGeometry(data.get('opts.crane.width'), data.get('opts.crane.width'), data.get('opts.crane.width') * 0.5);
  var cranebase = new THREE.Mesh( geometry, materials.craneBaseMaterial );
  cranebase.position.z = data.get('opts.crane.width') * 0.25;

  //Set up first edge
  var geometry = new THREE.CylinderGeometry( data.get('opts.crane.width') * 0.20,  data.get('opts.crane.width') * 0.15, 300, 100, 100);
  var firstEdge = new THREE.Mesh(geometry, materials.craneBaseMaterial);
  firstEdge.position.z = 100;
  firstEdge.rotation.x = -Math.PI * 0.5;
  cranebase.add(firstEdge);
  
  //Set up the platform
  var geometry = new THREE.CylinderGeometry( data.get('opts.crane.width') * 0.40,  data.get('opts.crane.width') * 0.40, 25, 60, 2);
  var platform = new THREE.Mesh(geometry, materials.craneWireTexture);
  firstEdge.add(platform);
  
  //Set up engine box
  var geometry = new THREE.BoxGeometry( data.get('opts.crane.width') * 0.60,  80, data.get('opts.crane.width') * 0.60);
  var engines = new THREE.Mesh(geometry, materials.craneBaseMaterial);
  engines.position.set(70, -150, 0);
  firstEdge.add(engines);
  
  //Set up cabin
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  var cabin = new THREE.Mesh( geometry, materials.glassMaterial );
  cabin.position.set(-50, -100, 0);
  firstEdge.add(cabin);
  
  //Set up second edge
  var geometry = new THREE.CylinderGeometry( data.get('opts.crane.width') * 0.10,  data.get('opts.crane.width') * 0.05, 400, 4, 4);
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -400 * 0.5, 0 ) );
  var secondEdge = new THREE.Mesh(geometry, materials.craneWireTexture);
  secondEdge.position.set(0, -130, 0);
  secondEdge.rotation.z = -0.9;
  firstEdge.add(secondEdge);
  
  //Set up third edge
  var geometry = new THREE.CylinderGeometry( data.get('opts.crane.width') * 0.05,  data.get('opts.crane.width') * 0.05, 100, 4, 2);
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 100 * 0.5, 0 ) );
  var thirdEdge = new THREE.Mesh(geometry, materials.craneWireTexture);
  thirdEdge.position.set(0, -400, 0);
  thirdEdge.rotation.z = 0.9;
  secondEdge.add(thirdEdge);
  
  var geometry = new THREE.CylinderGeometry(3, 3, 100, 10, 1);
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -100 * 0.5, 0 ) );
  var rope = new THREE.Mesh(geometry, materials.ropeMaterial);
  rope.position.set(0, 100, 0);
  rope.rotation.z = Math.PI - 0.9 + 0.9;
  thirdEdge.add(rope);
  
  var geometry = new THREE.CylinderGeometry(15, 15, 10, 10, 1);
  var magneto = new THREE.Mesh(geometry, materials.ropeMaterial);
  magneto.position.set(0, -100, 0);
//  magneto.rotation.z = -Math.PI * 0.5;
  rope.add(magneto);
  
  
  
  var update = function(){
    cranebase.position.x = data.get('crane.basex');
    firstEdge.rotation.y = data.get('crane.firstrotate');
    secondEdge.rotation.z = data.get('crane.secondrotate');
    thirdEdge.rotation.z = data.get('crane.thirdrotate');
    rope.rotation.z = Math.PI - data.get('crane.secondrotate') - data.get('crane.thirdrotate');
  }
  return {crane: cranebase, update: update};
});