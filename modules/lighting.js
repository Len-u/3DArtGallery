import * as THREE from "three";
//import { GUI } from "lil-gui";

export const setupLighting = (scene, paintings) => {
  // Initialize GUI
  //const gui = new GUI();

  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
ambientLight.position.set(15,25,20);
  // GUI for Ambient Light
  //const ambientFolder = gui.addFolder("Ambient Light");
  //ambientFolder.add(ambientLight, "intensity", 0, 2);

  function createSpotlight(x, y, z, intensity, targetPosition) {
    const spotlight = new THREE.SpotLight(0xffffff, intensity);
    //const spotlight2 = new THREE.SpotLight(0xffffff, intensity);
    //spotlight2.position.set(0, 0, -40);
    spotlight.position.set(x, y, z);
    spotlight.target.position.copy(targetPosition);
    spotlight.castShadow = true;
    spotlight.angle = 1.57079;
    spotlight.penumbra = 0.5;
    spotlight.decay = 1;
    spotlight.distance = 50;
    spotlight.shadow.mapSize.width = 1024;
    spotlight.shadow.mapSize.height = 1024;
    


    // Add spotlight and its target to the scene
    scene.add(spotlight);
   
    scene.add(spotlight.target);

    // Add a helper for this spotlight
    // const spotlightHelper = new THREE.SpotLightHelper(spotlight);
    // scene.add(spotlightHelper);

    // Create a GUI folder for this spotlight
    /*const folder = gui.addFolder(`Spotlight (${x}, ${y}, ${z})`);
    folder.add(spotlight, "intensity", 0, 4);
    folder.add(spotlight, "angle", 0, Math.PI / 2).name("Angle");
    folder.add(spotlight, "penumbra", 0, 1).name("Penumbra");
    folder.add(spotlight, "decay", 0, 2).name("Decay");
    folder.add(spotlight, "distance", 0, 100).name("Distance");
    folder.add(spotlight.position, "x", -50, 50);
    folder.add(spotlight.position, "y", -50, 50);
    folder.add(spotlight.position, "z", -50, 50);
    folder.add(spotlight.target.position, "x", -50, 50);
    folder.add(spotlight.target.position, "y", -50, 50);
    folder.add(spotlight.target.position, "z", -50, 50);

    return spotlight;*/
  }

  const frontWallSpotlight = createSpotlight(
    8,
    10.7,
    -28,
    2,
    new THREE.Vector3(8, 10, -28)
  );

  const frontWallSpotlight2 = createSpotlight(
    -20,
    10.7,
    -28,
    1.948,
    new THREE.Vector3(-20, 10, -28)
  );

  const backWallSpotlight = createSpotlight(
    20,
    10.7,
    29,
    2,
    new THREE.Vector3(20, 10, 29)
  );

  const backWallSpotlight2 = createSpotlight(
    -15,
    10.7,
    29,
    2,
    new THREE.Vector3(-15, 10, 29)
  );
  const leftWallSpotlight = createSpotlight(
    -32,
    10.7,
    17,
    2,
    new THREE.Vector3(-32, 10, 17)
  );

  const leftWallSpotlight2 = createSpotlight(
    -32,
    10.7,
    -15,
    2,
    new THREE.Vector3(-32, 10, -15)
  );

  const rightWallSpotlight = createSpotlight(
    23.5,
    12.7,
    -17,
    2,
    new THREE.Vector3(23.5, 12, -17)
  );

  const rightWallSpotlight2 = createSpotlight(
    56,
    10.7,
    -3,
   2,
    new THREE.Vector3(56, 10, -3)
  );

  const statueSpotlight = createSpotlight(
    2.5,
    17,
    5,
    0.548,
    new THREE.Vector3(2.5, -3.6, 5)
  );
   // Spotlight for the statue
   /*const middleSpotLight = createSpotlight(
    0,
    5.5,
    -13,
    0.548,
    new THREE.Vector3(0, 0, -49.5)
  );*/
 // statueSpotlight.angle = 0.75084;
  //statueSpotlight.decay = 1;
 // statueSpotlight.penumbra = 1;
 // statueSpotlight.distance = 0;
//scene.add(frontWallSpotlight);
//scene.add(rightWallSpotlight);
  /*const statueSpotlightFolder = gui.addFolder("Statue Light");
  statueSpotlightFolder.add(statueSpotlight, "intensity", 0, 4);
  statueSpotlightFolder
    .add(statueSpotlight, "angle", 0, Math.PI / 2)
    .name("Angle");
  statueSpotlightFolder.add(statueSpotlight, "penumbra", 0, 1).name("Penumbra");
  statueSpotlightFolder.add(statueSpotlight, "decay", 0, 2).name("Decay");*/
};
