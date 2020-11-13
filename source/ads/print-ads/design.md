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

## Layout
Có nhiều loại bố cục như:
- Tờ rơi: thường là hai trang, trong đó trang 2 chứa nội dung thông tin thuốc. Hoặc có thể là 4 trang, thông tin thuốc nằm ở trang 3 và 4.

![Tờ rơi](https://via.placeholder.com/120x210?text=Trang+1)
 ![Tờ rơi](https://via.placeholder.com/120x210?text=Trang+2)
 
- Khổ ngang: chỉ có 1 trang theo tỷ lệ 16:9 hoặc 4:3. Nội dung thông tin thuốc ở khu vực phía dưới. Thường áp dụng cho banner, báo.

![Khổ ngang](https://via.placeholder.com/300x180?text=Kho+ngang)

- Khổ dọc: cũng chỉ có 1 trang, chiều ngang ngắn hơn chiều cao. Nội dung thông tin thuốc vẫn nằm ở phía dưới. Thường áp dụng cho tạp chí.

![Khổ dọc](https://via.placeholder.com/120x160?text=Kho+doc)

- Khổ siêu rộng: loại bố cục này thường sử dụng cho quảng cáo ngoài trời (phương tiên giao thông, nhà chờ). Tỷ lệ thường là 25:9 hoặc rộng hơn nữa. Chỉ có 1 trang nhưng toàn bộ thông tin thuốc nằm ở khu vực bên phải giống như 2 trang.

![Khổ siêu rộng](https://via.placeholder.com/360x150?text=Kho+sieu+rong)

- Khổ siêu cao: thường áp dụng cho standee, phướng. Kích thước thông thường là 200 x 50 cm. Phần thông tin thuốc nằm gọn ở phía bên dưới.
Trên đây là 5 loại khổ cơ bản. Trong thực tế có thể sẽ gặp nhiều biến thể của 5 loại cơ bản ở trên, đặc biệt là banner kỹ thuật số sẽ có rất nhiều kích thước khác nhau.

![Khổ siêu cao](https://via.placeholder.com/120x360?text=Kho+sieu+cao)

## Require
Xem thêm [Yêu cầu nội dung khi thiết kế](../content-requirements.md#quang-cao-thuoc)
## Rule
1. Không được sử dụng từ "Hotline" hoặc "Điện thoại tư vấn" trong nội dung quảng cáo. Có thể dùng cụm "Điện thoại liên hệ".
2. Cụm "Đọc kỹ hướng dẫn sử dụng trước khi dùng" phải thể hiện font color nổi bật và font size lớn hơn bình thường.
3. Cụm "Logo OPC Pharma" nằm ở vị trí góc trái dưới của mặt số 1.
4. Cụm "GMP-WHO" nằm ở vị trí phải trên của trang thông tin sản phẩm.
5. Tất cả các trang đều phải có tên sản phẩm.
6. Tên, địa chỉ công ty: thống nhất ghi tên và địa chỉ của trụ sở chính của công ty tại thời điểm đăng ký quảng cáo. Không nhất thiết phải ghi địa chỉ nhà máy.