define(['OrbitControls', './scene', './renderer', './cameras', './crane', './data'], function (THREE, scene, renderer, cameras, crane, data) {
  //Animate
  var controls = new THREE.OrbitControls(cameras.topView, renderer.domElement);
  controls.update();
  function animate() {
    requestAnimationFrame(animate);
    if(data.get('cabinCamera')){
      renderer.render(scene.scene, cameras.cabin);
    } else {
      controls.update();
      renderer.render(scene.scene, cameras.topView);
    }
    
    scene.update();
    scene.updateShip();
    crane.update();
  }
  return {"animate" : animate};
});