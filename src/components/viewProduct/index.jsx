import React, { useState } from "react";
import CollapseProduct from "./collapseProduct";
import StatisticsProduct from "./statistics";
import { Radio } from "antd";
import AboutProduct from "./aboutPtroduct";
import {AiOutlineHeart} from 'react-icons/ai'

const ProductView = () => {

    const [statistic, setStatistic] = useState(1)

  return (
    <div className="container">
      <div className="main-contex">
        <div className="product-view">
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("../../assets/images/phone.jpg")}
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-start flex-column hight-300">
                <div className="mb-auto bd-highlight">
                  <h4 className="mt-3">Название товара</h4>
                </div>
                <div className="bd-highlight mb-4">
                  <span className="me-4 small-text">Главная</span>
                  <span className="me-4 small-text">Категория</span>
                  <span className="me-4 small-text">Модель</span>
                </div>
                <div className="bd-highlight d-md-none">
                  <p className="mb-0 description">
                    Подпишитесь на уведомления о снижении цен и начните
                    отслеживать этот продукт, заполнив форму ниже.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-end flex-column hight-300">
                <div className="mb-auto bd-highlight text-end w-100-mobile">
                  <AiOutlineHeart className="mt-md-5 mb-2" style={{fontSize:"22px"}} />
                  <h5 className="mb-0">3.620.000 сум</h5>
                  <span className=" small-text d-block mb-2">alifshop.uz</span>
                  <span className="small-text">16.08.2022 13:43</span>
                </div>
                <div className="bd-highlight w-100-mobile">
                  <button className="py-2 px-4 mt-3 main-btn" style={{background: "$color-white", border: "2px solid $main-border-color"}}>
                    Смотреть на alifshop
                  </button>
                </div>
              </div>
              <p className="mb-0 mt-5 d-md-inline-block description   ">
                Подпишитесь на уведомления о снижении цен и начните отслеживать
                этот продукт, заполнив форму ниже.
              </p>
            </div>
          </div>
          <CollapseProduct />
          <div className="filters mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <Radio.Group defaultValue={1} onChange={(e) => setStatistic(e.target.value)} buttonStyle="solid">
                <Radio.Button className="filter-radio-item me-3" value={1}>
                  Отслеживание цен
                </Radio.Button>
                <Radio.Button className="filter-radio-item" value={2}>
                  Детали товара
                </Radio.Button>
              </Radio.Group>
            </div>
          </div>
          {
            statistic === 1 ? 
            <StatisticsProduct /> 
            : <AboutProduct /> 
          }
        </div>
      </div>
    </div>
  );
};
export default ProductView;
