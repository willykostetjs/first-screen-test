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
    slidesPerView: "auto",
    spaceBetween: 12,
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true,
    },
    pagination: {
      el: ".icf-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".icf-navigation-left",
      nextEl: ".icf-navigation-right",
    },
    breakpoints: {
      200: { slidesPerView: "auto", spaceBetween: 12 },
      1024: { slidesPerView: "auto", spaceBetween: 12 },
    },
  });
  const historySwiper = new Swiper(".history-slider", {
    loop: false,
    slidesPerView: "auto",
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
        slidesPerView: "auto",
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },
  });
  const teachersSwiper = new Swiper(".teachers-slider", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
      el: ".teachers-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".teachers-navigation-left",
      nextEl: ".teachers-navigation-right",
    },
    breakpoints: {
      200: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },
  });
  const learningSwiper = new Swiper(".learning-slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 42,
    pagination: {
      el: ".learning-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".learning-navigation-left",
      nextEl: ".learning-navigation-right",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 42,
      },
    },
  });

  const learningRightSwiper = new Swiper(".learning-right-slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 42,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 42,
      },
    },
  });
  learningSwiper.controller.control = learningRightSwiper;
  learningRightSwiper.controller.control = learningSwiper;

  const communitySwiper = new Swiper(".community-slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
      el: ".community-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".community-navigation-left",
      nextEl: ".community-navigation-right",
    },
    centeredSlides: true,

    breakpoints: {
      200: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },
  });
  const careerSwiper = new Swiper(".career-slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
      el: ".career-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".career-navigation-left",
      nextEl: ".career-navigation-right",
    },

    breakpoints: {
      200: {
        slidesPerView: "auto",
        spaceBetween: 12,
        centeredSlides: true,
      },
      824: {
        slidesPerView: "auto",
        spaceBetween: 12,
        centeredSlides: false,
      },
    },
  });

  const whereSwiper = new Swiper(".where-slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 42,
    pagination: {
      el: ".where-dots",
      clickable: true,
    },
    navigation: {
      prevEl: ".where-navigation-left",
      nextEl: ".where-navigation-right",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 42,
      },
    },
  });

  const whereRightSwiper = new Swiper(".where-right-slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 42,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 42,
      },
    },
  });
  whereSwiper.controller.control = whereRightSwiper;
  whereRightSwiper.controller.control = whereSwiper;

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
document.addEventListener("DOMContentLoaded", () => {
  // 1. Обработка открытия
  document.querySelectorAll("[data-modal-target]").forEach((btn) => {
    const targetId = btn.getAttribute("data-modal-target");
    const modal = document.getElementById(targetId);
    if (!modal) return;

    btn.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // 2. Универсальное закрытие для всех модалок
  document.querySelectorAll(".modal").forEach((modal) => {
    const closeBtn = modal.querySelector(".modal-close");
    const overlay = modal.querySelector(".modal-overlay");

    function close() {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }

    if (closeBtn) closeBtn.addEventListener("click", close);
    if (overlay) overlay.addEventListener("click", close);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".accordion__title");

  titles.forEach((title) => {
    title.addEventListener("click", function (e) {
      e.preventDefault();
      const isActive = title.classList.contains("accordion-active");

      // закрываем всё
      document
        .querySelectorAll(".accordion__title")
        .forEach((t) => t.classList.remove("accordion-active"));
      document
        .querySelectorAll(".accordion__arrow")
        .forEach((a) => a.classList.remove("accordion__rotate"));
      document.querySelectorAll(".accordion__content").forEach((c) => {
        c.classList.remove("open");
        c.style.maxHeight = null;
      });

      // если до клика не было активно — открываем именно этот
      if (!isActive) {
        title.classList.add("accordion-active");
        const arrow = title.querySelector(".accordion__arrow");
        if (arrow) arrow.classList.add("accordion__rotate");

        const content = title.nextElementSibling;
        if (content && content.classList.contains("accordion__content")) {
          content.classList.add("open");
          // даём браузеру замерить scrollHeight после добавления класса
          // content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll("[data-modal-target]");
  const closeBtns = document.querySelectorAll("[data-modal-close]");
  const overlays = document.querySelectorAll(".remodal-wrapper");

  function openModal(id) {
    const overlay = document.querySelector(
      `.remodal-wrapper[data-modal-id="${id}"]`
    );
    if (!overlay) return;
    overlay.classList.add("is-open");
  }

  function closeModal(overlay) {
    overlay.classList.add("is-closing");
    overlay.addEventListener("animationend", function _h() {
      overlay.classList.remove("is-open", "is-closing");
      overlay.removeEventListener("animationend", _h);
    });
  }

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(btn.dataset.modalTarget);
    });
  });

  // крестик
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const overlay = btn.closest(".remodal-wrapper");
      closeModal(overlay);
    });
  });

  // клик по фону
  overlays.forEach((ov) => {
    ov.addEventListener("click", (e) => {
      if (e.target === ov) {
        closeModal(ov);
      }
    });
  });
});
