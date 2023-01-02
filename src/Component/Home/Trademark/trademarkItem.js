import { faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, ButtonGroup, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import "./trademark.scss"
import { Image } from '@material-ui/icons';
import '@fontsource/roboto/400.css';
import { toggleCart , addToCart } from '../../../Reduxmodules';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function TrademarkItem(props) {
    const theme = useTheme();
    const [open , setOPen] = useState(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    let {item} = props
    const handleOpen = () =>{
        setOPen(true);
    }
    const handleClose = () =>{
        setOPen(false);
    }
    let {toggleCart , addToCart} = props;
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
                                    <button className='link_voucher border-[1px]  border-[#d88821] px-[10px] py-1 rounded-[22px] ' onClick={handleOpen}>Xem thêm
                                         <FontAwesomeIcon icon={faChevronRight} className="px-1"/>
                                    </button>
                            </div>

                        </div>    
            </div>  

                    <Box fullWidth>
                       
                        <Dialog 
                            maxWidth = "lg"
                            open={open}
                            fullScreen = {fullScreen}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            fullWidth
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <Box >
                                    <DialogTitle id="alert-dialog-title">
                                        <Button onClick={handleClose}>
                                           <FontAwesomeIcon icon={faClose} />
                                        </Button>
                                    </DialogTitle>
                                    <DialogContentText id="alert-dialog-description"  display="flex" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                                       
                                        
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={5}>
                                            <Grid item md={6}>
                                                <Box>
                                                <img src={item.image} alt="" />
                                                </Box>
                                            </Grid>
                                            <Grid item md={6}>
                                                <h6 className='text-[24px] text-[#000] py-3'>
                                                    {item.title}
                                                </h6>
                                                <p className='font-[200] text-[16px] leading-[2] text-[#333]'>
                                                <b>
                                                    {item.detailinfor}
                                                    </b>
                                                    {item.additioninfor}
                                                </p>
                                                <div className='flex'>
                                                    <div className='flex'>
                                                        <h6 className='  px-3  py-2 bg-[#ccc]'>Số lượng </h6>
                                                        <input className='px-3 py-2 bg-[#ccc] bg-[#ccc]  ml-[10px]  outline-none border-r-none px-auto' type="number" id="tentacles" name="tentacles" min="1" max="100" placeholder="01"/>
                                                    </div>
                                                    
                                                    <button className='  px-3  py-2 bg-[#ccc] mx-3'>
                                                       <Link className='hover:no-underline hover:border-none  hover:text-[#d88821]'> Mua ngay</Link>
                                                    </button>

                                                    <button className='bg-[#ccc] '  onClick={()=>{addToCart(item)}}>
                                                        <Link to="/cart" className='hover:no-underline bg-[#ccc] px-3  py-2 hover:border-none  hover:text-[#d88821]'>Thêm vào giỏ hàng</Link>
                                                    </button>

                                              </div>
                                            </Grid>
                                        </Grid>
                                     </Box>
                                    </DialogContentText>                                               
                                </Box>
                            </DialogContent>
                        </Dialog>
                    </Box>
        </>
    );
}
const mapDispatchToProps = {toggleCart , addToCart}
export default connect(null , mapDispatchToProps) (TrademarkItem);