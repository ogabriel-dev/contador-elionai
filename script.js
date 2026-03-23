const menu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("menu-open"); // Trava o scroll só quando o menu abre
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

// GSAP Animações rápidas
gsap.from(".hero-text", { opacity: 0, x: -30, duration: 0.8 });
gsap.from(".hero-img", { opacity: 0, x: 30, duration: 0.8 });

// Função WhatsApp
function enviarWhatsapp() {
  const nome = document.getElementById("nome").value;
  const msg = document.getElementById("mensagem").value;
  const fone = "55XXXXXXXXXXX"; // Substituir pelo número real

  if (!nome) return alert("Por favor, digite seu nome.");

  const texto = `Olá Elionai! Me chamo ${nome}. ${msg}`;
  window.open(
    `https://wa.me/${fone}?text=${encodeURIComponent(texto)}`,
    "_blank",
  );
}

// Scroll Suave via GSAP (Opcional, o CSS já faz o básico)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    gsap.to(window, { duration: 0.8, scrollTo: target, ease: "power2.inOut" });
  });
});
