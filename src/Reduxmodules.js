import { CalendarToday } from "@material-ui/icons";
import { DATA_STORAGE } from "./constants/localStorage";

const intro = [
    {
        id: 1,
        icon : "faGift",
      text: "hoàn tiền tới 15% vào ví  ",
    },
    {
      id: 2,
      icon : "faPhone",
      text: "50+ ưu đãi mỗi tháng",
    },
    {
      id: 3,
      icon : "faLaptop",
      text: "đặt dịch vụ nhanh chóng",
    },
    {
      id: 4,
      icon : "faStar",
      text: "hơn 22 thương hiệu",
    },
    {
      id: 5,
      icon : "faPersonDress",
      text: "Hơn 3000+ spa làm đẹp",
    },
    {
      id: 6,
      icon : "faHandshake",
      text: "Hơn  2050+  đối tác",
    },
    {
      id: 7,
      icon : "faUsersLine",
      text: "hơn 1200+ khách hàng",
    },
    {
      id: 8,
      icon : "faMapLocation",
      text: "hơn 25 thành phố",
    }
]


const voucher = [
  {
    id : 1,
    image : "https://leskin.com.vn/Uploads/news/Tre_hoa_da.jpg",
    title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy  nhất",
    date : "05/07/21- 31/08/22"
  },
  {
    id:2,
    image : "https://leskin.com.vn/Uploads/client2/sdvdfb.jpg",
    title : "Trẻ hóa da bằng than hoạt tính và mặt nạ nâng cơ",
    date : "05/07/21- 31/08/19"
  }, 
  {
    id:3,
    image : "https://leskin.com.vn/Uploads/client2/dien_di_c.jpg",
    title : "Trẻ hóa da bằng điện di vitamin C + Hyaluronic Acid",
    date : "05/07/21- 31/08/19"
  }, 
  {
    id:4,
    image : "https://leskin.com.vn/Uploads/news/Tre_hoa_da.jpg",
    title : "Trẻ hóa da bằng lăn kim tế bào gốc",
    date : "05/07/21- 31/08/19"
  },
  {
    id:5,
    image : "https://leskin.com.vn/Uploads/news/Tre_hoa_da.jpg",
    title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy  nhất",
    date : "05/07/21- 31/08/19"
  },
  {
    id:6,
    image : "https://leskin.com.vn/Uploads/client2/sdvdfb.jpg",
    title : "Trẻ hóa da bằng than hoạt tính và mặt nạ nâng cơ",
    date : "05/07/21- 31/08/19"
  }, 
]

    const trademark = [
          {
            id : 1 ,
            image: "https://leskin.com.vn/Uploads/news/hieu-qua-tri-cham-bot-700x393.jpg",
            logo: "https://leskin.com.vn/Uploads/news/download1.webp?v10",
            price : 100,
            detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
            quantity : 1 ,
            additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
            title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",
            price : 5000,
            description : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",
            



          },
          {
            image : "https://leskin.com.vn/Uploads/client2/dien_di_c.jpg",
            logo : "https://leskin.com.vn/Uploads/images/partner-1.webp?v10",
            price : 100,
            detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
            quantity : 1 ,
            additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
            title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",
            id : 2
            
          },
          {
            image : "https://leskin.com.vn/Uploads/images/tratamiento-facial.jpg",
            logo :"https://leskin.com.vn/Uploads/news/Capture-Copy-3.webp?v10",
            price : 100,
            detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
            quantity : 1 ,
            additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
            title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",
            id : 30
            
          },
          {
            image : "https://leskin.com.vn/Uploads/news/img20170417165236147.jpg",
            logo :"https://leskin.com.vn/Uploads/images/lancome-logo-cut.webp?v10",
            price : 100,
            detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
            quantity : 1 ,
            additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
              title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",
            id : 31,
            
          },
          {
            image : "https://leskin.com.vn/Uploads/images/tre-hoa-da-mat.jpg",
            logo :"https://leskin.com.vn/Uploads/images/cut.webp?v10",
            price : 100,
            detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
            quantity : 1 ,
            additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
            title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",
            id : 32,
            
          },
          {
            image : "https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
            logo :"https://leskin.com.vn/Uploads/images/cut.webp?v10",
            price : 100,
            detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
            quantity : 1 ,
            additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
            title : "Xóa nhăn vùng mắt , trán , cau mày 1 lần duy nhất",

            id : 33,
          }
    ]

