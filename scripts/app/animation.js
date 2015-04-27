define(['OrbitControls', './scene', './renderer', './cameras', './crane'], function (THREE, scene, renderer, cameras, crane) {
  //Animate
  var controls = new THREE.OrbitControls(cameras.topView, renderer.domElement);
  
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene.scene, cameras.topView);
    controls.update();
    scene.update();
    crane.update();
  }
  return {"animate" : animate};
});