# Ads document storage
Các văn bản quảng cáo được lưu trữ thành 3 phần riêng biệt như sau:
1. Giấy xác nhận quảng cáo
2. Hồ sơ đăng ký quảng cáo
3. Maquettee quảng cáo

## Giấy xác nhận quảng cáo
- Giấy xác nhận quảng cáo do Cục Quản Lý Dược hoặc Cục An Toàn Thực phẩm cấp sẽ được lưu riêng trong 1 tập hồ sơ tên "Giấy xác nhận quảng cáo".
- Lưu theo thứ tự anphabe tên sản phẩm để thuận tiện nhất cho việc tìm kiếm tài liệu.
- File mềm lưu theo dạng phẳng trong cùng một thư mục.
- Dùng tiếp đầu ngữ "XNQC" khi đặt tên file.
- In và đính kèm maquette/ kịch bản cùng với giấy xác nhận quảng cáo.

## Hồ sơ đăng ký quảng cáo
1. Hồ sơ lưu đăng ký quảng cáo đầy đủ bao gồm:
	1. Đơn đề nghị xác nhận nội dung quảng cáo
	2. Maquette (phiên bản final)
	3. Kịch bản
	4. Visa/ Quyết định cấp số đăng ký
	5. Mẫu nhãn (phiên bản đóng dấu Cục QLD)
	6. Tờ hướng dẫn sử dụng (phiên bản đóng dấu Cục QLD)
	7. Tài liệu tham khảo của sản phẩm đăng ký (nếu có)
	8. Phiếu báo thu (không có chữ ký)
	9. Giấy ủy nhiệm chi
	10. Biên lai thu phí
	11. Công văn góp ý của Cục (nếu có)
	12. Công văn giải trình/ phúc đáp (nếu có)
	13. Công văn từ chối (nếu có)

::: warning
Các tài liệu sử dụng chung và có trong bất kỳ hồ sơ đăng ký quảng cáo nào thì không cần lưu riêng trong từng bộ hồ sơ sản phẩm mà lưu chung tại vị trí đầu tiên với tên "Tài liệu dùng chung". Bao gồm:
1. Giấy chứng nhận đăng ký kinh doanh.
2. Giấy đủ điều kiện kinh doanh thuốc.
3. Danh hiệu/ Giải thưởng:
	- Thương hiệu quốc gia,
	- Ngôi sao thuốc Việt,
	- Hàng Việt Nam chất lượng cao.
:::

2. Hồ sơ đăng ký quảng cáo lưu theo thứ tự thời gian, không phân chia loại hình quảng cáo (lưu chung hồ sơ tất cả loại quảng cáo, bao gồm cả thông tin thuốc).
3. File mềm lưu theo dạng phẳng trong cùng một thư mục `./SẢN PHẨM`, mỗi thư mục con chứa hồ sơ của một sản phẩm.
4. Nếu một sản phẩm có nhiều lần đăng ký khác nhau thì tiếp tục tạo một thư mục con cho mỗi lần đăng ký.
5. Các file dùng chung (ĐKKD, đủ ĐK KD, các danh hiệu) lưu trực tiếp trong thư mục gốc `./filename`

```
Hồ sơ đăng ký quảng cáo
|--	SẢN PHẨM
|		|  
|		|- Kiện nhi OPSURE  
|		|     |-- Báo chí  
|		|     |-- Phương tiện giao thông  
|		|     |-- TVC  
|		|  
|		|- Viên sáng mắt  
|		|     |-- Báo chí  
|		|     |-- Báo chí (lần 2)  
|		|     |-- Internet  
|		|  
|		|- Viên dị ứng kim ngân OPC  
|		|  
|		|- Viên an nhũ OPC  
|		|  
|		|- Viên dưỡng não OP.BRAIN F  
|--	ĐKKD
|--	Đủ điều kiện kinh doanh
|--	ĐKNH - OPC
|--	THQG
|--	HVNCLC
|--	NSTV
```

## Maquette quảng cáo
* Maquette quảng cáo lưu trong thư mục riêng biệt so với các phần trên.
* Trong thư mục "Maquette" tạo các thư mục con là tên của các sản phẩm.
* Các maquette của cùng một sản phẩm thì lưu chung trong 1 thư mục. Không phân biệt loại hình quảng cáo.
* Sử dụng tiếp đầu ngữ để phân biệt các loại hình quảng cáo.
	1. "TVC" cho quảng cáo báo hình, quảng cáo động.
	2. "Radio" cho quảng cáo báo nói, quảng cáo âm thanh.
	3. "Brochure" cho các dạng tờ rơi, bộ kit quảng cáo.
	4. "Print" cho các quảng cáo in ấn (báo chí, decal dán...)
	5. "Banner" cho các quảng cáo kỹ thuật số.
	6. "OOH" cho các loại quảng cáo ngoài trời (pano, áp phích, phương tiện giao thông, biển hiệu...)
	
## Quy tác chung
1. Thời hạn lưu trữ của các văn bản quảng cáo là 5 năm kể từ khi quảng cáo hết hiệu lực.
2. Hiện tại lưu trữ song song giữa bản in và file mềm, nhưng dần dần sẽ hướng đến chỉ lưu file mềm.
3. Lập danh mục cho tư liệu marketing là yêu cầu bắt buộc.
4. Đề nghị nghiên cứu và triển khai phần mềm quản lý tư liệu marketing (trong đó bao gồm tư liệu quảng cáo, PR và tư liệu thiết kế).