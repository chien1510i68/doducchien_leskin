import React from 'react';
import { connect } from 'react-redux';
import ServiceItem from '../Component/Service/ServiceItem';

function Dichvu(props) {
    let {Trademark} = props
    return (
        <div>
                    <h1 className='text-[#d88821] text-[24px]   w-[350px] font-[500] pb-[50px] text-left uppercase ml-[100px] mt-[100px] border-t-[5px] pt-2 border-[#d88821] border-solid'>dịch vụ của chúng tôi </h1>
           <div className='row mx-[100px] '>
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
        </div>
    );
}
const mapStateToProps = (state) => ({
    Trademark : state.Trademark
})
export default  connect(mapStateToProps)(Dichvu);