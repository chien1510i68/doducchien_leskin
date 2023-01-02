import React from 'react';
import Banner from '../Component/Home/Banner';
import IntroList from '../Component/Home/Intro/IntroList';
import TrademarkList from '../Component/Home/Trademark/trademarkList';
import VoucherList from '../Component/Home/Voucher/VoucherList';

function Home(props) {
    return (
        <div>
            <>

               <Banner/>
               <div className='px-[100px]'>
                <IntroList/>
                <VoucherList/>
                <TrademarkList/>
               </div>
            </>
        </div>
    );
}

export default Home;