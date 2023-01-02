import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Lienhe from '../Component/Lienhe/lienhe';

function LienHe(props) {
    return (
        <div>
             <div class="flex items-center py-4 pl-[100px]">
                <Link to="/" className='hover:text-[#d88821] hover:no-underline'>
                Trang chủ
                </Link>
                <FontAwesomeIcon className='mx-3' icon={faChevronRight}/>
                <h3>Liên hệ</h3>  
            </div>   
            <Lienhe/>
            {/* <img src="" alt="" /> */}
        </div>
    );
}

export default LienHe;