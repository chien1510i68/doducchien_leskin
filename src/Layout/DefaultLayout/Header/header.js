import { faCartArrowDown, faClose, faHomeUser, faLock, faNavicon, faPhone, faPhoneAlt, faSearch, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart , toggleMenu , isDisplayMenu} from "../../../Reduxmodules";
import "./header.scss"
const Header = (props) => {
    let {toggleMenu , isDisplayMenu} = props;
    const [openLoggin, setOpenLoggin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    const handleClickOpenLoggin = () => {
        setOpenLoggin(true);
    };
  
    const handleCloseLoggin = () => {
        setOpenLoggin(false);
    };

    const handleClickOpenRegister = () => {
        setOpenRegister(true);
    };
  
    const handleCloseRegister = () => {
        setOpenRegister(false);
    };
  
    return (
        <>
        <header className="flex items-center justify-around py-4  border-b-[4px] border-[#dd8f22] border-solid ">


                <button class="icon-menu lg:hidden " onClick = {()=>{toggleMenu(true)}}>
                    <FontAwesomeIcon icon={faNavicon}/>
                </button>
                <div className="lg:hidden">
                <img className="w-[70px]" src="https://leskin.com.vn/Uploads/images/logo.webp?v10" alt=""/>

                </div>
               
           {
                isDisplayMenu &&
                <div class="show_nav pt-2 ">
                <div class="d-flex justify-between items-center">
    
                     <img className="w-[70px]" src="https://leskin.com.vn/Uploads/images/logo.webp?v10" alt=""/>
                    <button class="flex" onClick={()=>{toggleMenu(false)}}>
                        <FontAwesomeIcon className="text-[24px]" icon={faClose}/>
    
                    </button>
                  
                </div>
                <div className="flex w-full bg-[#fff] px-[14px] py-1 items-center rounded-[3px] mt-5">
                    <input type="text" placeholder="Tim kiem " className="w-[95%] outline-none"                  />
                    <button className="cursor-pointer">
                    <FontAwesomeIcon icon={faSearch} className="w-5% cursor-point"/>

                    </button>
                </div>
                <div class="show_nav-menu mt-2 ">
                <ul className=" ">
                            <li className=" p-1 hover:opacity-[0.6] ">
                            <Link className=" font-[400] no-underline text-5 text w-[full] " to="/">         
                               Trang chủ
                            </Link>
                            </li>
                            <li className=" p-1 hover:opacity-[0.6] ">
                            <Link className=" font-[400] no-underline text-5 text w-[full] " to="/service">    
                                Dịch vụ 
                            </Link>
                            </li>
                            <li className=" p-1 hover:opacity-[0.6] ">
                            <Link className=" font-[400] no-underline text-5 text w-[full] " to="/product">   
                                Sản phẩm 
                            </Link>
                            </li>
                            <li className=" p-1 hover:opacity-[0.6] ">
                            <Link className=" font-[400] no-underline text-5 text w-[full] " to="/new">      
                                  Tin tức
                            </Link>
                            </li>
                            <li className=" p-1 hover:opacity-[0.6] ">
                            <Link className=" font-[400] no-underline text-5 text w-[full] " to="/contact">          
                                  Liên hệ
                            </Link>
                            </li>
                        </ul>
                </div>
                <div class="show_nav-login">
                    <button type="button " className="mr-1" > đăng kí</button>
                    <button type="button"> đăng nhập</button>
                </div>
              </div>

           }
        <div className="row  lg:w-full md:w-auto items-center ">
            <div class="w-[75px] h-[75px col-md-1 md:hidden sm:hidden xs:hidden">
                <a href="">
                    <img className="w-full" src="https://leskin.com.vn/Uploads/images/logo.webp?v10" alt=""/>
                </a>

            </div>
            <div class="search_header flex items-center col-md-3  md:hidden sm:hidden xs:hidden">
            <div className="flex w-full input-header bg-[#fff] px-[14px] py-1 items-center rounded-[30px] ">
                    <input type="text" placeholder="Tim kiem " className="w-[95%] outline-none"                  />
                    <FontAwesomeIcon icon={faSearch} className="w-5%"/>
            </div>
            </div>
            <div class="menu col-md-5 md:hidden sm:hidden xs:hidden  ">
                <nav>
                    <ul className="flex justify-center ">
                        <li className="mx-2 p-1">
                        <Link className="no-underline text-[18px] text link_header" to="/">         
                           Trang chủ
                        </Link>
                        </li>
                        <li className="mx-2 p-1">
                                <i class=""></i>
                        
                        <Link className="no-underline text-[18px] text link_header" to="/service">      Dịch vụ
                        </Link>
                        </li>
                        <li className="mx-2 p-1">
                                <i class=""></i>
                        
                        <Link className="no-underline text-[18px] text link_header" to="/product">       Sản Phẩm 
                        </Link>
                        </li>
                        <li className="mx-2 p-1">
                                <i class=""></i>
                        
                        <Link className="no-underline text-[18px] text link_header" to="/new">            Tin tức
                        </Link>
                        </li>
                        <li className="mx-2 p-1">
                                <i class=""></i>
                        
                        <Link className="no-underline text-[18px] text link_header" to="/contact">            Liên hệ
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <div class="col-md-2 ">
                <i class="fa-regular fa-user"></i>
                <select id="cars" className="bg-transparent">
                    <option value="Username">User name</option>
                    <option value="DoChien">Do Chien</option>
                    <option value="NguyenA">Nguyen Van A</option>
                </select>
            </div> */}
            <div className="col-md-3 justify-end items-center flex">
                <Link to="/cart" className="hover:cursor-pointer" >
                    <FontAwesomeIcon icon={faCartArrowDown}  className="text-[28px] hover:cursor-pointer text-[#d88821]"/>
                </Link>
                    <button 
                    onClick={handleClickOpenLoggin}
                    className="border-[1px] rounded-[50%] border-solid hover:cursor-pointer border-[#d88821] w-10 h-10 hover:bg-[#d88821] hover:text-[#fff] mx-4">
                        <FontAwesomeIcon className="text-[#d88821] hover:text-[#fff]" icon={faUser}/>
                    </button>
                    <button onClick={handleClickOpenRegister} className="border-[1px] rounded-[50%] border-solid hover:cursor-pointer border-[#d88821] w-10 h-10 hover:bg-[#d88821] hover:text-[#fff]">
                        <FontAwesomeIcon className="text-[#d88821] hover:text-[#fff]" icon={faUserPlus}/>

                    </button>
            </div>
        </div>


        <Dialog
                // fullWidth="sm"
                open={openLoggin}
                onClose={handleCloseLoggin}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
        >
           
           
            <DialogContent className="loggin h-[400px] w-[350px]">
                <FontAwesomeIcon icon={faClose} className="absolute right-[10px] text-[25px] text-[#333] cursor-pointer" onClick={handleCloseLoggin}/>
                <div className="w-[35%] mx-auto" >
                    <img className="w-[100%]" src="https://leskin.com.vn/Uploads/images/logo.webp?v10" alt=""/>
                </div>
                <div className="flex w-full bg-[#fff] px-[14px] py-[6px] rounded-[20px] 
                    border-[1px] border-solid 
                    items-center rounded-[3px] mt-5">
                    <FontAwesomeIcon icon={faPhone} className="w-5% cursor-point font-[200] text-[#dd8f22] pr-2"/>
                    <button className="cursor-pointer">

                    <input type="text" placeholder=" Điện thoại  " className="w-[95%] outline-none"                  />
                    </button>
                </div>
                <div className="flex w-full bg-[#fff] px-[14px] py-[6px] rounded-[20px] 
                    border-[1px] border-solid 
                    items-center rounded-[3px] mt-2">
                    <FontAwesomeIcon icon={faLock} className="w-5% cursor-point font-[200] text-[#dd8f22] pr-2"/>
                    <button className="cursor-pointer">

                    <input type="text" placeholder="Mật khẩu  " className="w-[95%] outline-none"                  />
                    </button>
                </div>
                <div className="flex w-full bg-[#dd8f22] hover:opacity-[0.6] px-[14px] py-[6px] rounded-[20px] 
                    border-[1px] border-solid 
                    items-center rounded-[3px] mt-5">
                    <button className="text-center block m-auto text-[#fff] font-[700] uppercase text-[18px]">
                        Đăng nhập 
                    </button>
                </div>
                <Link className="text-right block mt-2 mr-2 hover:no-underline">Quên mật khẩu</Link>
            </DialogContent>
      </Dialog>
      <Dialog
                // fullWidth="sm"
                open={openRegister}
                onClose={handleCloseRegister}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
        >
           
           
            <DialogContent className="loggin h-[400px] w-[350px]">
                <FontAwesomeIcon icon={faClose} className="absolute right-[10px] text-[25px] text-[#333] cursor-pointer" onClick={handleCloseRegister}/>
                <div className="w-[35%] mx-auto" >
                    <img className="w-[100%]" src="https://leskin.com.vn/Uploads/images/logo.webp?v10" alt=""/>
                </div>
                <div className="flex w-full bg-[#fff] px-[14px] py-[6px] rounded-[20px] 
                    border-[1px] border-solid 
                    items-center rounded-[3px] mt-5">
                    <FontAwesomeIcon icon={faPhone} className="w-5% cursor-point font-[200] text-[#dd8f22] pr-2"/>
                    <button className="cursor-pointer">

                    <input type="text" placeholder=" Điện thoại  " className="w-[95%] outline-none"                  />
                    </button>
                </div>
                <div className="flex w-full bg-[#fff] px-[14px] py-[6px] rounded-[20px] 
                    border-[1px] border-solid 
                    items-center rounded-[3px] mt-2">
                    <FontAwesomeIcon icon={faLock} className="w-5% cursor-point font-[200] text-[#dd8f22] pr-2"/>
                    <button className="cursor-pointer">

                    <input type="text" placeholder="Mã Allfiliate" className="w-[95%] outline-none"                  />
                    </button>
                </div>
                <div className="flex w-full bg-[#dd8f22] hover:opacity-[0.6] px-[14px] py-[6px] rounded-[20px] 
                    border-[1px] border-solid 
                    items-center rounded-[3px] mt-5">
                    <button className="text-center block m-auto text-[#fff] font-[700] uppercase text-[18px]">
                        Đăng kí
                    </button>
                </div>
                {/* <Link className="text-right block mt-2 mr-2 hover:no-underline">Quên mật khẩu</Link> */}
            </DialogContent>
      </Dialog>

        </header>
        </>
      );
}
const mapStateToProps = (state) => ({
    isDisplayMenu : state.isDisplayMenu,
})
const mapDispatchToProps = {toggleCart , toggleMenu}
export default connect(mapStateToProps , mapDispatchToProps) (Header);