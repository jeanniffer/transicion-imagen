new hoverEffect({
  parent: document.querySelector(".distorsion"),
  intensity: 0.008,
  image1: "./imgs/prueba2-1.jpg",
  image2: "./imgs/prueba2-2.jpg",
  displacementImage: "imgs/002.png",
  angle1: Math.PI * 2,
  angle2: Math.PI * 1,
  speedIn: 30,
  speedOut: 30,
});

new hoverEffect({
  parent: document.querySelector(".prueba-dos"),
  intensity: 0.01,
  image1: "./imgs/prueba2-1.jpg",
  image2: "./imgs/prueba2-3.jpg",
  displacementImage: "imgs/002.jpg",
  speedIn: 20,
  speedOut: 20,
});

new hoverEffect({
  parent: document.querySelector(".prueba-tres"),
  intensity: 0.008,
  image1: "./imgs/prueba2-2.jpg",
  image2: "./imgs/prueba2-1.jpg",
  displacementImage: "imgs/002.png",
  speedIn: 15,
  speedOut: 15,
});
