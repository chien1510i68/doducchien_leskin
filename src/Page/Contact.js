import { faChevronRight, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Detail from "../Component/Contact/Detail/detail";
import DetailVoucher from "../Component/Contact/Detail/DetailVoucher";
import InforDetail from "../Component/Contact/Detail/Infor";
import TrademarkList from "../Component/Home/Trademark/trademarkList";
import VoucherItem from "../Component/Home/Voucher/VoucherItem";
import VoucherList from "../Component/Home/Voucher/VoucherList";
import { DetailProduct } from "../Reduxmodules";
import { useParams } from "react-router-dom";

function Contact(props) {
  let { DetailProducts, Trademark, Vouchers } = props;
  let { id } = useParams();
  console.log(id);
  let checkid = Trademark.find((x) => x.id == id);

  console.log(checkid);
  return (
    <>
      {checkid && (
        <div>
          <div className="px-[100px] bg-[#f2f2f2] pt-[50px] pt-[80px]">
            <div class="flex items-center pb-4 ">
              <Link to="/" className="hover:text-[#d88821] hover:no-underline">
                Trang chủ
              </Link>
              <FontAwesomeIcon className="mx-3" icon={faChevronRight} />
              <Link
                to="/service"
                className="hover:text-[#d88821] hover:no-underline"
              >
                Dịch vụ
              </Link>
              <FontAwesomeIcon className="mx-3" icon={faChevronRight} />
              <h3>Chi tiết dịch vụ </h3>
            </div>

            <Detail item={checkid} />
            <div className="row">
              <div className="col-md-8 ">
                <InforDetail item={checkid} />
              </div>
              <div className="col-md-4 mt-[30px]">
                {Vouchers.map((item) => (
                  <div className="   w-[100%] box-border pb-4 px-0">
                    <VoucherItem item={item} key={item.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  DetailProducts: state.DetailProduct,
  Vouchers: state.Vouchers,
  Trademark: state.Trademark,
});
export default connect(mapStateToProps)(Contact);
