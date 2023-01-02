import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Voucher.scss"
function VoucherItem(props) {
    let {item} = props;


    return (
       <>
            <div className='mx-[20px] item mb-5 '>
                <div className="w-[100%] h-[200px]">
                    <img className="w-full h-full object-cover" src={item.image} alt=""/>
                </div>

                <div className="bg-[#fff]">
                    <h6 className='text-4 py-3 text-[#212121] capitalize font-[500] px-2 voucher_title'>{item.title}</h6>
                    <div className="flex justify-between px-3 pb-4  ">
                        <p className='text-[14px]'>05/07/21- 31/08/19</p>
                        <span className='text-[14px] text-[#d88821]  '>
                            <Link to="/datlich" className='link_voucher border-[1px]  border-[#d88821] px-[10px] py-1 rounded-[22px] '>Đặt lịch với Leskin 
                                <FontAwesomeIcon className='px-1' icon={faChevronRight}/>
                            </Link>
                        </span>
                    </div>

                </div>
            </div>
       </>
    );
}

export default VoucherItem;