const detailProduct=[
  {
    id : 1,
    primaryimage : "https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_1 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg", 
    subimage_2 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_3 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_4 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_5 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    nameproduct : "Trị Mụn Mỹ Phẩm Maystar - Tây Ban Nha Cam Kết Hiệu Quả Tại Nuci Spa & Academy",
    trademark : "NUCI SPA & ACADEMY",
    price : "600.000",
    // step : 
    time : "05/07/19 -31/08/19",
    detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
    additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
  
  },
  {
    id : 2,
    primaryimage : "https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_1 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg", 
    subimage_2 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_3 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_4 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_5 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    nameproduct : "Trị Mụn Mỹ Phẩm Maystar - Tây Ban Nha Cam Kết Hiệu Quả Tại Nuci Spa & Academy",
    trademark : "NUCI SPA & ACADEMY",
    price : "600.000",
    // step : 
    time : "05/07/19 -31/08/19",
    detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
    additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
  
  },
  {
    id : 3,
    primaryimage : "https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_1 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg", 
    subimage_2 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_3 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_4 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_5 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    nameproduct : "Trị Mụn Mỹ Phẩm Maystar - Tây Ban Nha Cam Kết Hiệu Quả Tại Nuci Spa & Academy",
    trademark : "NUCI SPA & ACADEMY",
    price : "600.000",
    // step : 
    time : "05/07/19 -31/08/19",
    detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
    additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
  
  },
  {
    id : 4,
    primaryimage : "https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_1 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg", 
    subimage_2 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_3 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_4 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_5 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    nameproduct : "Trị Mụn Mỹ Phẩm Maystar - Tây Ban Nha Cam Kết Hiệu Quả Tại Nuci Spa & Academy",
    trademark : "NUCI SPA & ACADEMY",
    price : "600.000",
    // step : 
    time : "05/07/19 -31/08/19",
    detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
    additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
  
  },
  {
    id : 5,
    primaryimage : "https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_1 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg", 
    subimage_2 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_3 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_4 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    subimage_5 :"https://leskin.com.vn/Uploads/images/Facial-piel-sensible-blog.jpg",
    nameproduct : "Trị Mụn Mỹ Phẩm Maystar - Tây Ban Nha Cam Kết Hiệu Quả Tại Nuci Spa & Academy",
    trademark : "NUCI SPA & ACADEMY",
    price : "600.000",
    // step : 
    time : "05/07/19 -31/08/19",
    detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
    additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
  
  }
]
const DetailTrademark = [
  {
    image: "https://leskin.com.vn/Uploads/news/hieu-qua-tri-cham-bot-700x393.jpg",
    logo: "https://leskin.com.vn/Uploads/news/download1.webp?v10",
  },
  {
    image : "https://leskin.com.vn/Uploads/client2/dien_di_c.jpg",
    logo : "https://leskin.com.vn/Uploads/images/partner-1.webp?v10"
  },
  {
    image : "https://leskin.com.vn/Uploads/images/tratamiento-facial.jpg",
    logo :"https://leskin.com.vn/Uploads/news/Capture-Copy-3.webp?v10"
  }
]
  const  product_portfolio = [
    {
      id : 1,
      image: "https://leskin.com.vn/Uploads/client2/dfbgdfbd.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo: "https://leskin.com.vn/Uploads/news/download1.webp?v10",
      title : "La Roche-Posay EFFACLAR Astringent Micro-Exfoliating Lotion - 200ml" , 
       detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
    additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." ,
    price : 5000,
      
    },
    {
      id : 2,
      image : "https://leskin.com.vn/Uploads/images/EltaMD-UV-Clear-Broad-Spectrum-SPF-46.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo : "https://leskin.com.vn/Uploads/images/partner-1.webp?v10",
      title : "Kem chống nắng EltaMD UV Clear Broad-Spectrum SPF 46 Untinted - 48g" ,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      price : 5000,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
      
    },
    {
      id :3 ,
      image : "https://leskin.com.vn/Uploads/images/lancome.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo :"https://leskin.com.vn/Uploads/news/Capture-Copy-3.webp?v10", 
      title : "Kem chống nắng Lancome UV TONE UP WHITE SPF 50+ PA++++  30ml",
      price : 5000,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
    
    },
    {
      id : 4,
      image : "https://leskin.com.vn/Uploads/images/SoyFaceCleanser.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo :"https://leskin.com.vn/Uploads/images/lancome-logo-cut.webp?v10" , 
      title : "Sữa rửa mặt Fresh Soy Face Cleanser for Sensitive Skin  - 100ml" ,
      price : 5000,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
    
    },
    {
      id :5 ,
      image : "https://leskin.com.vn/Uploads/images/suaruamat%20-%20Copy%202.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo :"https://leskin.com.vn/Uploads/images/cut.webp?v10",
      title : "Sữa rửa mặt Neutrogena Ultra Gentle Hydrating Cleanser for Sensitive Skin - 354ml" ,
      price : 5000,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
    
    },
    {
      id : 6,
      image : "https://leskin.com.vn/Uploads/images/suaruamat%20-%20Copy%201.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo :"https://leskin.com.vn/Uploads/images/cut.webp?v10",
      title : "Sữa Rửa Mặt Hoa Cúc Calendula Deep Cleansing Foaming Face Wash - 230ml" ,
      price : 5000,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
    
    },
    {
      id : 7,
      image : "https://leskin.com.vn/Uploads/images/TONERHOACUC.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo :"https://leskin.com.vn/Uploads/news/Capture-Copy-3.webp?v10" ,
      title : "Toner Hoa Cúc Calendula Herbal Extract Alcohol-Free Toner - 250ml" ,
      price : 5000,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
    
    },
    {
      id : 8,
      image: "https://leskin.com.vn/Uploads/images/serum.jpg",
      decription : "Một trong những phương pháp điều trị sắc tố da hiệu quả đã được khoa học chứng minh là Công nghệ phi kim kết hợp sản phẩm điều trị được điều chế từ thảo dược. Thông qua thiết bị kim lăn có đầu siêu nhỏ khoảng 0,12 - 0,33mm lăn nhẹ qua da tạo tổn thương nhẹ để tạo đường dẫn đưa dưỡng chất từ thảo dược vào sâu trong da. Sản phẩm của Leskin điều chế từ thảo dược kết hợp lên men thẩm thấu cục bộ vào các vị trí nám giúp loại bỏ các sắc tố melanin tích tụ và làm sáng sắc tố da, giúp phá vỡ các cấu trúc sắc tố da sậm màu mà không ảnh hưởng đến các vùng da bên cạnh, đồng thời làm giảm sự tổng hợp melanin từ đó hạn chế nám quay trở lại tại vị trí trị liệu.",
      logo: "https://leskin.com.vn/Uploads/news/download1.webp?v10",
      title :"Serum  Clearly Corrective™ Dark Spot Solution - 50ml" ,
      price : 5000,
      detailinfor : " Công nghệ tế bào gốc (TBG) hiện nay được xem là “cánh cửa” mở ra nhiều con đường mới trong y học để chống lại các căn bệnh ác tính, quá trình lão hóa cũng như thẩm mỹ làm đẹp da. Hiện nay, việc ứng dụng TBG để làm đẹp đã mang lại những kết quả tích cực. Vậy ứng dụng của công nghệ này thực tế như thế nào? Phóng viên báo SK&ĐS đã có cuộc trao đổi với TS.BS. Vũ Huy Lượng - Khoa Nghiên cứu và Ứng dụng Tế bào gốc - Bệnh viện Da liễu Trung ương để giúp bạn đọc hiểu rõ hơn về vấn đề này. thuc-hu-te-bao-goc-trong-tham-my-va-lam-dep-1 TS.BS. Vũ Huy Lượng thăm khám cho bệnh nhân tại Bệnh viện Da liễu Trung ương. PV: Ứng dụng TBG trong thẩm mỹ và làm đẹp da hiện đang rất được quan tâm. Những lời quảng cáo “có cánh” về hiệu quả của TBG điều trị các vấn đề về da khiến bạn đọc không khỏi nghi ngờ về tác dụng của nó. Bác sĩ có thể cho biết TBG là gì, công dụng của TBG như thế nào và bác sĩ có nhận xét gì về hiệu quả thực sự của TBG trong thẩm mỹ? TS.BS.Vũ Huy Lượng: TBG (hay tế bào mầm) là những tế bào còn ở dạng sơ khai, có khả năng sinh sản (phân chia) rất mạnh và có khả năng biến đổi (biệt hóa) thành nhiều loại tế bào khác nhau để hình thành và thay thế nhằm duy trì các cơ quan tổ chức của cơ thể. TBG có 2 nguồn chính là từ phôi thai hoặc từ nhu mô của người trưởng thành. Các nguồn TBG ở người trưởng thành có thể từ máu của dây rốn và bánh rau, tủy xương, máu ngoại vi, từ da và tóc, nang tóc, mô mỡ." ,
      additioninfor : " Ngoài ứng dụng TBG trong làm đẹp, hiện nay, các liệu pháp thường được sử dụng nhiều nhất là bệnh lý tạo máu (tức rối loạn của hệ tạo máu), ứng dụng này đã được tổ chức FDA Hoa Kỳ chứng nhận hiệu quả. Ngoài ra, ứng dụng của TBG giúp hiệu quả trong làm liền vết thương do bỏng, vết loét mạn tính, một số bệnh lý di truyền hay bệnh lý về khớp." 
    
    }
  ]
  const newdata = [
    {
      id : 1,
      image : "https://leskin.com.vn/Uploads/news/thuc-pham-giau-vitamin-b.jpg",
      title: "Tác dụng của vitamin B với da ",
      date : "05/03/2020",
      decription : "Vitamin B có nhiều loại như B1 B2 B3 "

    },
    {
      id : 2,

      image : "https://leskin.com.vn/Uploads/news/vitamin-a.jpg",
      title: "Tác dụng của Vitamin A với làn da ",
      date : "05/03/2020",
      decription : "Vitamin A tên gọi khoa học là Retinol, hoạt động như một chất chống oxy hóa mạnh trong cơ thể. Nó đóng một vai trò quan trọng trong việc duy trì tầm nhìn, chức năng thần kinh, làn da khỏe mạnh và nhiều hơn nữa. Giống như tất cả các chất chống oxy hóa, nó cũng liên quan đến việc chống viêm..."

    },
    {
      id : 3,
      image : "https://leskin.com.vn/Uploads/news/vai-tro-cua-vitamin-leskin.jpg",
      title: " Vai trò của vitamin",
      date : "05/03/2020",
      decription : "Vitamin là vi chất thiết yếu, tham gia vào cấu tạo tế bào và các cấu trúc trong cơ thể. Vitamin đóng vai trò chất xúc tác của các phản ứng sinh hóa, tham gia vào quá trình trao đổi chất, chuyển hóa năng lượng, xây dựng hệ thống miễn dịch của cơ thể, đóng vai trò rất quan trọng đối với cơ thể..."

    },
    {
      id : 4,
      image : "https://leskin.com.vn/Uploads/news/tre-hoa-da.jpg",
      title: "Trẻ hóa da là gì?",
      date : "05/03/2020",
      decription : "Trẻ hóa da là phục hồi chức năng da, tổn thương da do quá trình lão hóa da do tuổi tác. Xóa hoặc giảm dấu hiệu lão hóa da: da chảy sệ, nếp nhăn, sạm da, da khô ráp, lỗ chân lông to. Làm chậm quá trình lão hóa da."

    },
    {
      id : 5 ,
      image : "https://leskin.com.vn/Uploads/news/vi-sinh-thao-duoc-la-gi.jpg",
      title: "Vi sinh thảo dược là gì?",
      date : "05/03/2020",
      decription : "Vi sinh thảo dược là sự kết hợp giữa vi sinh vật có lợi và thảo dược nhằm tổng hợp enzym, axit amin, giải phóng tinh chất trong thảo dược với hiệu suất cao nhờ sự chuyển hóa trong thành phần, cấu trúc phân tử của thảo dược."

    },
    {
      id : 6 ,
      image : "https://leskin.com.vn/Uploads/news/lao-hoa-da-la-gi.jpg",
      title: "Lão hóa da là gì?",
      date : "05/03/2020",
      decription : "Lão hóa da là quá trình suy giảm chức năng vốn có của da. Hệ tuần hoàn, hệ bạch huyết, quá trình sản sinh và tái tạo tế bào da suy giảm làm hủy hoại cấu trúc da, suy yếu hệ mao mạch, khả năng bài tiết của da. Biểu hiện của quá trình lão hóa da là sắc tố da suy giảm màu da tối, sậm hơn, xuất hiện những nốt sắc tố trên da nám da, tàn nhang, đồi mồi. Các sợi Collagen, Elastin suy giảm chức năng, thiếu hụt, đứt gãy làm da khô, chảy sệ, nhăn nheo, giảm khả năng đàn hồi và xuất hiện những nếp nhăn trên da." 

    },
    {
      id : 7 ,
      image : "https://leskin.com.vn/Uploads/news/phan-biet-nam-da-tan-nhang-va-doi-moi.jpg",
      title: "Phân biệt nám, tàn nhang và đồi mồi",
      date : "05/03/2020",
      decription : "Nám, tàn nhang và đồi mồi đều do sắc tố da Melanin tăng sinh quá mức dẫn tới các nốt, đốm sắc tố da có màu sắc khác với các màu da xung quanh. Chúng có cùng nguyên nhân, nguyên nhân nội sinh do di truyền, thay đổi nội tiết tố, lão hóa và nguyên nhân ngoại sinh do tiếp xúc nhiều với ánh nắng mặt..."

    },
    {
      id :8  ,
      image : "https://leskin.com.vn/Uploads/news/doi-moi.jpg",
      title: "Đồi mồi là gì?",
      date : "05/03/2020",
      decription : "Đồi mồi là các đốm sắc tố có màu nâu, đen, đỏ có thể có ở bất kỳ vùng da nào trên cơ thể. Đồi mồi có nhiều tại các vùng da hở mặt, mu bàn tay, cánh tay, vai, ngực nơi tiếp xúc nhiều với ánh nắng mặt trời. Giống nám, tàn nhang đồi mồi"

    },
    {
      id : 9 ,
      image : "https://leskin.com.vn/Uploads/news/sac-to-da.jpg",
      title: "Sắc tố da",
      date : "05/03/2020",
      decription : "Sắc tố da được quyết định bởi màu hồng của máu và hàm lượng Melanin trong da. Melanin là một loại sắc tố da, quy định màu da của mỗi người. Nếu làn da ít Melanin, da sẽ trắng nhạt hoặc hồng nhạt, lộ rõ mạch máu. Nếu làn da vừa đủ Melanin, da sẽ sẫm màu. Nếu làn da quá nhiều Melanin da sẽ tối..."

    },
    {
      id :10  ,
      image : "https://leskin.com.vn/Uploads/news/collagen-la-gi.jpg",
      title: "Collagen là gì ",
      date : "05/03/2020",
      decription : "Collagen là cấu trúc chính protein trong không gian ngoại bào trong nhiều mô liên kết trong cơ thể. Là thành phần chính của mô liên kết, nó là protein có nhiều nhất ở động vật có vú,[1] tạo ra 25% đến 35% hàm lượng protein toàn cơ thể. Collagen bao gồm axit amin liên kết với nhau để tạo thành..."

    },
    {
      id : 12 ,
      image : "https://leskin.com.vn/Uploads/news/melanin-la-gi.jpg",
      title: " Melanin là gì?",
      date : "05/03/2020",
      decription : "Melanin là một loại sắc tố da, quy định màu da của mỗi người. Melanin được sinh ra bởi tế bào hắc tố da Melanocytes. Melanin vô cùng quan trọng đối với làn da, sắc tố này giúp chống lại tác động từ các yếu tố ngoại sinh gây hại cho da: lửa và nắng. Melanin cân bằng nhiệt độ cho cơ..."

    },
    {
      id :11  ,
      image : "https://leskin.com.vn/Uploads/news/tan-nhang-la-gi.jpg",
      title: "Tàn nhang là gì?",
      date : "05/03/2020",
      decription : "Tàn nhang là các đốm sắc tố nhỏ hoặc từng mảng trên da, thường thì xuất hiện trên mặt. Sắc tố melamin của da tiết ra quá mức và không đồng đều tạo nên những đốm nâu nhỏ dưới tác động của ánh nắng mặt trời. Tàn nhang là bệnh ngoài da biểu hiện bằng những dát nhỏ tròn màu hung, màu nâu, xám,..."

    },
    {
      id :13  ,
      image : "https://leskin.com.vn/Uploads/news/seo-ro-la-gi.jpg",
      title: "Sẹo rỗ là gì?",
      date : "05/03/2020",
      decription : "Sẹo rỗ hay còn gọi là sẹo lõm do phần hạ bì của da bị tổn thương nặng. Nguyên nhân gây sẹo rỗ là các collagen và eslatin bị đứt gãy trong quá trình da bị tổn thương, không đủ phục hồi da khiến bề mặt da không căng phục hồi. Sẹo rỗ xuất hiện ở bề mặt da với hình dáng, kích thước, độ sâu..."

    },
    {
      id : 14 ,
      image : "https://leskin.com.vn/Uploads/news/nam-da-la-gi%20-%20leskin.jpg",
      title: "Nám da là gì?",
      date : "05/03/2020",
      decription : "Nám da là rối loại sắc tố ở một vùng da mặt do lượng Melanin tăng sinh quá mức gây nên những đóm nám, mảng nám. Nám thường có màu vàng nâu, nâu sáng, nâu đậm. Melanin là sắc tố da, quy định màu da được sản sinh bởi tế bào Melanocytes."

    },
  ]
