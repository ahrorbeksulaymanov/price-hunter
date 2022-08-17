import React from 'react';
import './style.scss'

const MainComp = () => {

    return(
        <div className="container">
            <div className='text-center main-comp-wrapper' >
                <h3>Мы помогаем сохранить ваши деньги</h3>
                <div className='images_wrap'>
                    <div className="row">
                        <div className="col-md-4">
                            <img className='w-100 img-ht-100' src={require("../../assets/images/phone.jpg")} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img className='w-100 img-ht-50' src={require("../../assets/images/phone.jpg")} alt="" />
                            <img className='w-100 img-ht-50' style={{marginTop:"30px"}} src={require("../../assets/images/phone.jpg")} alt="" />
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainComp;