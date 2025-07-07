function openModal() {
  const e = document.querySelector(".modal");
  e && (e.classList.add("active"), (document.body.style.overflow = "hidden"));
}
function closeModal() {
  const e = document.querySelector(".modal");
  e && (e.classList.remove("active"), (document.body.style.overflow = ""));
}
function handleFormSubmit() {
  const e = document.querySelector('.modal-input[type="email"]').value,
    o = document.querySelector('.modal-input[type="tel"]').value,
    t = document.querySelector(".modal-check"),
    d = document.querySelector(".modal-form");
  e && o
    ? t.checked
      ? (alert(
          "Спасибо! Ваше место забронировано. Мы свяжемся с вами в ближайшее время."
        ),
        closeModal(),
        d.reset())
      : alert("Необходимо дать согласие на обработку персональных данных")
    : alert("Пожалуйста, заполните все поля");
}
document.addEventListener("DOMContentLoaded", function () {
  const icfSwiper = new Swiper(".icf-slider", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 12,
    pagination: {
      el: ".icf-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".icf-navigation-left",
      nextEl: ".icf-navigation-right",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
  });
  const historySwiper = new Swiper(".history-slider", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 12,
    pagination: {
      el: ".history-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".history-navigation-left",
      nextEl: ".history-navigation-right",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });
  const e = new Swiper(".speaker-swiper", {
      direction: "horizontal",
      loop: !0,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      effect: "fade",
      fadeEffect: { crossFade: !0 },
      speed: 800,
      navigation: !1,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 1, spaceBetween: 0 },
        1024: { slidesPerView: 1, spaceBetween: 0 },
      },
    }),
    o = document.querySelector(".slider-arrow-left"),
    t = document.querySelector(".slider-arrow-right");
  o && o.addEventListener("click", () => e.slidePrev()),
    t && t.addEventListener("click", () => e.slideNext());
  const d = document.querySelector(".modal"),
    c = document.querySelector(".welcome-btn"),
    l = document.querySelector(".modal .close"),
    n = document.querySelector(".modal-form");
  c &&
    c.addEventListener("click", (e) => {
      e.preventDefault(), openModal();
    }),
    l && l.addEventListener("click", closeModal),
    d &&
      d.addEventListener("click", (e) => {
        e.target === d && closeModal();
      }),
    document.addEventListener("keydown", (e) => {
      "Escape" === e.key && d.classList.contains("active") && closeModal();
    }),
    n &&
      n.addEventListener("submit", (e) => {
        e.preventDefault(), handleFormSubmit();
      });
}),
  (window.openModal = openModal),
  (window.closeModal = closeModal);
