define(["OrbitControls", "./data", "./cameras"], function (THREE, data, cameras) {
  var scene, clock = new THREE.Clock();
  //Set up scene
  scene = new THREE.Scene();
  
  //Set up camera
  
  scene.add(cameras.topView);
  
  //Set up fog
  var fog =  new THREE.Fog(0x16171c, 1, data.get('opts.far'));
  scene.fog = fog;

  //Set up lights
  var lights = {
    ambient: new THREE.AmbientLight(0x21283b),
    front: new THREE.DirectionalLight(0x2a2c33, 0.5),
    back: new THREE.DirectionalLight(0x2a2c33, 0.7),
    hemisphere: new THREE.HemisphereLight(0xaea9b9, 0x6c7589, 1.001)
  };
  //Add ambient
  scene.add(lights.ambient);
  
//  Add a light in front
  lights.front.position.set(5, 5, 20);
  scene.add(lights.front);
  
  // add a light back
  lights.back.position.set(0, 10, -20);
  scene.add(lights.back);
  
  // add a light in sky
  lights.hemisphere.position.set(0, 500, 500);
  scene.add(lights.hemisphere);
  
  var geometry = new THREE.BoxGeometry(50, 50, 50 );
  var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  
  return {"scene" : scene};
});