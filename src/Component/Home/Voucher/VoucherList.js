import React from 'react';
import { connect } from 'react-redux';
import VoucherItem from './VoucherItem';
import Slider from "react-slick";
function VoucherList(props) {
    let {Vouchers} = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        
        <>
            <div className=' py-[50px]  bg-[#f2f2f2]'>
                <h1 className='text-[#d88821] text-[24px] w-[200px] font-[500] pb-[50px] text-left uppercase ml-3 border-t-[5px] pt-2 border-[#d88821] border-solid'>ưu đãi hot</h1>

                {/* <Slider {...settings}> */}

                <div className='row '>
                {
                        Vouchers.map(item =>
                            <div className="col-md-4   w-[90%] box-border pb-4 px-0">
                              <VoucherItem item={item} key={item.id}/>    
                            </div>
                        
                        )
                    }
                </div>
                
                
                {/* </Slider> */}
            </div>
        </>
    );
}
    const mapStateToProps = (state) => ({
        Vouchers : state.Vouchers

    })

export default connect(mapStateToProps)(VoucherList);