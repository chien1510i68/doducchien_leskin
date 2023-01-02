import React from 'react';
import { connect } from 'react-redux';

function InforDetail(props) {
    let{item} = props
    return (
        <div>
                <div class="new_information px-3 ">
                    <div class="new_information-title">

                        <h3><a href="#"> THÔNG TIN CHI TIẾT</a></h3>
                        <h3><a href=""> ĐÁNH GIÁ</a></h3>
                    </div>
                    <p className='text-left'>
                        {item.detailinfor}
                    </p>
                    <img src={item.image} className='w-full py-5' alt=""/>
                    <p className='text-left'>
                        {item.additioninfor}
                    </p>
                    <h6 className='text-left font-bold mt-4'> Quy trình dịch vụ </h6>
                    <ul className='text-left'>
                        <li className='list-disc'>Bước 1 : Tẩy trang </li>
                        <li className='list-disc'>Bước 2 : Rửa mặt</li>
                        <li className='list-disc'>Bước 3 : Tẩy da chết </li>
                        <li className='list-disc'>Bước 4 : Hút dầu </li>
                        <li className='list-disc'>Bước 5 : Xông hơi , nặn mụn </li>
                        <li className='list-disc'>Bước 6 : Điều trị mụn bằng tinh chất Acnegen</li>
                        <li className='list-disc'>Bước 7 : Đắp mặt nạ thải độc và kháng viêm</li>
                        <li className='list-disc'>Bước 8 : Thoa kem chống nắng </li>
                    </ul>
                    <p className='text-left'>
                        {item.additioninfor}
                    </p>
                    <div class="evaluate animate__animated animate__backInLeft wow">
                        <h3>BÌNH LUẬN TRÊN FACEBOOK</h3>
                        <div class="comment">
                            <h6>0 bình luận </h6>
                            <div>
                                <span>Sắp xếp theo</span>
                                <select id="select">
                                    <option value="new">Mới nhất</option>
                                    <option value="old">Cũ hơn</option>
                                </select>
                            </div>
                        </div>
                        <div class="comment_add">
                            <img src="https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt=""/>
                            <input type="text" placeholder="Thêm bình luận "/>
                        </div>
                    </div>
                </div>
                
            
        </div>
    );
}
const mapStateToProps = (state) => ({
    DetailProduct : state.DetailProduct
})
export default  connect(mapStateToProps)(InforDetail);