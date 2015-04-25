define(["OrbitControls", "./data", "./cameras"], function (THREE, data, cameras) {
  var scene, clock = new THREE.Clock();
  //Set up scene
  scene = new THREE.Scene();
  
  //Set up camera
  
  scene.add(cameras.topView);
  
  //Set up fog
  var fog =  new THREE.Fog(0xceeaff, 1, data.get('opts.far')*2);
  scene.fog = fog;

  //Set up lights
  
  //Add a light in sky
  var hemispherelight = new THREE.HemisphereLight(0xd6e7ff, 0x9ad7f7, 1);
  scene.add(hemispherelight);
  
  //Add point light closer to scene
  var light = new THREE.PointLight( 0xffffff, 1, 1000);
  light.position.set(500, 500, 500);
  scene.add( light );
  
  //Set up skydom
  var geometry = new THREE.SphereGeometry (data.get('opts.far')*1.2);
  var cloudTexture = THREE.ImageUtils.loadTexture(data.get('opts.skyURL'));
  cloudTexture.wrapS = cloudTexture.wrapT = THREE.RepeatWrapping;
  cloudTexture.repeat.set(10, 10);
  cloudTexture.anisotropy = 16;
  material = new THREE.MeshPhongMaterial({color: 0xB8EEFF, side: THREE.DoubleSide, map: cloudTexture} );
  var sky = new THREE.Mesh( geometry, material );
  scene.add( sky );
  
  var geometry = new THREE.BoxGeometry(50, 50, 50 );
  var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  
  return {"scene" : scene};
});