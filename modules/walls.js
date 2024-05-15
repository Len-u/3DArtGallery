import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const normalTexture = textureLoader.load(
    "leather_white_4k.gltf/textures/leather_white_nor_gl_4k.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "leather_white_4k.gltf/textures/leather_white_rough_4k.jpg"
  );

  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xadadae,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    side: THREE.DoubleSide,
  });
   /*//Front Wall
  const frontWall = new THREE.Mesh( 
    new THREE.BoxGeometry(800, 500, 0.001), 
    wallMaterial 
  );

  frontWall.position.z = -50; 

  // Left Wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(1200, 500, 0.001), 
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2; 
  leftWall.position.x = -50; 

  // Right Wall
  const rightWall = new THREE.Mesh( 
    new THREE.BoxGeometry(1200, 500, 0.001), 
    wallMaterial
  );

  rightWall.position.x = 50;
  rightWall.rotation.y = Math.PI / 2; 

  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(800, 50, 0.001),
    wallMaterial 
  );
  backWall.position.z = 50;*/

  const wall1geo = new THREE.Mesh( 
    new THREE.BoxGeometry(200, 40, 1), 
    wallMaterial 
  );

  const wall2geo = new THREE.Mesh( 
    new THREE.BoxGeometry(200, 40, 1), 
    wallMaterial 
  );

  const wall3geo = new THREE.Mesh( 
    new THREE.BoxGeometry(200, 40, 1), 
    wallMaterial 
  );

  const wall4geo = new THREE.Mesh( 
    new THREE.BoxGeometry(10, 40, 1), 
    wallMaterial 
  );

  const wall5geo = new THREE.Mesh( 
    new THREE.BoxGeometry(300, 40, 1), 
    wallMaterial 
  );

  const wall6geo = new THREE.Mesh( 
    new THREE.BoxGeometry(22.5, 40, 1), 
    wallMaterial 
  );

  

  const Lgeo = new THREE.BoxGeometry(13, 36, 1);
const cntr = new THREE.BoxGeometry(2, 10, 1.5);
const sep = new THREE.BoxGeometry(17, 36, 1.5);

const L1 = new THREE.Mesh(Lgeo, wallMaterial );
const L2 = new THREE.Mesh(Lgeo, wallMaterial );
const cnt = new THREE.Mesh(cntr, wallMaterial );
const sepp = new THREE.Mesh(sep, wallMaterial );

const sidewall = new THREE.BoxGeometry(10, 40, 1.5);
const sw1 = new THREE.Mesh(sidewall, wallMaterial);
const sw2 = new THREE.Mesh(sidewall, wallMaterial);
const sw3 = new THREE.Mesh(sidewall, wallMaterial);

sw1.position.x = -7;
sw1.position.z = -28;

sw2.position.x = 5;
sw2.position.z = 29;

sw3.rotation.y = 29.85;
sw3.position.x = -33;
sw3.position.z = 2;
  //frontwall
  wall1geo.position.z = -29;
  wall1geo.position.x = 11.8;
  
 //backwall
  wall2geo.position.z = 30;
  wall2geo.position.x = 1;
  
  //leftwall
  wall3geo.rotation.y = 29.85;
  wall3geo.position.x = -33.5;
  
  wall4geo.rotation.y = 29.9;
  wall4geo.position.x = 75;
  wall4geo.position.z = 20;
  
  //right side wall
  wall5geo.rotation.y = 29.85;
  wall5geo.position.x = 56.9;
  wall5geo.position.z = -12;
  
  wall6geo.position.x = 46.5;
  wall6geo.position.z = 18.5;

  L1.position.z = 8;

L2.rotation.y = 29.85;
L2.position.x = 6.5;
L2.position.z = 2;

cnt.position.x = 45;
cnt.position.z = -8;

sepp.rotation.y = 29.85;
sepp.position.z = -17;
sepp.position.x = 25;



  wallGroup.add( wall1geo, wall2geo, wall3geo, wall4geo, wall5geo, wall6geo, sidewall, L1, L2, cnt, sepp, sw1, sw2, sw3);

  return wallGroup;
}
