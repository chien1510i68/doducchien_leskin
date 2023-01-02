import React from 'react';
// import "./Lienhe.scss"
function Lienhe() {
    return (
        <div>
             <div className="row px-[100px]">
                <div className="box-left col-xl-8 col-lg-8 col-md-12">
                    <h3 className="text-left my-[30px] font-[500] text-[20px]"> Gửi thông tin liên hệ cho chúng tôi </h3>
                    <form className="row">
                        <div className='col-md-6 col-xs-12 input_contact'>
                            <input className='w-full border-[1px] border-solid border-[#ddd] text-[#333] outline-none p-2 mt-3 text-[#000]' type="text" placeholder='Họ tên (*)' />
                        </div>    
                        <div className='col-md-6 col-xs-12 input_contact'>
                            <input className='w-full border-[1px] border-solid border-[#ddd] text-[#333] outline-none p-2 mt-3 text-[#000]' type="text" placeholder='Điện thoại (*)' />
                        </div>    
                        <div className='col-md-6 col-xs-12 input_contact'>
                            <input className='w-full border-[1px] border-solid border-[#ddd] text-[#333] outline-none p-2 mt-3 text-[#000]' type="text" placeholder='Email (*)' />
                        </div>    
                        <div className='col-md-6 col-xs-12 input_contact'>
                            <input className='w-full border-[1px] border-solid border-[#ddd] text-[#333] outline-none p-2 mt-3 text-[#000]' type="text" placeholder='Địa chỉ (*)' />
                        </div>    
                        <div className='col-md-12 col-xs-12 input_contact'>
                        <textarea name="Content" className='w-full border-[1px] border-solid border-[#ddd] text-[#333] outline-none p-2 mt-3 text-[#000]' cols='30' rows="8" placeholder="Nội dung"></textarea>                       
                        </div>    
                        <button className='uppercase px-5 py-2 bg-[#dd8f22] font-[500] text-[#fff] ml-[20px] mt-4 rounded-[5px]' > gửi đi </button>
                    </form>                       
                </div>
                <div className="box-right col-xl-4 col-lg-4 col-md-12 text-left">
                    <h3 className="text-left my-[30px] font-[500] text-[20px]">Thông tin liên hệ </h3>

                    <ul className="">
                        <li className="mb-3 " ><a className='hover:no-underline hover:text-[#dd8f22]' href="#">
                                <i className="fa-solid fa-location-dot"></i>
                                <p className='mt-10'>
                                    P.1505 - A2 Tòa nhà Ecolife Capitol - 58 Tố Hữu, Thanh Xuân, Hà Nội

                                </p>
                            </a></li>
                        <li className="mb-3 " ><a className='hover:no-underline hover:text-[#dd8f22]' href="#">
                                <i className="fa-solid fa-phone"></i>
                                <p>
                                    (024).3783.5639 - (024).3783.5640

                                </p>
                            </a></li>
                        <li className="mb-3 " ><a className='hover:no-underline hover:text-[#dd8f22]' href="#">
                                <i className="fa-solid fa-radio"></i>
                                <p>
                                    (024) 3.783.5641

                                </p>
                            </a></li>
                        <li className="mb-3 " ><a className='hover:no-underline hover:text-[#dd8f22]' href="#">
                                <i className="fa-regular fa-envelope"></i>
                                <p>

                                    info@adcvietnam.net
                                </p>

                            </a></li>
                        <li className="mb-3 " ><a className='hover:no-underline hover:text-[#dd8f22]' href="#">
                                <i className="fa-solid fa-globe"></i>
                                <p>
                                    www.adcvietnam.net

                                </p>
                            </a></li>
                    </ul>
                </div>

            </div>
            <h1>Test</h1>
        </div>
    );
}

export default Lienhe;