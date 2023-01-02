import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Introduceproduct from '../Component/Introduce/introduceproduct';

function Introduce(props) {
    return (
        <>
        <div>
            <img className='w-full' src="https://leskin.com.vn/Uploads/news/anh%20web5.jpg" alt="" />     
            <div class="flex items-center py-4 pl-[100px]">
                <Link to="/" className='hover:text-[#d88821] hover:no-underline'>
                Trang chủ
                </Link>
                <FontAwesomeIcon className='mx-3' icon={faChevronRight}/>
                <h3>Giới thiệu</h3>  
            </div>       
           <Introduceproduct/>
       </div>
        </>
    );
}

export default Introduce;