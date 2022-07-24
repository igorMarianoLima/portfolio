let sliderContainer = document.getElementsByClassName("slide__content")[0];
let slideButtons = document.getElementsByClassName("controls__button");

const handleContainerScroll = (direction) => {
  if (direction !== "previous" && direction !== "next") {
    return;
  }

  const SCROLL_SIZE_IN_PIXELS = 200;

  switch (direction) {
    case "previous":
      sliderContainer.scrollLeft -= SCROLL_SIZE_IN_PIXELS;
      break;
    case "next":
      sliderContainer.scrollLeft += SCROLL_SIZE_IN_PIXELS;
      break;
  }
};
