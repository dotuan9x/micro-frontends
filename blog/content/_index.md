# Micro frontends
## Giới thiệu
Hiện nay, các ứng dụng Single Page Apps (SPAs) cực kỳ phổ biến, chúng có nhiều tính năng và cũng rất phức tạp và thường được kết hợp với kiến trúc Microservices ở tầng backend. Sau một thời gian phát triển, các ứng dụng SPAs này trở nên cồng kềnh, và khó hơn cho việc maintain và chúng được gọi là Frontend Monolith.

Trong những năm trở lại đây, việc áp dụng những concepts từ Microservices vào các ứng dụng Frontend được nhắc đến khá thường xuyên. Ý tưởng của Micro Frontends đó là sẽ phân tách các ứng dụng này thành các phần kết hợp của các tính năng, mỗi tính năng có thể được phát triển bới một team độc lập.

![Micro Frontends](/images/the-monolith.png)
Các mô hình phát triển phần mềm từ trước khi có sự ra đời của Micro frontends. Nguồn: https://micro-frontends.org/

**The Monolith:** một team phát triển toàn bộ các thành phần của sản phẩm từ Database, Backend, Frontend ⇒ Sẽ gặp một vấn đề khi sản phẩm lớn lên như sau:

- Không phải thành viên nào trong team cũng có thể làm được cả frontend và backend (Làm gì có một Junior developer có thể sáng code React và chiều code Golang một cách đỉnh cao được)
- Sản phẩm lớn, khối lượng kiến thức nhiều sẽ có khó thành viên nào nắm và hiểu sau được cả về frontend và backend
