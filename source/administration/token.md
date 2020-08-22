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
2. Cài tiện ích mở rộng nền web: một số trình duyệt web có thể yêu cầu cài đặt plug-in (hoặc extension) để bắt đầu sử dụng dịch vụ ký số. Xem hướng dẫn tại website của đơn vi cung cấp token.
3. Đăng ký chữ ký với hệ thống: đối với một số hệ thống trực tuyến (ví dụ [dichvucong.dav.gov.vn](dichvucong.dav.gov.vn)) cần đăng ký token và tải ảnh chữ ký lên để chèn vào văn bản mỗi lần ký số. Nên xem hướng dẫn của từng website để thực hiện đúng trình tự.  
Một số hệ thống khác sử dụng phần mềm desktop có thể không yêu cầu bước này. Liên hệ với đơn vị cung cấp hệ thống có sử dụng ký số để hỏi về hệ thống.
4. Ký số: sau hai bước trên thì đã có thể thực sự tiến hành ký số. Đăng nhập hệ thống -> chọn hồ sơ -> chọn hành động "Ký số", nhập mã bảo mật của token -> kiểm tra văn bản đã chèn ảnh chữ ký hoặc chèn mã (hash) chưa.

## Debug
| Lỗi | Nguyên nhân | Khắc phục |
| --- | ---| ---|
| Không thể tạo hash | Lỗi đăng ký chữ ký số với hệ thống | Xóa file ảnh/ chữ ký cũ và đăng ký lại từ đầu. Cập nhật lại số serial của token.|
| Không thể khởi chạy dịch vụ ký số | Chưa cài đặt plug-in hoặc extension | Cài đặt plug-in hoặc extension |
|  | | |

## Common issue
### Hết hạn chữ ký số
- Liên hệ với nhà cung cấp token để thực hiện renew chữ ký số.
- Sau khi renew thì nhà cung cấp sẽ cấp số id chữ ký số mới (nhưng thiết bị phần cứng usb token không đổi).
- Tiến hành đăng ký như lần đầu (bước 4 ở trên) chữ ký số với hệ thống.

::: tip   
Sau khi renew thì thông báo "một trong số các chữ ký số của bạn đã hết hạn" vẫn hiện ra. Vào phần mềm điều khiển chữ ký số kiểm tra thấy xuất hiện một chữ ký số mới có hiệu lực thì bỏ qua thông báo và tiếp tục sử dụng bình thường.
:::

### Thay đổi nhà cung cấp token
Nếu trong quá trình sử dụng, công ty thay đổi nhà cung cấp token (hoặc mượn token của một phòng ban khác):
- Tiến hành cài đặt token từ bước 1, nếu nhà cung cấp khác hoàn toàn (ví dụ chuyển từ VNPT sang Viettel).
- Tiến hành cài đặt từ bước 2, nếu token mới là của cùng nhà cung cấp (ví dụ sử dụng token của phòng NCPT vẫn là của cùng nhà cung cấp VNPT).

::: warning
Nếu là thay đổi tạm thời thì không cần xóa đăng ký chữ số với hệ thống. Còn thay đổi lâu dài thì nên xóa ảnh chữ ký (và số serial) của token không dùng để tránh lẫn lộn.  
*Nếu chọn chữ ký cũ --> lỗi không ký số được.*
:::