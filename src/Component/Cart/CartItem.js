import { faDeleteLeft, faMinus, faPlus, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {upNumber, downNumber ,deleteItems, cart} from "../../Reduxmodules"
 function CartItem(props) {
    // let {prod} = props;
    let {upNumber , downNumber ,deleteItems} = props
    let prod = {...props.prod};
    // let [quantity , setQuantity] = useState(prod.quantity)
    let totalPrice = prod.quantity * prod.price ;
    // const handlePrice = (event)=>{
    //     setQuantity(event.target.value)
    //     console.log(event.target.value)
    // }
    return (
        <>
            <div className='mt-[20px]'>
            <table class="table-auto w-full mb-3">
           
            <tbody className=''>
                <tr className='row '>
                    <div className='text-center col-sm-6 flex '>
                        <button className=' pt-1 mb-auto' onClick={() => deleteItems(prod.id)}>
                            <FontAwesomeIcon icon={faDeleteLeft} className="text-[20px]"/>
                        </button>
                        <td className='w-[20%]'>
                             <img className='w-full' src={prod.image} alt="" />
                        </td>
                        <td className='w-[70%] mt-2 text-left ml-3 my-auto'>{prod.title}</td>
                    </div>
                    <td className='text-center col-sm-2 mt-2 font-[600]'>{prod.price} đ</td>
                    <td className='text-center col-sm-2 mt-2 font-[600]'>
                        <div className="flex justify-between">  
                            <button onClick={() => downNumber(prod)} >
                                <FontAwesomeIcon icon={faMinus}/>
                            </button>
                            <p className="quantity-text">Qty: {prod.quantity}</p>
                            <button onClick={() => upNumber(prod)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>

                    </td>
                    <td className='text-center col-sm-2 mt-2 font-[600]'>{totalPrice} đ</td>
                </tr>
              
            </tbody>
            </table>
        </div>
        </>
    );
 }
 const mapStateToProps = (state) => ({
    cart : state.cart
 });
const mapDispatchToProps = {upNumber , deleteItems, downNumber};
 export default connect(mapStateToProps , mapDispatchToProps) (CartItem);