let initial = {
    Intro : intro,
    Vouchers : voucher,
    Trademark : trademark,
    DetailProduct : detailProduct,
    DetailTrademark : DetailTrademark,
    ListIntroProd: product_portfolio,
    Newdata : newdata,
    cart : [
      
       
    ],
    calendarArr : [
      // {hoten: 'Chien', date: null , sodienthoai: '', songuoi: '', gioitinh: null}

    ],

    
    isDisplayCart : false,
    isDisplayMenu : false,
}
const localDataStorage = localStorage.getItem(DATA_STORAGE);
console.log("Localstorage:",localDataStorage);

initial = (localDataStorage!==null)?JSON.parse(localDataStorage):initial;
export const reducer = (state = initial ,action) =>{
  let {cart , calendarArr}= state
  switch( action.type ){
    case"togglecart" :
      return{
        ...state , 
        isDisplayCart : action.status
      }
    case "addToCart":
      let prod = action.prod
      let product = cart.find(x=>x.image == prod.image);
      if(product){
          product.quantity ++
      }
      else{
        prod.quantity = 1;
        cart.push(prod)
      }
      return{
        ...state,
        cart:[...cart]
      }

      case "deleteItems" :
        let newCart = state.cart.filter(x=>x.id != action.id);
        return{
            ...state,
            cart : [...newCart]
        }


    case "toggleMenu" :
      return{
        ...state,
        isDisplayMenu : action.status
      }
      
      case "up" : 
        let checkup =  cart.find(x => x.id == action.obj.id);
        if(checkup){
          checkup.quantity++
        }
        return{
          ...state,
          cart : [...cart]
        }


        case "down" : 
        let checkdown =  cart.find(x => x.id == action.obj.id);
        if(checkdown && checkdown.quantity >0){
          checkdown.quantity-- 
        }
        return{
          ...state,
          cart : [...cart]
        }
        case "pushcalendar" : 
        // let objdatlich =    {hoten: 'Chien', date: null , sodienthoai: '', songuoi: '', gioitinh: null}

        calendarArr.push(action.data)
        console.log("push calendar" , action.data);
        console.log("mang:",calendarArr);
        let obj = {...state, calendarArr:[...calendarArr]}
          localStorage.setItem(DATA_STORAGE,JSON.stringify(obj));
          return{
            ...state,
            calendarArr : [...calendarArr]
          }




    default :
        return state
    
  }
}
export const toggleCart = (status) =>{
  return{ type : "togglecart" ,
  status : status
}
}
export const addToCart = (prod) =>{
  return{
    type : "addToCart",
    prod : prod 
  }
}
export const toggleMenu = (status)=>{
  return{
      type : "toggleMenu",
      status : status

  }
}
export const updateQuantity = (value)=>{
  return{
    type : "updateQuantity",
    value : value

  }
}

export const upNumber = (obj)=>{
  return{
      type : "up",
      obj : obj 
  }
}
export const downNumber = (obj )=>{
  return{
      type : "down",
      obj : obj 
      // status : status 
  }
}

export const pushCalendar = (data) =>{
    console.log("action:",data);
   return{
    type : "pushcalendar" ,
    data : data
   }
}

export const pushDate = (obj) =>{
  return{
    type : "pushdate",
    obj : obj 
  }
}

export const deleteItems = (id)=>{
  return {
      type : "deleteItems",
      id : id
  }
}