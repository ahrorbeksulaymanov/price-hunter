import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Radio, Select  } from 'antd';
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const { width } = useWindowSize();
  const [itemCount, setitemCount] = useState(4);
  const [data, setdata] = useState(["", "", "", "", ""]);

  const { Option } = Select;

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

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <div className="container">
        <div className="main-contex">
            <p className="component-title">Популярные товары</p>
            <div className="filters mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button className="filter-radio-item me-3" value="a">Все товары</Radio.Button>
                        <Radio.Button className="filter-radio-item" value="b">По лучшей цене</Radio.Button>\
                    </Radio.Group>
                    <Select
                        allowClear
                        className="filter-select"
                        showSearch
                        placeholder="Все категории"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        (option?.children).toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
            </div>
            <Swiper
                slidesPerView={itemCount}
                spaceBetween={0}
                loop={true}
                pagination={{
                clickable: true,
                }}
                className="mySwiper news-slider-wrapper"
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                {data.map((item, index) => (
                <SwiperSlide key={index} style={{ zIndex: "100" }}>
                  <Link to='/product/:id'>
                    <div className="product-card p-3">
                        <img src={require("../../assets/images/phone.jpg")} alt="" />
                        <p className="name mt-3 mb-1">Название товара</p>
                        <p className="price mb-1">3.620.000 сум</p>
                        <button className="py-2 px-4 mt-3 main-btn">Cмотреть детали</button>
                    </div>
                  </Link>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};
export default PopularProducts;
