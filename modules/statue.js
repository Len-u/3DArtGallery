// statue.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { createBoundingBoxes } from "./boundingBox.js";
export const loadStatueModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/statue/new/scene.gltf",
    (gltf) => {
      const statue = gltf.scene;

      // console.log("STATUE", gltf);

      // Position the statue at the center of the floor
      statue.position.set(2.5, -3.6, 5);
      statue.rotation.y = -Math.PI/2;
      // Scale if necessary
      statue.scale.set(1.5, 1.5, 1.5);

      // Iterate through all the meshes in the statue and update their materials
      statue.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.2),
            // Cast shadow
            (child.castShadow = true);

          // console.log("Statue Material:", child.material);
        }
      });
      createBoundingBoxes(statue);
      // Add the statue to the scene
      scene.add(statue);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );


  const loader2 = new GLTFLoader();
  loader2.load(
    "../public/egy/scene.gltf",
    (gltf) => {
      const parrot = gltf.scene;

      // console.log("STATUE", gltf);

      // Position the statue at the center of the floor
      parrot.position.set(43, 6, -7.3);
      parrot.rotation.y = -Math.PI/2;
      // Scale if necessary
      parrot.scale.set(0.3, 0.3, 0.3);

      // Iterate through all the meshes in the statue and update their materials
      
      scene.add(parrot);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
