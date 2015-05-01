define(["OrbitControls", "./materials", "./data", "./cameras", "./renderer", "./crane", "./container"], function (THREE, materials, data, cameras, renderer, crane, container) {
  var scene, clock = new THREE.Clock();
  //Set up scene
  scene = new THREE.Scene();
  
  //Set up camera
  scene.add(cameras.topView);
  
  //Set up fog
  var fog =  new THREE.Fog(0xceeaff, 1, data.get('opts.far')*1.7);
  scene.fog = fog;

  //Set up lights
  
  //Add a light in sky
  var hemispherelight = new THREE.HemisphereLight(0xd6e7ff, 0x9ad7f7, 1);
  scene.add(hemispherelight);
  
  //Add point light closer to scene
  var light = new THREE.PointLight( 0xffffff, 1, 500);
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
  
  //Set up port
  var portGeometry = new THREE.BoxGeometry(data.get('opts.far'), 100, data.get('opts.far')/2);
  var port = new THREE.Mesh( portGeometry, materials.concreteMaterial );
  port.position.set(0, 50, data.get('opts.far')/4);
  scene.add( port );
  
  //Set up rails
  var railPlane = new THREE.PlaneBufferGeometry(data.get('opts.rail.length'), data.get('opts.crane.width')/2);
  var rails = new THREE.Mesh(railPlane, materials.railsMaterial);
  rails.rotation.x = -Math.PI * 0.5;
  rails.position.set(0, 101, 150);
  scene.add(rails);
  
  //Add crane to port
  rails.add(crane.crane);
  //Add containers lot
  rails.add(container.lot);
  container.lot.position.set(0, -800, 1);
  
  var loader = new THREE.JSONLoader();
  
  //Add boat
  loader.load(data.get('opts.models.boat'), function(geometry, materials){
    
    boat = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial( materials ));
    boat.rotation.y = 2.7;
    boat.position.set(2000, 50, -900);
    boat.scale.set(20, 20, 20);
    scene.add(boat);
  });
  
  //Add ship
  var shipLoaded = false;
  var ship;
  loader.load(data.get('opts.models.ship'), function(geometry, materials){
    ship = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial( materials ));
    ship.position.set(0, 100, -300);
    ship.scale.set(200, 200, 200);
    scene.add(ship);
    ship.add(cameras.ship);
    shipLoaded = true;
  });
  
  var updateShip = function(){
    if(shipLoaded){
      ship.position.y = 100 + Math.sin(clock.getElapsedTime())*5;
      ship.position.x = data.get('ship.basex');
      ship.position.z = data.get('ship.basez');
      var bposition = 2000 - (clock.getElapsedTime()*20) % 6000;
      boat.position.x = bposition;
      boat.position.y = 50 + Math.cos(clock.getElapsedTime())*3;
//      cameras.ship.lookAt(ship.position);
    }
  }
  
  //Add lighthouse
  loader.load(data.get('opts.models.lighthouse'), function(geometry, materials){
    truck = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial( materials ));
    truck.position.set(1600, 100, 200);
    truck.scale.set(30, 30, 30);
    scene.add(truck);
  });
  
  loader.load(data.get('opts.models.police'), function(geometry, materials){
    police = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial( materials ));
    police.position.set(1000, 100, 200);
    police.scale.set(10, 10, 10);
    scene.add(police);
  });
  
  //Set up water light
  
  var directionalLight = new THREE.DirectionalLight(0xffff55, 1);
  directionalLight.position.set(-200, 300, -200);
  scene.add(directionalLight);
  
  //Set up ocean
  
  var waterNormals = new THREE.ImageUtils.loadTexture('images/waternormals.jpg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping; 
  
  var ms_Water = new THREE.Water(renderer, cameras.topView, scene, {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals: waterNormals,
      alpha: 	0.9,
      sunDirection: directionalLight.position.normalize(),
      sunColor: 0xffffff,
      waterColor: 0x10313c,
      betaVersion: 0,
      side: THREE.DoubleSide
  });
  var aMeshMirror = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(data.get('opts.far'), data.get('opts.far')/2, 1, 1), 
      ms_Water.material
  );
  aMeshMirror.position.set(0, 0, -data.get('opts.far')/4 );
  aMeshMirror.add(ms_Water);
  aMeshMirror.rotation.x = - Math.PI * 0.5;
  scene.add(aMeshMirror);
  
  
  //Function to update scene elements
  var updateScene = function(){
    ms_Water.material.uniforms.time.value += 1.0 / 60.0;
    
  };

  
  cameras.topView.position.z = 800;
  
  return {scene : scene, update : updateScene, updateShip: updateShip};
});