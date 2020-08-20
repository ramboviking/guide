# Digital signature

## Introduction
Chữ ký số là một dạng chứng thực kỹ thuật số, được áp dụng tại phòng QTM cho một số lĩnh vực như:
* Kê khai giá thuốc với Cục QLD.
* Đăng ký quảng cáo với Cục QLD.
* Công bố thông tin tại Sở giao dịch chứng khoán.
Hiện tại phòng QTM đang quản lý chữ ký số (token) do VNPT cung cấp để thực hiện các hoạt động nêu trên. Ngoài ra, một số phòng ban khác cũng có chữ ký số của riêng họ, phòng NCPT dùng để đăng ký thuốc, phòng HCQT dùng để thực hiện khai báo với BHXH.

## Install
Trước khi có thể sử dụng chữ ký số, cần phải thực hiện một số bước cài đặt dưới đây (nhưng trước hết là phải mua chữ ký số - tức là cái USB token đó).
1. Cài phần mềm điều khiển (driver): thông thường driver đã được chép sẵn trong USB token, chỉ cần mở USB lên và tìm file cài vào máy. Nếu trong USB token không có (hoặc có nhưng đã lỗi thời) thì lên trang web của nhà cung cấp tải driver bản mới về máy và tiến hành cài đặt.
2. Đăng ký chữ ký với hệ thống: đối với một số hệ thống trực tuyến (ví dụ [dichvucong.dav.gov.vn](dichvucong.dav.gov.vn)) cần đăng ký token và tải ảnh chữ ký lên để chèn vào văn bản mỗi lần ký số. Nên xem hướng dẫn của từng website để thực hiện đúng trình tự.
3. Ký số: sau hai bước trên thì đã có thể thực sự tiến hành ký số. Đăng nhập hệ thống -> chọn hồ sơ -> chọn hành động "Ký số".

## Debug
| Lỗi | Nguyên nhân | Khắc phục |
| --- | ---| ---|
| Không thể tạo hash | Lỗi đăng ký chữ ký số với hệ thống | Xóa file ảnh/ chữ ký cũ và đăng ký lại từ đầu. Cập nhật lại số serial của token|
|  | | |
|  | | |