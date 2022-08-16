import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
} from "../../styles/banner";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Swiper
        
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerContainer src="/images/banner/backpack.jpg">
            <BannerContent>
              <Typography variant="h6">Huge Collection</Typography>
              <BannerTitle variant="h2">New Bags</BannerTitle>
              <BannerDescription variant="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BannerDescription>
            </BannerContent>
          </BannerContainer>
        </SwiperSlide>
        <SwiperSlide>
        <BannerContainer src="/images/banner/floral.jpg">
            <BannerContent>
              <Typography variant="h6">Huge Collection</Typography>
              <BannerTitle variant="h2">New Bags</BannerTitle>
              <BannerDescription variant="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BannerDescription>
            </BannerContent>
          </BannerContainer>
        </SwiperSlide>
        <SwiperSlide>
        <BannerContainer src="/images/banner/holy-guacamole.jpg">
            <BannerContent>
              <Typography variant="h6">Huge Collection</Typography>
              <BannerTitle variant="h2">New Bags</BannerTitle>
              <BannerDescription variant="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BannerDescription>
            </BannerContent>
          </BannerContainer>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
