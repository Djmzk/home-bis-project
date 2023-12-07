/** @format */

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0; // Menyimpan indeks slide saat ini

// Fungsi untuk menangani perpindahan slider
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

// Fungsi untuk otomatis mengganti slide
const autoSlide = () => {
  // Pilih indeks slide berikutnya
  currentSlide = (currentSlide + 1) % slides.length;
  // Panggil fungsi sliderNav untuk memindahkan slider
  sliderNav(currentSlide);
};

// Atur interval untuk melakukan autoslide setiap beberapa detik (misalnya, 5000 ms atau 5 detik)
let slideInterval = setInterval(autoSlide, 5000);

// Tambahkan event listener untuk setiap tombol navigasi
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Hentikan autoslide ketika pengguna mengklik tombol navigasi manual
    clearInterval(slideInterval);
    sliderNav(i);
    // Atur ulang interval untuk melanjutkan autoslide
    slideInterval = setInterval(autoSlide, 5000);
  });
});

// Fungsi untuk memulai ulang autoslide setelah beberapa detik (misalnya, 5000 ms atau 5 detik)
const restartSlideInterval = () => {
  slideInterval = setInterval(autoSlide, 5000);
};

// Tambahkan event listener untuk menghidupkan kembali autoslide ketika pengguna tidak lagi mengklik tombol navigasi manual
navigation.addEventListener("mouseleave", restartSlideInterval);
