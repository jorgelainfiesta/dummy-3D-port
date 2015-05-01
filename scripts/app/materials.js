define(['OrbitControls', './data'], function(THREE, data){
  //Materials
  //Concrete material
  var concreteTexture	= THREE.ImageUtils.loadTexture(data.get('opts.concreteURL'));
  var concreteMaterial = new THREE.MeshPhongMaterial( {color: 0xf8f8f8, map: concreteTexture} );
  concreteTexture.wrapS = concreteTexture.wrapT = THREE.RepeatWrapping;
  concreteTexture.repeat.set(8, 8);
  
  //Rails material
  var railTexture	= THREE.ImageUtils.loadTexture(data.get('opts.railsURL'));
  var railsMaterial = new THREE.MeshLambertMaterial( {color: 0xf8f8f8, map: railTexture} );
  railTexture.wrapS = railTexture.wrapT = THREE.RepeatWrapping;
  railTexture.repeat.set(32, 32);
  
  
  //Crane base material
  var cranebaseTexture	= THREE.ImageUtils.loadTexture(data.get('opts.craneBaseURL'));
  var craneBaseMaterial = new THREE.MeshPhongMaterial( {color: 0xd01818, map: cranebaseTexture} );
  cranebaseTexture.wrapS = cranebaseTexture.wrapT = THREE.RepeatWrapping;
  cranebaseTexture.repeat.set(2, 2);
  
  //Colores material
  var metalTexture	= THREE.ImageUtils.loadTexture(data.get('opts.metalURL'));
  metalTexture.wrapS = metalTexture.wrapT = THREE.RepeatWrapping;
  metalTexture.repeat.set(2, 2);
  
  var greenMaterial = new THREE.MeshPhongMaterial( {color: 0x759f3d, map: metalTexture} );
  var blueMaterial = new THREE.MeshPhongMaterial( {color: 0x2b57b9, map: metalTexture} );
  var orangeMaterial = new THREE.MeshPhongMaterial( {color: 0xeb6a0c, map: metalTexture} );
  var grayMaterial = new THREE.MeshPhongMaterial( {color: 0xa5a8a1, map: metalTexture} );
  
  var craneWireTexture = new THREE.MeshLambertMaterial( {color: 0xd01818, wireframe: true} );

  //Glass material
  var glassMaterial = new THREE.MeshPhongMaterial( {color: 0xc2e3fb, opacity: 0.5, transparent: true, specular: 0x77bef2, shininess: 70} );
  var ropeMaterial = new THREE.MeshPhongMaterial( {color: 0x272727, specular: 0x5d5131, shininess: 70} );
  
  var invisibleMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});

  return {
    concreteMaterial: concreteMaterial,
    railsMaterial: railsMaterial,
    craneBaseMaterial: craneBaseMaterial,
    craneWireTexture: craneWireTexture,
    glassMaterial: glassMaterial,
    ropeMaterial: ropeMaterial,
    greenMaterial: greenMaterial,
    blueMaterial: blueMaterial,
    orangeMaterial: orangeMaterial,
    grayMaterial: grayMaterial,
    invisibleMaterial: invisibleMaterial
  }
});