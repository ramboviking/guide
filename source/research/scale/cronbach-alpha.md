# Build scale by Cronbach 's alpha
(Viết nội dung hướng dẫn tại đây). [Tham khảo markdown](https://guides.github.com/features/mastering-markdown/)

## Khái niệm thang đo
Thang đo: là tạo ra một thang điểm để đánh giá đặc điểm của đối tượng nghiên cứu thể hiện qua sự đánh giá, nhận xét.

Biến định tính: Một tính trạng nào đó. Vd: giới tính, cảm nhận, 

Biến định lượng: Đo được bằng một con số cụ thể. Vd: thu nhập, doanh thu,…

4 loại thang đo, mỗi thang đo sau kế thừa đặc điểm của thang đo trước và thêm một đặc điểm bổ sung:

![4 loại thang đo](https://cdn.vietnambiz.vn/171464876016439296/2020/5/8/scale-15889331622972032250371.png)

Thang đo danh nghĩa: Gán cho biến định tính một biến giả, cốt chỉ để phân biệt, không có sự so sánh hơn kém. Vd: Nam = 1, Nữ = 0.

Thang đo thứ bậc: Giống như danh nghĩa nhưng có sự so sánh, nhưng sự chênh lệch giữa 1 và 2 khác sự chênh lệch giữa 3 và 4. Vd: Cổ phiếu 2 tốt hơn cổ phiếu 1 nhưng sự khác biệt giữa 1 và 2 không giống sự khác biệt giữa 2 và 3.

Thang đo khoảng: Sự khác biệt là bằng nhau, nhưng điểm "0" là abitrary. Vd: đối với nhiệt độ, 0 độ C không có nghĩa là không có nhiệt độ.

Thang đo tỷ lệ: Mang đầy đủ 3 tính chất của thang đo trước và điểm 0 thực sự có ý nghĩa, nhưng khó sử dụng trong điều tra xã hội cũng như kinh tế, thường được dùng trong vật lý đo kg, mét. Vd: với vận tốc 0km/h biểu thị vật đang đứng yên.

Tham khảo thêm: Các loại thang đo trong thống kê


## Kiểm định

### Cronbach's Alpha

α ≥ .60: Không tốt, chấp nhận được

.70 ≥ α  ≥ .90: Tốt

 α ≥ .95: Không tốt, chấp nhận được
 
Về cơ bản, hệ số Cronbach’s Alpha đo lường tỉ lệ phân tán của từng nhóm quan sát so với tỉ lệ phân tán của mẫu. 

### Phân tích nhân tố EFA

|Giá trị phân biệt | Giá trị hội tụ|
|------------------|---------------|
|Từng nhóm quan sát độc lập nhau, người tham gia khảo sát phân biệt được từng nhân tố khác nhau. Khi biểu diễn trong ma trận xoay, từng nhân tố tách thành các cột riêng riệt| Các biến quan sát hội tụ về một nhân tố. Từng yếu tố trong một nhóm quan sát chỉ thuộc về nhóm đó và góp phần tạo nên khái niệm của nó. Khi biểu diễn trong ma trận xoay, các biến này nằm chung một cột với nhau. |

Trong phân tích nhân tố, phương pháp Principal Components Analysist đi cùng với phép xoay Varimax được sử dụng để nhóm các biến quan sát cùng miêu tả một khái niệm lại với nhau. Hệ số tải (factor loading) là một đại lượng đặc trưng để đảm bảo mức ý nghĩa thiết thực của EFA. 

Factor loading thể hiện phần trăm phương sai mà một biến trong nhóm quan sát đó được giải thích bởi nhân tố đó. 

Theo Hair & CTG trong Multivariate Data Analysis (1998), nếu cỡ mẫu lần lượt là 50, 100, 350 thì lần lượt tương ứng với hệ số tải là .75, .55 và .3

KMO and Barlett’s test:
“KMO là một chỉ tiêu dùng để xem xét sự thích hợp của EFA, phân tích nhân tố khám phá (EFA) thích hợp khi 0,5 ≤ KMO ≤ 1. Kiểm định Bartlett xem xét giả thuyết về độ tương quan giữa các biến quan sát bằng 0 trong tổng thể, nếu kiểm định này có ý nghĩa thống kê (sig ≤ 0,05) thì các biến quan sát có tương quan với nhau trong tổng thể.” (Ngọc, 2005)

## Thiết kế nghiên cứu

### Quy trình

Phỏng vấn định tính để xây dựng bảng câu hỏi => Tiến hành khảo sát định lượng.

### Chọn mẫu:

Về cơ bản thì cỡ mẫu càng gần với tổng thể càng tốt. Nhưng trong thực tế, nếu tổng thể quá lớn thì rất khó để chọn cỡ mẫu gần tổng thể nên người ta chọn nghiên cứu những mẫu quan sát bao gồm các đặc trưng của tổng thể. 

Có 2 cách chọn mẫu:

Xác suất: mỗi phần tử trong tổng thể có xác suất được chọn vào mẫu bằng nhau.

Phi xác suất: Mỗi phần tử trong tổng thể có xác suất được chọn khác nhau.

Chọn mẫu xác suất:

|Phương pháp | Định nghĩa	| Ưu | 	Nhược |
|-- | ---------| ---------| --- | ------ |
| Ngẫu nhiên đơn giản | Đánh số thứ tự các phần tử. Chọn ngẫu nhiên |	Tính đại diện cao |	Tốn kém và mất thời gian |
| Chọn mẫu hệ thống |	Như trên nhưng chọn cách đều các phần tử |	// |	// |
|Phân tổ/tầng |	Chia tổng thể thành một hay nhiều tổ liên quan đến mục đích nghiên cứu. Chọn ngẫu nhiên hoặc hệ thống mẫu trong từng tổ, cỡ mẫu bằng tỷ lệ của tổ đó so với tổng thể. |	Tính đại diện cao, ít tốn kém => phổ biến nhất. | |	
|Tích tụ hoặc tập trung |	Phân tổng thể thành từng khối rồi chọn ngẫu nhiên hoặc hệ thống một (số) khối để điều tra	Không cần lập danh sách tổng thể | |	Tính đại diện chưa cao |
|Nhiều giai đoạn | | | | |


Chọn mẫu phi xác suất:
|Phương pháp | Định nghĩa	| Ưu | 	Nhược |
|-- | ---------| ---------| --- | ------ |
|Thuận tiện	|Chọn những phần tử thuận tiện, dễ tiếp cận. |	Ít tốn kém, thuận tiện |	Tính đại diện chưa cao, không kết luận cho tổng thể được. |
|Phán đoán |	// |	// |	Tốt hơn một chút nhưng vẫn không kết luận cho tổng thể được. |
|Định mức | | | |			
|Tích luỹ nhanh|	Bắt đầu từ 1 phần tử rồi nhờ họ giới thiệu những người khác có cùng đặc tính. |	Giải quyết mẫu khó tìm, khó tiếp cận | |	

## Chỉ dẫn SPSS
### Cronbach's Alpha
Bước 1: Analyze => Scale => Reliability Analysis

![](https://1.bp.blogspot.com/-66MmLZU4Hq8/XczUhK91_yI/AAAAAAAAOkA/xL5Cfq55RHwzfMcESRbbdzMPMKo_rVuawCLcBGAsYHQ/s1600/kiem-dinh-do-tin-cay-cronbach-alpha-1.png)

Bước 2: Chọn các quan sát thuộc 1 nhóm nhân tố, lần lượt lặp lại với số lượng nhân tố còn lại

![](https://1.bp.blogspot.com/-GIE1edmD2a4/XczUipnfslI/AAAAAAAAOkI/viRIo7awbJwcDfnGzUI6o0OCF1AWn2VPgCLcBGAsYHQ/s1600/kiem-dinh-do-tin-cay-cronbach-alpha-2.png)

Bước 3: Click chọn Statistic và chọn "Scale if item deleted. Nó cho phép ta xem xét hệ số Cronbach của mô hình khi biến quan sát này bị xóa, ta có thể xem xét loại khỏi mô hình nếu hệ số tăng đáng kể và chắc chắc loại nếu hệ số < .3

![](https://1.bp.blogspot.com/-WWmPWV0tDbY/XczUisCSxnI/AAAAAAAAOkM/63SxxVmRK7sFRcUe6gUX9ZVkW9iHd4_sgCLcBGAsYHQ/s1600/kiem-dinh-do-tin-cay-cronbach-alpha-3.png)

Bước 4: Bấm OK và xuất ra kết quả:

![](https://1.bp.blogspot.com/-JYdEn-rn8ag/XczTMBhsuTI/AAAAAAAAOjw/Z_N_g0AbztIAm2LxJZ39QTW9eXbhaZNxgCLcBGAsYHQ/s1600/phan-tich-cronbach-alpha.png)

Hệ số Cronbach Alpha của mô hình phải lớn hơn .6 và Corrected Item - Total Correlation phải tối thiểu lớn hơn .3

### EFA
Bước 1: Analyze => Dimension Reduction => Factor

![](https://4.bp.blogspot.com/-24iRtnKCQ7U/W0CvlWzP9SI/AAAAAAAAImM/8zAvyZWXDk4DfIA6HKgVZTB0sdMxuQH7QCLcBGAs/s1600/phan-tich-nhan-to-efa-1.jpg)

Bước 2: Click chọn tất cả các biến quan sát. Tip: Chọn biến đầu và Ctrl + biến cuối để chọn tất cả các biến. Lưu ý chọn 4 trường Descriptive, Extraction, Rotation, Option

![](https://4.bp.blogspot.com/-mSm8LHqdEU0/W0CvlS5ycMI/AAAAAAAAImI/noEFCxF8JaoWhs7ou4_JfVq5Os28hFEVgCLcBGAs/s1600/phan-tich-nhan-to-efa-2.jpg)

Bước 3: Descriptive: tick vào KMO và Barlett để hiện bảng kết quả. Chọn Continue để quay về bảng chính

![](https://1.bp.blogspot.com/-pdV9Yd4BcpE/W0Cvk_L70iI/AAAAAAAAImE/-x_ZyRLdqbYpMie5-bomnjz9NlExaN5AwCLcBGAs/s1600/phan-tich-nhan-to-efa-3.jpg)

Bước 4: Extraction:

![](https://2.bp.blogspot.com/-NwsJozsg1A0/W0Cvl4nDXRI/AAAAAAAAImQ/bPoktDdKoH0i8z0Aa5uiDsjhuXrRiwJJwCLcBGAs/s1600/phan-tich-nhan-to-efa-4.jpg)

Bước 5: Rotation: phép quay Varimax

![](https://1.bp.blogspot.com/-IySwFaOp0YY/W0CvmUabr-I/AAAAAAAAImU/0hHTGtTprFY9Y4-dbngeDMEeF6OrRamZwCLcBGAs/s1600/phan-tich-nhan-to-efa-5.jpg)

Bước 6: Option: Sorted by size: biểu diễn ma trận dạng bậc thang. Supress: loại bỏ các biến có hệ số factor loading < .3. Absolute value: min threshold của factor loading

![](https://4.bp.blogspot.com/-JtC_woR5L6E/W0CvmbJfPcI/AAAAAAAAImY/xcnY-LUKU_YtdGY6AhQWDbYrDfx5XYpOQCLcBGAs/s1600/phan-tich-nhan-to-efa-6.jpg)

Bước 7: OK và xuất output

Chỉ cần quan tâm 3 bảng:
KMO và Barlett: Sig < 0.05
Total Variance Explained: Xem tổng phương sai trích và giá trị Eigenvalue
Rotated Components Matrix: Tồn tại một quan sát nào mà có hệ số tải lên 2 nhóm trở lên

