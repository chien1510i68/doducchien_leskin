import React from 'react';
import { connect } from 'react-redux';
import IntroItem from './IntroItem';

function IntroList(props) {
    let {Intro} = props
    return (
       <>

         <div className='row justify-between  mt-[50px] mx-auto'>
           {
                Intro.map(item => 
                    <IntroItem item={item} key={item.id}/>    
                )
            }
           </div>
            
       </>
    );
}
const mapStateToProps = (state) =>({
    Intro : state.Intro
})
export default connect(mapStateToProps)(IntroList);