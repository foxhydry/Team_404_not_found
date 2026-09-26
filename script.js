// Menutup menu Bootstrap setelah link navbar diklik di HP
document.addEventListener("DOMContentLoaded", function () {
  const daftarSekarang = document.querySelector("#daftarSekarang");
  const menu = document.querySelector("#navbarSupportedContent");

  if (daftarSekarang) {
    daftarSekarang.addEventListener("click", function (event) {
      event.preventDefault();

      if (menu && menu.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getInstance(menu);
        if (collapse) {
          collapse.hide();
        }
      }

      window.location.assign("./halaman_ppdb.html");
    });
  }
});


// Efek navbar ketika halaman discroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-inner");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 15px 45px rgba(75,10,28,.16)";
  } else {
    navbar.style.boxShadow = "0 15px 45px rgba(75,10,28,.12)";
  }
});

// Tampilkan kembali promosi PPDB setiap kali halaman utama ditampilkan
window.addEventListener("pageshow", function () {
  const ppdbModalElement = document.querySelector("#ppdbModal");

  if (ppdbModalElement) {
    const ppdbModal = new bootstrap.Modal(ppdbModalElement);
    ppdbModal.show();
  }
});
