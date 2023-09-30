// toggle kelas aktif (yang gak ada menjadi ada) humberger menu
const menu = document.querySelector(".menu-navbar");

// ketika humberger menu diklik
document.querySelector("#humberger-menu").onclick = () => {
  menu.classList.toggle("active");
};
// untuk menghilangkan humberger menu
const humbergermenu = document.querySelector("#humberger-menu");
document.addEventListener("click", function (e) {
  if (!humbergermenu.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});
