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

document.querySelectorAll("nav a").forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const texto = enlace.textContent.toLowerCase();

    if (texto.includes("nosotros")) {
      window.location.href = "nosotros.html";
    } else if (texto.includes("redes")) {
      window.location.href = "redes.html";
    } else if (texto.includes("contáctanos")) {
      window.location.href = "contacto.html";
    }
  });
});
