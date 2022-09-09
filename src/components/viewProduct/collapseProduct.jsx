import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

const CollapseProduct = () => {

    const [data, setData] = useState([1, 2, 2, 2, 2, 5])
    const [count, setcount] = useState(2)
    

  return (
    <div>
      <div className="main-contex">
        <h4>4 других предложения</h4>
        <Table>
          <Thead>
            <Tr>
              <Th className='w-15'>Продавец</Th>
              <Th className='w-20'>Категория</Th>
              <Th className='w-15'>Цена</Th>
              <Th className='w-20'>Дата обновления</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
                data?.map((item, index) => (
                    count >= index &&
                    <Tr className='solid' key={index}>
                        <Td className='w-15'>Mediapark</Td>
                        <Td className='w-20'>Электроника</Td>
                        <Td className='w-15'>3.834.000 сум</Td>
                        <Td className='w-20'>21.08.2022</Td>
                        <Td className='w-30 text-end'>
                            <button className='py-2 px-4 main-btn-red'>Перейти в Mediapark</button>
                        </Td>
                    </Tr>
                ))
            }
            {
               count === 2 ?  
               <p className="description" style={{marginLeft:"22px", cursor:"pointer"}} onClick={() => setcount(data?.length)}>Показать ещё <FiChevronDown /></p>
               :<p className="description" style={{marginLeft:"22px", cursor:"pointer"}} onClick={() => setcount(2)}>Показать меньше <FiChevronUp /></p>
            }
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default CollapseProduct;
