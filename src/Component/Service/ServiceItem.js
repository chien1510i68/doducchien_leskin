import { faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, ButtonGroup, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import "./trademark.scss"
import { Image } from '@material-ui/icons';
import '@fontsource/roboto/400.css';
// import { toggleCart , addToCart } from '../../../Reduxmodules';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function ServiceItem(props) {
    const theme = useTheme();
    const [open , setOPen] = useState(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    let {item} = props
  
    return (
        
        <>
                <div className='mx-3 shadow-lg mb-5 sub_item bg-[#fff]'>

                        <div className="product_image h-[280px]">
                            <div className=' h-[220px]'>
                                 <img className=" w-full h-full object-cover product_image-img" src={item.image} alt=""/>
                            </div>
                            <div className="product_logo">
                                <img src={item.logo} alt=""/>
                            </div>
                        </div>

                        <div className="product_infor">
                            <h6 className='font-[500]'>{item.title}</h6>
                            <div className="product_time">
                                <p>05/07/21- 31/08/19</p>
                                   <Link to={`/service/${item.id}`} className='bg-[#dd8f22] hover:no-underline text-[#fff] hover:text-zinc-500 hover:opacity-[.6] px-3 py-2 rounded-[15px]'>Xem thêm</Link>
                            </div>

                        </div>    
            </div>  

                   
        </>
    );
}
// const mapDispatchToProps = {toggleCart , addToCart}
export default ServiceItem;