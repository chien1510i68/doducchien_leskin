import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import VoucherItem from "../Home/Voucher/VoucherItem"
import {pushCalendar } from "../../Reduxmodules"
import calendarArr from "../../Reduxmodules"
import {useForm} from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment/moment';

function DatlichUI(props) {
    let {Vouchers , pushCalendar} = props 
    const [startDate, setStartDate] = useState(new Date());
    // const [data , setData] = useState(data);
    

    let {register , handleSubmit ,reset} = useForm();
    
    const submitData = (data ) =>{
        data.startDate = moment(data.startDate).format('YYYY-MM-DD')+"T01:00:00.000Z";
        pushCalendar(data)
        // alert(data.hoten)
        console.log(data  )        
    }
    // console.log(calendarArr)
    useEffect(() =>{
        reset({})
    } , [])
    const [value, setValue] = React.useState(null);
    return (
       <>
       
           <div className="row mx-[100px] pt-[100px]">
            <div className='col-md-8 bg-[#5e5a5ac7] mb-5 h-[90vh]'>
                  <div className=''>

                  <h1 className='font-[700] text-[24px] uppercase text-center text-[#db9e50] mt-3'>Đặt  lịch ngay hôm nay  </h1>
                    <form onSubmit={handleSubmit(submitData)} className="px-[100px]">
                            <div className="mt-[10px]">
                                <label className="pt-2 pl-2 text-[#fff]" htmlFor="name">Họ và tên : </label>
                                <div className=" w-full">
                                    <input {...register('text')} type="text" placeholder='Nhập vào họ tên của bạn ' className="form-control w-full" />
                                </div>
                            </div>
                         
                            <div className="mt-[10px]">
                               
                               {/* <label className="pt-2 pl-2 text-[#fff]" htmlFor="date">Nhập vào ngày </label>
                                <div className=''>
                                <DatePicker 
                                    {...register('date')}
                                    className='w-full pl-3 py-2 outline-none border-[1px] border-solid border-red form-control'
                                    selected={startDate} 
                                    onChange={date => setStartDate(date)} 
                                    showTimeSelect
                                    htmlFor="date"
                                    innerRef={register}
                                    name="datetime"
                                    dateFormat="Pp"
                                    minDate={new Date()}
                                />             
                                </div> */}
                                 <label className="pt-2 pl-2 text-[#fff]" htmlFor="date">Ngày đặt lịch </label>
                                <div className=" w-full">
                                    <input {...register('startDate')} type="date" placeholder='Nhập vào ngày ' min={new(Date)} className="form-control w-full" />
                                </div>

                            </div>
                           
                            <div className="mt-[10px]">
                                <label className="pt-2 pl-2 text-[#fff]" htmlFor="name">Số điện thoại : </label>
                                <div className="w-full">
                                    <input {...register('sodienthoai')} type="text" placeholder='Nhập vào số điện thoại của bạn ' className="form-control" />
                                </div>
                            </div>
                            <div className="mt-[10px]">
                                <label className="pt-2 pl-2 text-[#fff]" htmlFor="name">Số người </label>
                                <div className="w-full">
                                    <input {...register('songuoi')} type="text" placeholder='Số lượng người  ' className="form-control" />
                                </div>
                            </div>
                            <div className="mt-[10px]">
                                <label  className="pt-2 pl-2 text-[#fff]" htmlFor="priority"> </label>
                                <div className="w-full">
                                <input {...register('priority')} type="number" placeholder='priority  ' className="form-control" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="bg-[#d88821] px-6 font-[500] text-[#fff] rounded-[5px] mx-auto py-2">Submit</button>
                            </div>
                    </form>
                  </div>

                </div>
                <div className='col-md-4'>
               {
                    Vouchers.map(item => 
                        <VoucherItem item={item} key={item.id}/>  
                        )
               }
                </div>
           </div>
       </>
    );
}
const mapStateToProps = (state) => ({
    Vouchers : state.Vouchers,
    calendar : state.calendar
})
const mapDispatchToProps = {pushCalendar};
export default connect(mapStateToProps , mapDispatchToProps)(DatlichUI);
