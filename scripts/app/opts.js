define({
  // scene
  swidth: window.innerWidth,
  sheight: window.innerHeight,
  near: 1,
  far: 9000,
  skyURL: 'images/clouds.jpg',
  concreteURL: 'images/concrete.jpg',
  railsURL: 'images/rails.png',
  craneBaseURL: 'images/cranebase.png',
  metalURL: 'images/metal.png',
  crane: {
    width: 200
  },
  ship: {
    length: 200
  },
  container: {
    width: 100,
    length: 200,
    height: 100,
    count: 10
  },
  rail: {
    length: 3000
  },
  models: {
    police: 'scripts/models/police.json',
    lighthouse: 'scripts/models/lighthouse.json',
    ship: 'scripts/models/ship.json',
    boat: 'scripts/models/boat.json'
  },
  audio: {
    crane: 'audio/crane.mp3'
  }
  
});