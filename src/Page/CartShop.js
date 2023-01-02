import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartList from '../Component/Cart/CartList';
import {cart} from "../Reduxmodules"
function CartShop(props) {
    let {cart}= props
    let totalPrice = cart.reduce((total,item)=> total+ item.price * item.quantity,0);
    return (

       <>
        <div className='px-[100px] md:flex lg:flex md:justify-between lg:justify-between mt-5 '>
            {
                (cart.length ==0) && 
                <div className='col-md-8 col-sm-12'>
                    <h1 className='text-[30px] text-center text-[#dd8f22]'>Giỏ hàng của bạn chưa có gì 
                    </h1>
                        <Link className='text-center block py-4 hover:no-underline' to = "/product" >Click vào đây để mua hàng </Link>
                </div>
            }
            {
                (cart.length > 0 ) &&
                <div className='col-md-8 col-sm-12'>
                       <div class="flex items-center py-4 ">
                <Link to="/product" className='hover:text-[#d88821] hover:no-underline'>
                    Sản phẩm 
                </Link>
                <FontAwesomeIcon className='mx-3' icon={faChevronRight}/>
                <h3>Giỏ hàng </h3>  
            </div>      
                <CartList/>
                </div>

            }
            <div className='col-md-4 col-sm-12 text-left mt-1 border-t-[4px] border-solid border-[#dd8f22]'>
                <h1 className='font-[700] text-[20px] mb-3 mt-3'>Hóa đơn của bạn</h1>
              <div className='border-t-[2px]  border-solid border-[#c9cdcd4d] border-b-[2px] py-[15px]'>
                    <div className='flex justify-between pb-2'>
                        <p className='text-[18px]'> Tạm tính : </p>
                        <h4 className='font-[700] text-[#dd8f22]'>{totalPrice}</h4>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-[18px]'> Giảm giá : </p>
                        <h4 className='font-[700] text-[#dd8f22]'>0đ</h4>
                    </div>
              </div>
              <div className='flex justify-between mt-[20px]'>
                        <p className='text-[18px]'> Tổng cộng : </p>
                        <h4 className='font-[700] text-[#dd8f22]'>{totalPrice}</h4>
                </div>

                <button className='font-[700] text-[18px] mt-5 px-[24px] mx-auto rounded-[5px] text-[#fff] py-[12px] block bg-[#dd8f22]' >Tiến hành đặt hàng </button>
            </div>
        </div>
       </>
    );
}
const mapStateToProps = (state) => ({
    cart : state.cart
})
export default connect(mapStateToProps)(CartShop);