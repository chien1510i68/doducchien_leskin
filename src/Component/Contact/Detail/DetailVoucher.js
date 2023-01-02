import React from 'react';
import { connect } from 'react-redux';
import TrademarkItem from '../../Home/Trademark/trademarkItem';

function DetailVoucher(props) {
    let {DetailTrademark} = props
    return (
        <div>
            {
                DetailTrademark.map(item =>
                    <TrademarkItem  item = {item}/>    
                    )
            }
            
        </div>
    );
}
const mapStateToProps = (state) =>({
    DetailTrademark : state.DetailTrademark
})
export default connect(mapStateToProps)(DetailVoucher);