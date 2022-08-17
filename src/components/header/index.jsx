import React from 'react';
import {Input} from 'antd';
import {FiSearch} from 'react-icons/fi'
import {FaRegUserCircle} from 'react-icons/fa'
import './style.scss'

const HeaderComp = () => {

    return (
        <div className='header'>
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center">
                        <p style={{whiteSpace: "nowrap"}} className='mb-0 logo-text'>Price Hunter</p>
                        <Input
                            placeholder="Search..."
                            suffix={
                                <FiSearch style={{ color: 'rgba(0,0,0,.45)' }} />
                            }
                        />
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <p style={{whiteSpace: "nowrap"}} className='mb-0 me-5 header-text'>Популярные продукты</p>
                        <p style={{whiteSpace: "nowrap"}} className='mb-0 me-5 header-text'>Выгодные предложения</p>
                        <FaRegUserCircle className='user-icon' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default HeaderComp;