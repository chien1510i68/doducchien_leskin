import React from 'react';
import { connect } from 'react-redux';
import ServiceItem from '../../Service/ServiceItem';
import TrademarkItem from './trademarkItem';

function TrademarkList(props) {
    let {Trademark} = props;
    return (
        <>
            <div className='pt-[50px] '>
                    <h1 className='text-[#d88821] text-[24px]  w-[350px] font-[500] pb-[50px] text-left uppercase ml-3 border-t-[5px] pt-2 border-[#d88821] border-solid'>chọn theo thương hiệu</h1>

                    <div className='row '>
                    {
                        Trademark.map(item =>
                            <div className="product_item col-md-4 col-sm-6">
                             {/* <TrademarkItem  item = {item}/>     */}
                             {/* <ServiceItem/> */}
                             <ServiceItem item={item}/>
                            </div>
                        )
                    }
                    </div>
                    <button className='px-5 mb-6 py-[8px] rounded-[18px] bg-[#d88821] text-[#fff]' >Xem thêm</button>

            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    Trademark : state.Trademark
})
export default connect(mapStateToProps) (TrademarkList);