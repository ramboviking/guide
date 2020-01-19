# Design
## Tool
Mặc dụ có thể sử dụng bất kỳ phần mềm thiết kế nào, nhưng khuyến khích sử dụng [Google Web Designer](https://webdesigner.withgoogle.com/). Lý do:
1. **Integration:** mẫu quảng cáo tĩnh (print ads) và động (digital banner) sẽ được tích hợp vào trong cùng 1 file thiết kế :arrow_right: giúp dễ dàng quản lý mẫu quảng cáo hơn.
2. **Responsive:** thay vì xác định vị trí cố định của từng thành phần như trước đây, Google Web Designer sẽ tự điều chỉnh vị trí để đáp ứng với kích thước màn hình theo triết lý của responsive web design. Chúng ta chỉ cần xác định quy tắc hiển thị 1 lần duy nhất :arrow_right: giảm thời gian resize mẫu quảng cáo.
3. **Modern:** mẫu quảng cáo được thiết kế dưới định dạng `HTML5`, đây là một định dạng hiện đại có nhiều ưu điểm và được Google khuyến cáo sử dụng.
4. **Component:** phần mềm hỗ trợ sẵn những component thường dùng giúp quá trình thiết kế nhanh chóng hơn. Chẳng hạn image gallery, video player, map... Thậm chí, nếu các component này chưa đúng nhu cầu thì chúng ta có thể tự xây dựng các custom component vô cùng linh hoạt.

5. **Asset:**
6. **Group:** giả sử chúng ta có một đối tượng được sử dụng ở nhiều maquette khác nhau (ví dụ logo + slogan; cụm địa chỉ + điện thoại + email; cụm số lô + hạn dùng), phần mềm công cấp sẵn một tính năng giúp quản lý các cụm này hiệu quả hơn, đó là `GROUP`. Mỗi khi tạo một nhóm các đối tượng - tạo GROUP - thì group đó sẽ được hiển thị trong thư viện để có thể tái sử dụng trong các bản t