import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
//import { GUI } from "lil-gui";

export const loadBenchModel = (scene) => {
  
  const loader = new GLTFLoader();
  const loader1 = new GLTFLoader();
  const loader2 = new GLTFLoader();
  const loader3 = new GLTFLoader();
  //const gui = new GUI();

  loader.load("../public/models/bench/new/scene.gltf", (gltf) => {
    const bench = gltf.scene;
    console.log("BENCH", gltf);

    // Iterate through all the meshes in the bench and update their materials
    bench.traverse((child) => {
      if (child.isMesh) {
        console.log("Materials:", child.material);
        console.log("Map Material", child.material.map);
        console.log("Material Name:", child.material.name);
        console.log("Material Type:", child.material.type);
        console.log("UV attributes:", child.geometry.attributes.uv);
      }
      undefined,
        (error) => {
          console.error(
            "An error occurred while loading the bench model.",
            error
          );
        };
    });

    // Default Position and Scale
    bench.position.set(-19,-3.1 ,-18);
    bench.rotation.set(0, 0, 0);
    bench.rotation.y = Math.PI;
    bench.scale.set(4, 4, 4);

    // Add the bench to the scene
    scene.add(bench);
  });

  loader1.load("../public/models/bench/new/scene.gltf", (gltf) => {
    const bench1 = gltf.scene;
    console.log("BENCH", gltf);

    // Iterate through all the meshes in the bench and update their materials
    bench1.traverse((child1) => {
      if (child1.isMesh) {
        console.log("Materials:", child1.material);
        console.log("Map Material", child1.material.map);
        console.log("Material Name:", child1.material.name);
        console.log("Material Type:", child1.material.type);
        console.log("UV attributes:", child1.geometry.attributes.uv);
      }
      undefined,
        (error) => {
          console.error(
            "An error occurred while loading the bench model.",
            error
          );
        };
    });

    // Default Position and Scale
    bench1.position.set(15,-3.1 ,-15.5);
    bench1.rotation.set(0, 0, 0);
    bench1.rotation.y = Math.PI/2;
    bench1.scale.set(4, 4, 4);

    // Add the bench to the scene
    scene.add(bench1);
  });

  loader2.load("../public/models/bench/new/scene.gltf", (gltf) => {
    const bench2 = gltf.scene;
    console.log("BENCH", gltf);

    // Iterate through all the meshes in the bench and update their materials
    bench2.traverse((child1) => {
      if (child1.isMesh) {
        console.log("Materials:", child1.material);
        console.log("Map Material", child1.material.map);
        console.log("Material Name:", child1.material.name);
        console.log("Material Type:", child1.material.type);
        console.log("UV attributes:", child1.geometry.attributes.uv);
      }
      undefined,
        (error) => {
          console.error(
            "An error occurred while loading the bench model.",
            error
          );
        };
    });

    // Default Position and Scale
    bench2.position.set(40,-3.1 ,-3);
    bench2.rotation.set(0, 0, 0);
    bench2.rotation.y = Math.PI/2;
    bench2.scale.set(4, 4, 4);

    // Add the bench to the scene
    scene.add(bench2);
  });

  /*loader3.load("../public/models/bench/new/scene.gltf", (gltf) => {
    const bench3 = gltf.scene;
    console.log("BENCH", gltf);

    // Iterate through all the meshes in the bench and update their materials
    bench3.traverse((child1) => {
      if (child1.isMesh) {
        console.log("Materials:", child1.material);
        console.log("Map Material", child1.material.map);
        console.log("Material Name:", child1.material.name);
        console.log("Material Type:", child1.material.type);
        console.log("UV attributes:", child1.geometry.attributes.uv);
      }
      undefined,
        (error) => {
          console.error(
            "An error occurred while loading the bench model.",
            error
          );
        };
    });

    // Default Position and Scale
    bench3.position.set(-5,-3.1 ,-5);
    bench3.rotation.set(0, 0, 0);
    bench3.rotation.y = Math.PI/2;
    bench3.scale.set(4, 4, 4);

    // Add the bench to the scene
    scene.add(bench3);
  });*/
};
