import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination, Autoplay ,Navigation } from "swiper";
import SingleProductDesktop from "../products/SingleProductDesktop";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

export default function Category({ type, products }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Typography variant="h5" display={"flex"} alignItems={"center"}>
        {type}
        <ArrowBackIosRoundedIcon fontSize="small" />
      </Typography>
      <Box>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}

          modules={[Pagination , Autoplay , Navigation  ]}
        >
          {products.length > 0 &&
            products.map((product) => (
              <SwiperSlide>
                {<SingleProductDesktop product={product} matches={matches} />}
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
}
