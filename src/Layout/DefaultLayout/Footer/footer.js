import "./footer.scss"
const Footer = () => {
    return (
        <>
        <div>
            <ul className="flex justify-around row mx-[50px] my-[40px]">
               <div className="w-[80px] h-[50px] col-md-2 col-sm-4 my-3">

               <img className="  object-contain" src="https://leskin.com.vn/Uploads/news/download1.webp?v10" alt="" />
               </div>

               <div className="w-[80px] h-[50px] col-md-2 col-sm-4 my-3">

               <img className=" w-full h-full  object-contain" src="https://leskin.com.vn/Uploads/news/Capture-Copy-2.webp?v10"alt="" />
               </div>

               <div className="w-[80px] h-[50px] col-md-2 col-sm-4 my-3">

               <img className=" w-full h-full  object-contain" src="https://leskin.com.vn/Uploads/news/Capture-Copy-3.webp?v10" alt="" />
               </div>

               <div className="w-[80px] h-[50px] col-md-2 col-sm-4 my-3">

               <img className=" w-full h-full  object-contain" src="https://leskin.com.vn/Uploads/images/lancome-logo-cut.webp?v10" alt="" />
               </div>

               <div className="w-[80px] h-[50px] col-md-2 col-sm-4 my-3">

               <img className="  w-full h-full  object-contain" src="https://leskin.com.vn/Uploads/images/cut.webp?v10" alt="" />
               </div>

               <div className="w-[80px] h-[50px] col-md-2 col-sm-4 my-3">

               <img className=" w-full h-full object-contain" src="https://leskin.com.vn/Uploads/images/partner-1.webp?v10" alt="" />
               </div>

            </ul>
        </div>
       <div className="footer">
       <div className="row w-full">
            <div className="footer-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-title">
                    <h3 className="uppercase">liên hệ </h3>
                </div>
                <ul>
                    <li><a href="#">
                            <i className="fa-solid fa-location-dot"></i>
                            58 Tố Hữu, Thanh Xuân, Hà Nội
                        </a></li>
                    <li><a href="#">
                            <i className="fa-solid fa-phone"></i>
                            (024).3783.5639
                        </a></li>
                    <li><a href="#">
                            <i className="fa-regular fa-envelope"></i>
                            info@adcvietnam.net

                        </a></li>
                    <li><a href="#">
                            <i className="fa-solid fa-globe"></i>
                            www.adcvietnam.net
                        </a></li>
                </ul>
            </div>
            <div className="footer-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-title">
                    <h3 classNamename="uppercase">về leskin </h3>
                </div>
                <ul>
                    <li><a href="#">
                            Về chúng tôi
                        </a></li>
                    <li><a href="#">
                            Sứ mệnh
                        </a></li>
                    <li><a href="#">
                            Tăng trưởng
                        </a></li>
                    <li><a href="#">
                            Quan hệ cổ đông
                        </a></li>
                </ul>
            </div>
            <div className="footer-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-title">
                    <h3 classNamename="uppercase">
                        Tải app ngay
                    </h3>
                </div>
                <div className="app">
                    <img className="app-img" src="https://leskin.com.vn/html/destop/img/app-android.webp?v10" alt=""/>
                    <img className="app-img" src="https://leskin.com.vn/html/destop/img/app-ios.webp?v10" alt=""/>

                </div>
            </div>
            <div className="footer-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-title">
                    <h3 classNamename="uppercase">Newletter</h3>
                </div>
                <li><a href="">Đăng kí để nhận ưu đãi hàng tháng</a></li>
                <form action="">
                    <input type="text" placeholder="Nhập email"/>
                    <button type="submit"> <i className="fa-regular fa-paper-plane"></i> </button>
                </form>
                <img className="social-img" src="/image/Layer 173.png" alt=""/>
            </div>

          </div>
       </div>
        </>
      );
}
 
export default Footer;