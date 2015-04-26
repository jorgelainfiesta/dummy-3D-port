define(['OrbitControls', './scene', './renderer', './cameras'], function (THREE, scene, renderer, cameras) {
  //Animate
  var controls = new THREE.OrbitControls(cameras.topView, renderer.domElement);
  
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene.scene, cameras.topView);
    controls.update();
    scene.updateScene();
  }
  return {"animate" : animate};
});