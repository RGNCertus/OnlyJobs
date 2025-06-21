const imagenes = [
  "carrusel1.jpg",
  "carrusel2.jpg",
  "carrusel3.jpg"
];

let indice = 0;
const imgElement = document.getElementById("carousel-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  imgElement.src = imagenes[indice];
}, 2000);

prevBtn.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  imgElement.src = imagenes[indice];
});

nextBtn.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  imgElement.src = imagenes[indice];
});