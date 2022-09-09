import React, { useState } from "react";
import { Pagination, Radio, Select  } from 'antd';
import {Link} from 'react-router-dom';
import "swiper/css/navigation";

const SelectedProducts = () => {
  const [data, setdata] = useState(["", "", "", "", "","", "", "", "", "","", "", "", "", "", ""]);

  const { Option } = Select;

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
            <div className="row">
                {
                    data.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <Link to='/product/:id'>
                                <div className="product-card product-hover py-3 px-2">
                                    <img src={require("../../assets/images/phone.jpg")} alt="" />
                                    <p className="name mt-3 mb-1">Название товара</p>
                                    <p className="price mb-1">3.620.000 сум</p>
                                    <button className="py-2 px-4 mt-3 main-btn">Cмотреть детали</button>
                                </div>
                            </Link>
                        </div>
                    ))
                }
                <div className="text-center mt-4 my-pagination">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    </div>
  );
};
export default SelectedProducts;
