export const paintingData = [
  // Front Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i}.png`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 9, // width of the painting
    height: 8, // height of the painting
    position: { x: 8, y: 6, z: -28 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),
   // Front Wall
   ...Array.from({ length: 1 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.png`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 9, // width of the painting
    height: 8, // height of the painting
    position: { x: -20, y: 6, z: -28}, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),
  // Back Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 2}.png`,
    width: 9,
    height: 8,
    position: { x: 20 , y: 6, z: 29 },
    rotationY: Math.PI,
    info: {
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),
  //back wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 3}.png`,
    width: 9,
    height: 8,
    position: { x: -15 , y: 6, z: 29 },
    rotationY: Math.PI,
    info: {
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),
  // Left Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 4}.png`,
    width: 9,
    height: 8,
    position: { x: -32, y: 6, z: 17},
    rotationY: Math.PI/2 ,
    info: {
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),

    // Left Wall
    ...Array.from({ length: 1 }, (_, i) => ({
      imgSrc: `artworks/${i + 5}.png`,
      width: 9,
      height: 8,
      position: { x: -32, y: 6, z: -15},
      rotationY: Math.PI/2 ,
      info: {
        title: `Title`,
        artist: 'Artist',
        description: `Description`,
        year: `Year`,
        link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
      },
    })),

  // Right Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 6}.png`,
    width: 9,
    height: 10,
    position: { x: 23.5, y: 6, z: -17+10*i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),
  // Right Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 7}.png`,
    width: 9,
    height: 8,
    position: { x: 56, y: 6, z: -3 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Title`,
      artist: 'Artist',
      description: `Description`,
      year: `Year`,
      link: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
    },
  })),
];
