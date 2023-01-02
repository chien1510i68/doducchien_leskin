import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faHandshake, faLaptop, faMapLocation, faPerson, faPersonDress, faPhone, faStar, faStarAndCrescent, faStarHalf, faUsersLine } from '@fortawesome/free-solid-svg-icons'
function IntroItem(props) {
    let {item} = props
    return (
   <> 
        <div className=" col-md-3 flex items-center justify-center mb-[100px] ">
            <FontAwesomeIcon className=' cursor-pointer mr-1 text-[40px] text-[#f8944c]' icon={faGift}/>
           
            <div className='w-[60%]'>
                <h3 className='text-center text-[14px] pr-[20px] pl-[20px] uppercase font-[400]  '>{item.text} </h3>
            </div>
        </div>
   </>
    );
}

export default IntroItem;