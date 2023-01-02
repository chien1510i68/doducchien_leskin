import React from 'react';
import "./new.scss"
function NewItem(props) {
    let {item} = props;
    return (
        <>
                   <div className='col-md-6'>
                        <div className='flex item_new justify-between w-[100%] rounded-[5px]  bg-[#fff] my-[30px]'>
                            <div  className='w-[45%] h-[230px] ml-auto'>
                                <img className='w-full object-cover h-full' src={item.image} alt=""/>
                            </div>
                            <div className='w-[55%] text-left px-3 pt-4' >
                                <h6 className='font-[500] text-[20px]'>{item.title} </h6>
                                <span className='py-2 text-4 block' >{item.date}</span>
                                <p className='text_decription text-4'>{item.decription}</p>
                                <div >
                                    <a className='btn_new' href="#">Xem thêm
                                    </a>

                                </div>
                            </div>

                        </div>
                   </div>
        </>
    );
}
export default NewItem;