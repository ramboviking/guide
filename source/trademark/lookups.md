# Lookups
## Tra cứu giấy chứng nhận đã được cấp
Trường hợp cần tra cứu thông tin của nhãn hiệu đã được cấp bằng, truy cập vào thư viện số sở hữu trí tuệ [IPLIB](http://iplib.noip.gov.vn/WebUI/WSearch.php). Nhập dữ liệu nhãn hiệu cần tra cứu:
* Nhãn hiệu cần tìm kiếm: là tên của nhãn hiệu cần tra cứu.
* Số đơn: format của số đơn thường là `4-YYYY-ABCDE`. Trong đó `YYYY` là số năm nộp đơn, `ABCDE` là số đơn.
* Số bằng: format của số bằng là 4-ABCDEFG-000. Trong đó, `ABCDEFG` là số đơn, còn 3 số 0 cuối là số phiên bản của bằng. Nếu bằng không có chỉnh sửa hoặc thay đổi gì trong quá trình sử dụng và lưu hành thì sẽ luôn có giá trị là `000`.

## Tra cứu để đánh giá khả năng cấp bằng

Giả sử chúng ta cần đăng ký nhãn hiệu "HoDoCu", trước khi nộp đơn chính thức, chúng ta cần tra cứu và đánh giá khả năng bảo hộ của nhãn hiệu này. Để thực hiện tra cứu chúng ta cần truy cập vào thư viện [IPLIB](http://iplib.noip.gov.vn/WebUI/WSearch.php) và nhập thông tin vào trường "Nhãn hiệu" và trường "Nhóm SP/DV" ở 3 cấp độ như sau:
### 1. Tra cứu chính xác:
``` html
Search: HoDoCU
```
Nhập đúng nhãn hiệu (trường hợp này là nhập "HoDoCu" ) và nhập nhóm SP/DV (nếu là dược phẩm thì nhập nhóm "05").
Nếu có một nhãn hiệu đã đăng ký trùng 100% trong cùng nhóm thì chắc chắn nhãn hiệu đó sẽ không thể đăng ký. Nếu nhãn hiệu tra cứu nằm trong 1 đối chứng khác, có 2 trường hợp có thể xảy ra:
* Nhãn hiệu tra cứu + từ có nghĩa (ví dụ "HoDoCu Great").
* Nhãn hiệu tra cứu + nhãn khác đã đăng ký (ví dụ "HoDocu Sandoz")
### 2. Tra cứu nằm trong:
```html
Search: HoDoCu*
Search: *HoDoCu
```
Tương tự như trên, nhưng chúng ta sẽ xem liệu nhãn hiệu tra cứu có phải là 1 phần trong một đối chứng nào đó không. Chúng ta vẫn nhập nhãn hiệu và số nhóm SP/DV như trên, nhưng thêm ký tự đại diện '*' lần lượt vào trước và sau nhãn hiệu tra cứu (lần lượt tra cứu "\*HoDoCu" và "HoDoCu\*"). Nếu một đối chứng nào đó chứa hoàn toàn nhãn hiệu cần tra cứu thì khả năng đăng ký bảo hộ thành công thấp.
### 3. Tra cứu trùng âm
```html
Search: HoDo*, *HoDo
Search: DoCu*, *DoCu
Search: Ho*Cu
```
Theo quy định hai nhãn hiệu chỉ khác nhau một âm thì khả năng bảo hộ thấp. Do đó, chúng ta sẽ tách nhãn hiệu cần tra cứu ra và tra cứu tuần tự hai âm để xem liệu có đối chứng nào trùng 2 âm hay không.
Chúng ta sẽ tìm lần lượt "HoDo\*", "\*HoDo", "DoCu\*", "\*DoCu", "Ho\*Cu"...

## Đánh giá khả năng bảo hộ
Mặc dù việc tra cứu có thể thực hiện một cách đơn giản và kết quả thu được khá rõ ràng. Tuy nhiên, do dữ liệu công bố của thư viện số sở hữu trí tuệ [IPLIB](http://iplib.noip.gov.vn/WebUI/WSearch.php) chưa đầy đủ, và thực tế nhận định có thể rất khác nhau tùy người và tùy hoàn cảnh cụ thể. Do đó, việc đánh giá khả năng bảo hộ của một nhãn hiệu thực tế là một việc rất khó khăn. Vì các lý do này mà việc đánh giá chỉ có thể thực hiện bởi các công ty luật hoặc người của Cục SHTT.

Kết quả đánh giá có thể được đọc theo quy ước như sau:
* 50% - 59% khả năng bảo hộ thấp, có rủi ro khi thực hiện nộp đơn.
* 60% - 70% có khả năng bảo hộ, có thể nộp đơn trong trường hợp này.
* 71% trở lên, khả năng bảo hộ cao.