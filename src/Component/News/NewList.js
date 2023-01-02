import React from 'react';
import { connect } from 'react-redux';
import NewItem from './NewItem';

function NewList(props) {
    let {Newdata} = props;
    return (
       <>
        <div className='row px-[100px]'>
            {
                Newdata.map(item =>
                    <NewItem item={item}/>    
                )
            }
        </div>
       </>
    );
}
const mapStateToProps = (state) => ({
    Newdata : state.Newdata
})
export default connect(mapStateToProps)(NewList);