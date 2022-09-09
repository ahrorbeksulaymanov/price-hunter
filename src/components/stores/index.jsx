import React, { useState } from "react";
import { Avatar } from 'antd';
import {IoLogoUsd} from 'react-icons/io5'
import "swiper/css/navigation";

const Stores = () => {
  const [data, setdata] = useState(["", "", "", "", "", ", ", ""]);


  return (
    <div className="container">
        <div className="main-contex">
            <p className="component-title">Топ магазины</p>
            <div className="row">
              {
                data?.map((item, index) => (
                  <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div className="store-card px-2 py-4 text-center mb-4">
                      <Avatar size={60} className='mb-4' icon={<IoLogoUsd />} />
                      <p className="mt-1">Название магазина</p>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  );
};
export default Stores;
