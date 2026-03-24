const menu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});


gsap.from(".hero-text", { opacity: 0, x: -30, duration: 0.8 });
gsap.from(".hero-img", { opacity: 0, x: 30, duration: 0.8 });


function enviarWhatsapp() {
  const nome = document.getElementById("nome").value;
  const msg = document.getElementById("mensagem").value;
  const fone = "5515998319415";

  if (!nome) return alert("Por favor, digite seu nome.");

  const texto = `Olá Elionai! Me chamo ${nome}. ${msg}`;
  window.open(
    `https://wa.me/${fone}?text=${encodeURIComponent(texto)}`,
    "_blank",
  );
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    gsap.to(window, { duration: 0.8, scrollTo: target, ease: "power2.inOut" });
  });
});
