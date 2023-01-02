import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./detail.scss"
function Detail(props) {
    let {item} = props;
    // if (DetailProducts.id == 1) 
    // const {item} = useParams()

    return (
    <div>
            
        <div class="about-us">
          
         
            <div class="row">
                <div class="about-us_image col-md-6 mt-5">
                    <img className='h-[300px] object-cover object-center' src ={item.image} alt="" />
                    
                    <div class="about-us_list ">
                        <ul className='w-full'>
                            <img className='w-[18%]' src={item.image} alt=""/>
                            <img className='w-[18%]' src={item.image} alt=""/>
                            <img className='w-[18%]' src={item.image} alt=""/>
                            <img className='w-[18%]' src={item.image} alt=""/>
                            <img className='w-[18%]' src={item.image} alt=""/>
                        </ul>
                    </div>
                </div>
                <div class="about-us_content col-md-6 pt-5">
                    <h3 className="text-left">{item.title}</h3>
                    <p className="text-left">Thương hiệu :
                        <a href="#" className="text-left">NUCI SPA & ACADEMY</a>
                    </p>
                    <h2 className="text-left">
                       {item.price}đ
                    </h2>
                    <ul>
                        <p className='detailinfor-text '>
                        {item.detailinfor}    
                        </p>
                    </ul>
                    <div class="about_us-time">
                        {/* <i class="fa-solid fa-business-time"></i> */}
                        <span className="block text-left pl-3">
                            Thời gian :
                            <b>
                               5/3/2020
                            </b>
                        </span>

                    </div>

                    <div class="about-us_amount">
                        {/* <p className="text-left">Số lượng :</p> */}
                        {/* <input type="number" id="tentacles" name="tentacles" min="1" max="100" placeholder="01"/> */}
                        <button className='block mx-auto pb-2'>
                            <h4 className="text-center">
                                <Link to="/datlich" className='hover:no-underline hover:text-[#fff] font-[600]'>
                                    ĐẶT LỊCH NGAY 
                                </Link>
                            </h4>
                        </button>
                    </div>


                </div>

            </div>

       </div>
        


    </div>
    );
}
const mapStateToProps = (state) => ({
    DetailProducts : state.DetailProduct
})
export default connect (mapStateToProps) (Detail);