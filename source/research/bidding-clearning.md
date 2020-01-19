# Data clearning
## Lý do
Dữ liệu kết quả trúng thầu mà [BHXH](https://baohiemxahoi.gov.vn/vanban/pages/default.aspx?DanhMucBanHanh=7) hoặc [CQLD](https://dav.gov.vn/thong-tin-dau-thau-thuoc-cn8.html) công bố thường không được nhập liệu chuẩn nên không thể thực hiện các phân tích mong muốn. Do đó, việc chuẩn hóa dữ liệu là cần thiết và là một bước bắt buộc trong quá trình [phân tích kết quả trúng thầu](./bidding.md). Và đây cũng là bước tốn nhiều thời gian nhất trong quá trình phân tích. 

## Trường dữ liệu
Trường dữ liệu (fiel) nào có trong báo cáo thì cần phải làm sạch dữ liệu. Các trường bao gồm:
- Công thức
- Nồng độ/ hàm lượng
- Tên sản phẩm
- Công ty sản xuất
- Quốc gia
- Dạng bào chế
- Quy cách
- Đơn vị tính
- Gói thầu
- Nhóm đấu thầu

Trong số tất cả các trường, chỉ có `tỉnh/thành` là trường đã nhập liệu chuẩn và không cần phải làm sạch.

## Cách làm
1. Lọc dữ liệu của 1 trường theo 1 từ khóa rồi xem các giá trị tương tự nhau có phải là thật sự giống nhau hay không. Nếu là 1 thì copy/ paste để đồng nhất dữ liệu.
2. Chạy phân tích tần số để xem xét tổng thể. 
Nếu vẫn còn giá trị trùng lập thì tiếp tục hợp nhất.
Nếu không còn thì chuyển sang 1 trường tiếp theo.

::: tip
Làm sạch trực tiếp trên file tổng hợp cả năm (của tất cả các công thức) sẽ tiết kiệm thời gian hơn so với làm  trên từng file công thức riêng biệt.
:::

## Chuẩn hóa
Để thống nhất dữ liệu trong quá trình thực hiện làm sạch dữ liệu thì tuân theo các quy tắc sau:
- Sử dụng dữ liệu chuẩn của thông tư (công thức thuốc, tên gói thầu, tên nhóm đấu thầu),
- Sử dụng dữ liệu chuẩn của cơ quan quản lý cấp (visa, tên thuốc),
- Sử dụng tên giao dịch (viết tắt) của tên công ty,
- Sử dụng tên quốc gia theo chuẩn ISO.
- Đơn vị tính sử dụng các đơn vị cơ bản.

*Tham khảo danh sách chuẩn tên công ty.*