(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{315:function(n,h,t){"use strict";t.r(h);var c=t(28),a=Object(c.a)({},(function(){var n=this,h=n.$createElement,t=n._self._c||h;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"lookups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lookups"}},[n._v("#")]),n._v(" Lookups")]),n._v(" "),t("h2",{attrs:{id:"tra-cuu-giay-chung-nhan-da-duoc-cap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tra-cuu-giay-chung-nhan-da-duoc-cap"}},[n._v("#")]),n._v(" Tra cứu giấy chứng nhận đã được cấp")]),n._v(" "),t("p",[n._v("Trường hợp cần tra cứu thông tin của nhãn hiệu đã được cấp bằng, truy cập vào thư viện số sở hữu trí tuệ "),t("a",{attrs:{href:"http://iplib.noip.gov.vn/WebUI/WSearch.php",target:"_blank",rel:"noopener noreferrer"}},[n._v("IPLIB"),t("OutboundLink")],1),n._v(". Nhập dữ liệu nhãn hiệu cần tra cứu:")]),n._v(" "),t("ul",[t("li",[n._v("Nhãn hiệu cần tìm kiếm: là tên của nhãn hiệu cần tra cứu.")]),n._v(" "),t("li",[n._v("Số đơn: format của số đơn thường là "),t("code",[n._v("4-YYYY-ABCDE")]),n._v(". Trong đó "),t("code",[n._v("YYYY")]),n._v(" là số năm nộp đơn, "),t("code",[n._v("ABCDE")]),n._v(" là số đơn.")]),n._v(" "),t("li",[n._v("Số bằng: format của số bằng là 4-ABCDEFG-000. Trong đó, "),t("code",[n._v("ABCDEFG")]),n._v(" là số đơn, còn 3 số 0 cuối là số phiên bản của bằng. Nếu bằng không có chỉnh sửa hoặc thay đổi gì trong quá trình sử dụng và lưu hành thì sẽ luôn có giá trị là "),t("code",[n._v("000")]),n._v(".")])]),n._v(" "),t("h2",{attrs:{id:"tra-cuu-de-danh-gia-kha-nang-cap-bang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tra-cuu-de-danh-gia-kha-nang-cap-bang"}},[n._v("#")]),n._v(" Tra cứu để đánh giá khả năng cấp bằng")]),n._v(" "),t("p",[n._v('Giả sử chúng ta cần đăng ký nhãn hiệu "HoDoCu", trước khi nộp đơn chính thức, chúng ta cần tra cứu và đánh giá khả năng bảo hộ của nhãn hiệu này. Để thực hiện tra cứu chúng ta cần truy cập vào thư viện '),t("a",{attrs:{href:"http://iplib.noip.gov.vn/WebUI/WSearch.php",target:"_blank",rel:"noopener noreferrer"}},[n._v("IPLIB"),t("OutboundLink")],1),n._v(' và nhập thông tin vào trường "Nhãn hiệu" và trường "Nhóm SP/DV" ở 3 cấp độ như sau:')]),n._v(" "),t("h3",{attrs:{id:"_1-tra-cuu-chinh-xac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-tra-cuu-chinh-xac"}},[n._v("#")]),n._v(" 1. Tra cứu chính xác:")]),n._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[n._v("Search: HoDoCU\n")])])]),t("p",[n._v('Nhập đúng nhãn hiệu (trường hợp này là nhập "HoDoCu" ) và nhập nhóm SP/DV (nếu là dược phẩm thì nhập nhóm "05").\nNếu có một nhãn hiệu đã đăng ký trùng 100% trong cùng nhóm thì chắc chắn nhãn hiệu đó sẽ không thể đăng ký. Nếu nhãn hiệu tra cứu nằm trong 1 đối chứng khác, có 2 trường hợp có thể xảy ra:')]),n._v(" "),t("ul",[t("li",[n._v('Nhãn hiệu tra cứu + từ có nghĩa (ví dụ "HoDoCu Great").')]),n._v(" "),t("li",[n._v('Nhãn hiệu tra cứu + nhãn khác đã đăng ký (ví dụ "HoDocu Sandoz")')])]),n._v(" "),t("h3",{attrs:{id:"_2-tra-cuu-nam-trong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-tra-cuu-nam-trong"}},[n._v("#")]),n._v(" 2. Tra cứu nằm trong:")]),n._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[n._v("Search: HoDoCu*\nSearch: *HoDoCu\n")])])]),t("p",[n._v('Tương tự như trên, nhưng chúng ta sẽ xem liệu nhãn hiệu tra cứu có phải là 1 phần trong một đối chứng nào đó không. Chúng ta vẫn nhập nhãn hiệu và số nhóm SP/DV như trên, nhưng thêm ký tự đại diện \'*\' lần lượt vào trước và sau nhãn hiệu tra cứu (lần lượt tra cứu "*HoDoCu" và "HoDoCu*"). Nếu một đối chứng nào đó chứa hoàn toàn nhãn hiệu cần tra cứu thì khả năng đăng ký bảo hộ thành công thấp.')]),n._v(" "),t("h3",{attrs:{id:"_3-tra-cuu-trung-am"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-tra-cuu-trung-am"}},[n._v("#")]),n._v(" 3. Tra cứu trùng âm")]),n._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[n._v("Search: HoDo*, *HoDo\nSearch: DoCu*, *DoCu\nSearch: Ho*Cu\nSearh: *Ho*Cu, Ho*Cu*, *Ho*Cu*\nSearch: *Ho*Do*Cu*\n")])])]),t("p",[n._v('Theo quy định hai nhãn hiệu chỉ khác nhau một âm thì khả năng bảo hộ thấp. Do đó, chúng ta sẽ tách nhãn hiệu cần tra cứu ra và tra cứu tuần tự hai âm để xem liệu có đối chứng nào trùng 2 âm hay không.\nChúng ta sẽ tìm lần lượt "HoDo*", "*HoDo", "DoCu*", "*DoCu", "Ho*Cu"...')]),n._v(" "),t("h2",{attrs:{id:"danh-gia-kha-nang-bao-ho"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#danh-gia-kha-nang-bao-ho"}},[n._v("#")]),n._v(" Đánh giá khả năng bảo hộ")]),n._v(" "),t("p",[n._v("Mặc dù việc tra cứu có thể thực hiện một cách đơn giản và kết quả thu được khá rõ ràng. Tuy nhiên, do dữ liệu công bố của thư viện số sở hữu trí tuệ "),t("a",{attrs:{href:"http://iplib.noip.gov.vn/WebUI/WSearch.php",target:"_blank",rel:"noopener noreferrer"}},[n._v("IPLIB"),t("OutboundLink")],1),n._v(" chưa đầy đủ, và thực tế nhận định có thể rất khác nhau tùy người và tùy hoàn cảnh cụ thể. Do đó, việc đánh giá khả năng bảo hộ của một nhãn hiệu thực tế là một việc rất khó khăn. Vì các lý do này mà việc đánh giá chỉ có thể thực hiện bởi các công ty luật hoặc người của Cục SHTT.")]),n._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ip/trademark/similar.html"}},[n._v("Tham khảo đánh giá tương tự gây nhầm lẫn.")])],1),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("Căn cứ pháp lý")]),n._v(" "),t("p",[n._v("Căn cứ pháp lý cho việc đánh giá là điều 74.2e và điều 90.2 của luật SHTT.")]),n._v(" "),t("p",[t("strong",[n._v("74.2 e)")]),n._v(" Dấu hiệu không phải là nhãn hiệu liên kết trùng hoặc tương tự đến mức gây nhầm lẫn với nhãn hiệu đã được đăng ký cho hàng hoá, dịch vụ trùng hoặc tương tự trên cơ sở đơn đăng ký có ngày nộp đơn hoặc ngày ưu tiên sớm hơn trong trường hợp đơn đăng ký được hưởng quyền ưu tiên, kể cả đơn đăng ký nhãn hiệu được nộp theo điều ước quốc tế mà Cộng hoà xã hội chủ nghĩa Việt Nam là thành viên")]),n._v(" "),t("p",[t("strong",[n._v("90.2")]),n._v(" Trong trường hợp có nhiều đơn đăng ký cùng đáp ứng các điều kiện để được cấp văn bằng bảo hộ và cùng có ngày ưu tiên hoặc ngày nộp đơn sớm nhất thì văn bằng bảo hộ chỉ có thể được cấp cho một đơn duy nhất trong số các đơn đó theo sự thoả thuận của tất cả những người nộp đơn; nếu không thoả thuận được thì tất cả các đơn đều bị từ chối cấp văn bằng bảo hộ.")])]),n._v(" "),t("p",[n._v("Kết quả đánh giá có thể được đọc theo quy ước như sau:")]),n._v(" "),t("ul",[t("li",[n._v("50% - 59% khả năng bảo hộ thấp, có rủi ro khi thực hiện nộp đơn.")]),n._v(" "),t("li",[n._v("60% - 70% có khả năng bảo hộ, có thể nộp đơn trong trường hợp này.")]),n._v(" "),t("li",[n._v("71% trở lên, khả năng bảo hộ cao.")])]),n._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ip/trademark/lookups-eg.html"}},[n._v("Tham khảo một vài trường hợp thực tế.")])],1)])}),[],!1,null,null,null);h.default=a.exports}}]);