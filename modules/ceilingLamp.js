import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
//import { GUI } from "lil-gui";

export const loadCeilingLampModel = (scene) => {
  const loader = new GLTFLoader();
  //const gui = new GUI();

  loader.load("../public/models/ceiling-lamp/scene.gltf", (gltf) => {
    const lamp = gltf.scene;
    
    console.log("Ceiling Lamp", gltf);

    // Position the lamp
    lamp.position.set(0, 15, 0);
    
    lamp.scale.set(0.3, 0.3, 0.3);
    
    // Add the lamp to the scene
    scene.add(lamp);
    

    // Add GUI controls for the lamp
    /*const lampFolder = gui.addFolder("Ceiling Lamp");
    lampFolder.add(lamp.position, "x", -50, 50).name("X Position");
    lampFolder.add(lamp.position, "y", -50, 50).name("Y Position");
    lampFolder.add(lamp.position, "z", -50, 50).name("Z Position");*/
  });
  const loader1 = new GLTFLoader();
  loader1.load("../public/models/ceiling-lamp/scene.gltf", (gltf) => {
    
    const lamp1 = gltf.scene;
    console.log("Ceiling Lamp1", gltf);

    // Position the lamp
    
    lamp1.position.set(0,13,-13);
   
    lamp1.scale.set(0.5, 0.5, 0.5);
    // Add the lamp to the scene
    
    scene.add(lamp1);

    // Add GUI controls for the lamp
    /*const lampFolder = gui.addFolder("Ceiling Lamp");
    lampFolder.add(lamp.position, "x", -50, 50).name("X Position");
    lampFolder.add(lamp.position, "y", -50, 50).name("Y Position");
    lampFolder.add(lamp.position, "z", -50, 50).name("Z Position");*/
  });
};
