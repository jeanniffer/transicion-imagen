new hoverEffect({
  parent: document.querySelector(".distorsion"),
  intensity: 0.08,
  image1: "./imgs/img-001.jpg",
  image2: "./imgs/img-002.jpg",
  displacementImage: "imgs/002.png",
  angle1: Math.PI * 3,
  angle2: Math.PI * 1.4,
  speedIn: 60,
  speedOut: 60,
});

new hoverEffect({
  parent: document.querySelector(".prueba-dos"),
  intensity: 0.01,
  image1: "./imgs/img-001.jpg",
  image2: "./imgs/img-002.jpg",
  displacementImage: "imgs/003.jpg",
  angle1: Math.PI * 9,
  angle2: Math.PI * 14,
  speedIn: 40,
  speedOut: 40,
});

new hoverEffect({
  parent: document.querySelector(".prueba-tres"),
  intensity: 0.008,
  image1: "./imgs/img-001.jpg",
  image2: "./imgs/img-002.jpg",
  displacementImage: "imgs/004.png",
  angle1: Math.PI * 3,
  angle2: Math.PI * 5,
  speedIn: 25,
  speedOut: 25,
});
