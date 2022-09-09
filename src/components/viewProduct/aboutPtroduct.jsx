import React from 'react';

const AboutProduct = () => {

    return (
        <div>
            <h4>Детали товара</h4>
            <div className="row">
                <div className="col-md-4 col-6">
                    <span className="small-text d-block mb-4 mt-4">Категория</span>
                    <span className="small-text d-block mb-4">Производитель</span>
                    <span className="small-text d-block mb-4">Модель</span>
                    <span className="small-text d-block mb-4">Цена</span>
                    <span className="small-text d-block mb-4">Последнее сканирование</span>
                </div>
                <div className="col-md-4 col-6">
                    <span className="small-text d-block mb-4 mt-4">Ноутбуки</span>
                    <span className="small-text d-block mb-4">Ноутбуки</span>
                    <span className="small-text d-block mb-4">AP-1515H</span>
                    <span className="small-text d-block mb-4">3.620.000 сум</span>
                    <span className="small-text d-block mb-4">2 часа назад</span>
                </div>
            </div>
        </div>
    )
}
export default AboutProduct;