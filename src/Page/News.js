import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import NewList from '../Component/News/NewList';

function News(props) {
    return (
       <>
             <div className='bg-[#f2f2f2]'>
             <div class="flex items-center py-4 pl-[100px]">
                <Link to="/" className='hover:text-[#d88821] hover:no-underline'>
                Trang chủ
                </Link>
                <FontAwesomeIcon className='mx-3' icon={faChevronRight}/>
                <h3>Tin tức</h3>  
            </div>   
            <NewList/>
        </div>
          
       </>
    );
}

export default News;