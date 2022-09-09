import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

const Discounts = () => {
  const { width } = useWindowSize();
  const [itemCount, setitemCount] = useState(4);
  const [data, setdata] = useState(["", "", "", "", ""]);

  useEffect(() => {
    if (width > 992) {
      setitemCount(4);
    } else if (width > 768 && width < 992) {
      setitemCount(3);
    } else if (width > 576 && width < 768) {
      setitemCount(2);
    } else {
      setitemCount(1);
    }
  }, [width]);

  return (
    <div className="container">
        <div className="main-contex">
            <p className="component-title">Лучшие акции</p>
            <Swiper
                slidesPerView={itemCount}
                spaceBetween={20}
                loop={true}
                pagination={{
                clickable: true,
                }}
                className="mySwiper news-slider-wrapper"
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                modules={[ Pagination]}
            >
                {data.map((item, index) => (
                <SwiperSlide key={index} style={{ zIndex: "100" }}>
                    <div className="skidka">
                        <img className="w-100" src={require("../../assets/images/phone.jpg")} alt="" />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};
export default Discounts;
