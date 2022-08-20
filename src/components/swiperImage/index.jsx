import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

export default function SwiperProductImage({ src }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Box mb={4}>
      <Box
        ref={sliderRef}
        className="keen-slider"
        style={{
          width: "600px",
          height: "700px",
        }}
        mb={2}
      >
        {src.map((item, index) => (
          //   <Box
          //   className={`keen-slider__slide number-slide${index}`}
          // //   style={{ width: "100px", height: "100px" }}
          // >
          //   <img
          //     src={`http://localhost:3003/files/${item}`}
          //     width={"100%"}
          //     height={"100%"}
          //   />
          // </Box>
          <InnerImageZoom
            src={`http://localhost:3003/files/${item}`}
            zoomType="hover"
            zoomPreload={true}
            className={`keen-slider__slide number-slide${index}`}
          />
        ))}
      </Box>

      <Box
        ref={thumbnailRef}
        className="keen-slider thumbnail"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {src.map((item, index) => (
          <Box
            className={`keen-slider__slide number-slide${index}`}
            style={{ width: "90px", height: "150px" }}
          >
            <img
              src={`http://localhost:3003/files/${item}`}
              width={"100%"}
              height={"100%"}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
