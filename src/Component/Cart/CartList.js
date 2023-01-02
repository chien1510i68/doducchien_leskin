import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import {cart} from "../../Reduxmodules"

function CartList(props) {
    let {cart} = props
    let totalPrice = cart.reduce((total,item)=> total+ item.price * item.quantity,0);

    return (
       <>
          
        
         
            <table class="table-auto ">
                <thead className=''>
                    <tr className='row mb-1 bg-[#f4f1f7e3] flex my-0 mx-auto py-2'>
                        <th className='font-[500] text-center col-sm-6'>Sản phẩm </th>                    
                        <th className='font-[500] text-center col-sm-2'>Giá tiền</th>                    
                        <th className='font-[500] text-center col-sm-2'>Số lượng </th>                    
                        <th className='font-[500] text-center col-sm-2'>Thành tiền</th>                    
                    </tr>
                </thead>
                {cart.map(item =>
                <CartItem prod={item}  quantity={item.quantity}/>
                )}
            </table>
       </>
    );
}
const mapStateToProps = (state)=>({
    cart: state.cart
})
export default connect(mapStateToProps) (CartList);
