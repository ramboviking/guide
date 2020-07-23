# Design
## Tool
Mặc dụ có thể sử dụng bất kỳ phần mềm thiết kế nào, nhưng khuyến khích sử dụng [Google Web Designer](https://webdesigner.withgoogle.com/). Lý do:
1. **Integration:** mẫu quảng cáo tĩnh (print ads) và động (digital banner) sẽ được tích hợp vào trong cùng 1 file thiết kế :arrow_right: giúp dễ dàng quản lý mẫu quảng cáo hơn.
2. **Responsive:** thay vì xác định vị trí cố định của từng thành phần như trước đây, Google Web Designer sẽ tự điều chỉnh vị trí để đáp ứng với kích thước màn hình theo triết lý của responsive web design. Chúng ta chỉ cần xác định quy tắc hiển thị 1 lần duy nhất :arrow_right: giảm thời gian resize mẫu quảng cáo.
3. **Modern:** mẫu quảng cáo được thiết kế dưới định dạng `HTML5`, đây là một định dạng hiện đại có nhiều ưu điểm và được Google khuyến cáo sử dụng.
4. **Component:** phần mềm hỗ trợ sẵn những component thường dùng giúp quá trình thiết kế nhanh chóng hơn. Chẳng hạn image gallery, video player, map... Thậm chí, nếu các component này chưa đúng nhu cầu thì chúng ta có thể tự xây dựng các custom component vô cùng linh hoạt.

5. **Asset:** đối với các tài nguyên dự định sử dụng cho nhiều mẫu thiết kê (vector, stock, hình ảnh nhân vật, bộ số, logo, hoa văn...), phần mềm cung cấp sẵn tính năng `thư viện` giúp việc quản lý tài nguyên dễ dàng hơn. Nói cách khác, `thư viện` :arrow_right: là nơi lưu trữ tập trung các tài nguyên thiết kế.
6. **Group:** giả sử chúng ta có một đối tượng được sử dụng ở nhiều maquette khác nhau (ví dụ logo + slogan; cụm địa chỉ + điện thoại + email; cụm số lô + hạn dùng), phần mềm công cấp sẵn một tính năng giúp quản lý các cụm này hiệu quả hơn, đó là `GROUP`. Tính năng `GROUP` được tạo ra để việc tái sử dụng các cụm nói trên một cách đơn giản và tiện lợi hơn. Mỗi khi chỉnh sửa GROUP, tất cả maquette có sử dụng group đó đều được cập nhật :arrow_right: giúp cắt giảm đáng kể thời gian chỉnh sửa từng maquette.

## Space
Tùy theo yêu cầu cụ thể của từng publisher mà chừa lề sao cho phù hợp. Nhìn chung, đa số các tạp chí, báo đều đưa thông số kích thước tràn viền (margin = 0). Padding nên ở mức 2,5 rem hoặc 1,25%.

## Require
Căn cứ theo Nghị định 54/2018/NĐ-CP, nội dung quảng cáo thuốc bắt buộc gồm những thông tin sau:
1. Tên thuốc
2. Thành phần hoạt chất chính (không yêu cầu bắt buộc ghi tá dược)
3. Chỉ định
4. Cách dùng
5. Liều dùng
6. Chống chỉ định, những khuyến cáo cho đối tượng đặc biệt
7. Thận trọng
8. Tác dụng phụ và phản ứng có hại
9. Tên, địa chỉ công ty
10. Lời dặn "Đọc kỹ hướng dẫn sử dụng trước khi dùng"
11. Nội dung "Số Giấy xác nhận nội dung quảng cáo thuốc của Bộ Y tế: .../XNQC..., ngày...tháng...năm..." ở cuối trang đầu.
12. Nếu quảng cáo được thiết kế nhiều trang thì phải có câu "Tài liệu này có ... trang, thông tin chi tiết sản phẩm xem ở trang ..."

Căn cứ theo Nghị định 15/2015/NĐ-CP, nội dung quảng cáo thực phẩm chức năng khuyến cáo bao gồm những thông tin sau:
1. Tên TPCN
2. Thành phần
3. Công dụng/ Đối tượng sử dụng
4. Cách dùng
5. Liều dùng
6. Tên, địa chỉ công ty
7. Khuyến cáo "Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh" <Badge text="bắt buộc" type="error" />

## Rule
1. Không được sử dụng từ "Hotline" hoặc "Điện thoại tư vấn" trong nội dung quảng cáo. Có thể dùng cụm "Điện thoại liên hệ".