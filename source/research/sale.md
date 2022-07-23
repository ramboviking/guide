# Phân tích kinh doanh
Để thống nhất trong hoạt động phân tích thì các chỉ số sau đây sử dụng dữ liệu:
- Doanh thu: sử dụng doanh thu trước thuế (cột Tien2 trên Bravo). Tuy nhiên, loại trừ cho biếu tặng (cột Ma_KM là P84 hoặc P84E). Đối với hàng trả lại, Bravo đã hiển thị số âm nên không xử lý gì thêm (mặc định đã loại trừ hàng trả lại).
- Số lượng: mặc định là sử dụng số lượng bán (loại trừ số lượng khuyến mãi - cột KHUYEN_MAI = TRUE). Trong trường hợp sử dụng số lượng tổng (bao gồm bán và khuyến mãi) thì nên ghi rõ số lượng tổng.
- Chi nhánh được xác định bằng cột MA_DVCS, cụ thể:
	* 1N101: CÔNG TY
	* 2B101-01: CN HÀ NỘI
	* 2B101-02: CN HÀ NỘI
	* 2N101: CN HỒ CHÍ MINH
	* 2N101-01: CN HỒ CHÍ MINH
	* 2N101-03: CN HỒ CHÍ MINH
	* 2N101-04: CN HỒ CHÍ MINH
	* 2N101-05: CN HỒ CHÍ MINH
	* 2N201: CN MIỀN ĐÔNG
	* 2N202: CN VŨNG TÀU
	* 2N301: CN CẦN THƠ
	* 2N302: CN TIỀN GIANG
	* 2T101: CN NHA TRANG
	* 2T102: CN ĐÀ NẴNG
	* 2T103: CN NGHỆ AN
- Phân loại OTC/ ETC căn cứ vào cột loại khách hàng. Tùy nhiên, loại khách hàng có 2 cột trong Bravo gồm LOAI_KH và LOAI_KH_TAN_DUOC. Do đó, tùy thuộc loại báo cáo sản phẩm Đông dược hay Tân dược mà lấy cột tương ứng.
- Phân loại sỉ/ lẽ dựa vào cột LOAI_KH:
	* Sỉ gồm: OTC0, OTC1, OTC3, OTC4.
	* Lẻ gồm: OTC2; OTC7; OTC8; OTC9.
## Customer analysis
### Mục đích
Phân tích doanh thu khách hàng được dùng để đánh giá sức mua/tiềm năng của một khách hàng. Sử dụng loại phân tích này để đưa ra các quyết định liên quan đến một khách hàng nào đó.
* Quyết định tài trợ/ hoặc không tài trợ,
* Quyết định chính sách bán hàng riêng,
* Quyết định chính sách chăm sóc riêng,
* Quyết định quảng cáo trưng bày quầy kệ.
### Nội dung
Phân tích bao gồm các nội dung/ biểu đồ sau:
- Tổng doanh thu MAT (12 tháng gần nhất)
- Doanh thu theo thời gian (12 tháng gần nhất),
- Cơ cấu doanh thu (theo xưởng sản xuất, theo nhóm dược lý, theo nhóm marketing)
- Phân tích từng nhóm:
	* Tổng doanh thu (của nhóm),
	* Doanh thu theo thời gian (của nhóm),
	* Top sản phẩm (của nhóm).
	
[Download template](https://www.dropbox.com/s/85ofu2ee7r4h9rl/Stable%20-%20BVDK%20Can%20Giuoc%20-%202019.xlsx?dl=0)

## Product analysis
### Mục đích
Phân tích doanh thu sản phẩm dùng để đánh giá tổng quát tình hình kinh doanh của sản phẩm.
### Nội dung
Phân tích bao gồm các nội dung/ biểu đồ sau:
- Tổng doanh thu sản phẩm,
- Danh thu theo thời gian,
- Cơ cấu doanh thu:
	* Theo kênh phân phối,
	* Theo đối tượng khách hàng,
	* Theo chi nhánh,
	* Theo vùng miền,
	* Theo TDV.
- So sánh kênh phân phối (ETC vs OTC),
- So sánh các chi nhánh,
- So sánh các đối tượng khách hàng.

[Download template](https://www.dropbox.com/s/ogjmo2s2ph83akk/Sales%20-%20NEWS.xlsx?dl=0)

## Brand analysis
### Mục đích
Phân tích chi nhánh dùng để tìm hiểu về tình hình kinh doanh của chi nhánh và phát hiện các vấn đề bất ổn trong nội bộ một chi nhánh nào đó.
### Nội dung
Phân tích bao gồm các nội dung/ biểu đồ sau:
- Tổng doanh thu MAT (12 tháng gần nhất),
- Doanh thu theo thời gian (12 tháng gần nhất),
- Cơ cấu doanh thu:
	* Theo địa bàn (tỉnh, thành phố, quận, huyện),
	* Theo TDV,
	* Theo nhóm sản phẩm,
	* Theo sản phẩm,
	* Theo kênh phân phối,
	* Theo nhóm khách hàng,

*Chưa có template*

## Channel analysis
*Cần người viết*

## MedRep analysis
*Cần người viết*

## District analysis
*Cần người viết*