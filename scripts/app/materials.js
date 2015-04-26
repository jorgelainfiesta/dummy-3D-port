define(['OrbitControls', './data'], function(THREE, data){
  //Materials
  var concreteTexture	= THREE.ImageUtils.loadTexture(data.get('opts.concreteURL'));
  var concreteMaterial = new THREE.MeshPhongMaterial( {color: 0xf8f8f8, map: concreteTexture} );
  concreteTexture.wrapS = concreteTexture.wrapT = THREE.RepeatWrapping;
  concreteTexture.repeat.set(8, 8);
  
  
  return {
      concreteMaterial: concreteMaterial
  }
});