const app = () => {
  $('[data-ride="carousel"] .carousel-control-next').on("click", (e) => {
    const carousel = e.currentTarget.closest('[data-ride="carousel"]');
    const activeItem = $(carousel).find(".carousel-item.active");
    let nextItem = activeItem.next();
    if (!nextItem.length) nextItem = activeItem.siblings().first();

    activeItem.removeClass("active");
    nextItem.addClass("active");
  });

  $('[data-ride="carousel"] .carousel-control-prev').on("click", (e) => {
    const carousel = e.currentTarget.closest('[data-ride="carousel"]');
    const activeItem = $(carousel).find(".carousel-item.active");
    let prevItem = activeItem.prev();
    if (!prevItem.length) prevItem = activeItem.siblings().last();

    activeItem.removeClass("active");
    prevItem.addClass("active");
  });
};

export default app;
