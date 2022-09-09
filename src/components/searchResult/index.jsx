import { Col, Input, Pagination, Row, Select } from "antd";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const { Option } = Select;

const SearchResult = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className="container">
      <div className="main-contex search-result">
        <div className="filters mb-5">
          <div className="row">
            <div className="col-md-4 pt-2">
              <span className="component-title me-3">Результаты поиска:</span>{" "}
              <h6 className="d-inline-block">Ноутбук</h6>
            </div>
            <div className="col-md-4">
              <button className="py-2 px-2 result-btn">Категории</button>
              <Select
                allowClear
                className="filter-select w-100 mt-2"
                showSearch
                placeholder="Все категории"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                defaultActiveFirstOption={true}
                filterOption={(input, option) =>
                  (option?.children).toLowerCase().includes(input.toLowerCase())
                }
              >
                <Select.Option value="jack">alifshop</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="tom">Tom</Select.Option>
              </Select>
            </div>
            <div className="col-md-4">
              <button className="py-2 px-2 result-btn">Сортировать по</button>
              <Select
                allowClear
                className="filter-select w-100 mt-2"
                showSearch
                placeholder="Все категории"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                defaultActiveFirstOption={true}
                filterOption={(input, option) =>
                  (option?.children).toLowerCase().includes(input.toLowerCase())
                }
              >
                <Select.Option value="jack">alifshop</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="tom">Tom</Select.Option>
              </Select>
            </div>
          </div>
        </div>
        {data?.map((item, index) => (
          <div key={index} className="search-card">
            <Row>
              <Col xl={7} md={12} span={24}>
                <img
                  src={require("../../assets/images/phone.jpg")}
                  className="w-100"
                  alt=""
                />
              </Col>
              <Col xl={7} md={12} span={24}>
                <div className="d-flex align-items-start flex-column h-220">
                  <h6 className="mb-auto bd-highlight">Название товара</h6>
                  <div className="bd-highlight">
                    <p>Модель:</p>
                    <button className="py-2 px-4 mt-3 d-md-none main-btn">
                      Смотреть на alifshop
                    </button>
                  </div>
                </div>
              </Col>
              <Col xl={5} md={12} span={12}>
                <h5>Магазин</h5>
                <p className="mb-3">alifshop.uz</p>
                <p className="mb-3">alifshop.uz</p>
                <p className="mb-3">alifshop.uz</p>
                <p style={{ textDecoration: "underline" }}>ещё</p>
              </Col>
              <Col xl={5} md={12} span={12}>
                <h5>Текущая цена:</h5>
                <p className="mb-3">3.620.000 сум</p>
                <p className="mb-3">Нет в наличии</p>
                <p className="mb-3">3.790.000 сум</p>
                <p className="mb-3">alifshop.uz</p>
              </Col>
              <button className="py-2 px-4 mt-3 d-md-inline-block w-100 main-btn">
                Смотреть на alifshop
              </button>
            </Row>
          </div>
        ))}
        <div className="mt-4 my-pagination">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
