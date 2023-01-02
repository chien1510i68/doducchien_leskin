import React from 'react';
import { connect } from 'react-redux';
import TrademarkItem from '../Home/Trademark/trademarkItem';
function IntroduceProduct(props) {
    let {ListIntroProd} = props
    return (
       <>
             <div className='mt-[50px] px-[100px]'>
                <h1 className='text-[#d88821] text-[24px]  w-[100px] font-[500] pb-[50px] text-left uppercase ml-3 border-t-[5px] pt-2 border-[#d88821] border-solid'>ưu đãi </h1>
                <div className="row">
                    {
                        ListIntroProd.map(item=>
                            <div className="product_item col-md-4 col-sm-6">
                            <TrademarkItem item = {item} key={item.id} />
                            </div>
                        )
                    }
                </div>
        </div>
       </>
    );
}
const mapStateToProps = (state) => ({
    ListIntroProd : state.ListIntroProd
})
export default connect(mapStateToProps)(IntroduceProduct);