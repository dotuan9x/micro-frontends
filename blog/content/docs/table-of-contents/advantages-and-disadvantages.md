---
weight: 2
title: "Một số ưu điểm và nhược điểm của Micro Frontends"
---

## Một số ưu điểm và nhược điểm của Micro Frontends
### Ưu điểm
![Micro Frontends](/images/advantages.png)

Tách biệt các module chức năng thành nhiều phần source code riêng biệt. Từ đó giảm các dependence ở mỗi project, lượng code sẽ ít hơn, giúp cho quá trình build deploy nhanh hơn và các file js bundle cũng sẽ nhẹ hơn

Có khả năng mở rộng một cách dễ dàng bằng cách nhiều team cùng tham gia

Có khả năng nâng cấp, cập nhật thư viện hoặc phát triển lại một phần nào đó của dự án

Dễ dàng kiểm thử (testing) các chức năng một cách độc lập

### Nhược điểm

Chia nhỏ các dự án sẽ dẫn tới trùng lập các dependences hoặc source code

Nhiều team phát triển nên khó trong việc quản lý source code nếu không có quy định chung rõ ràng từ ban đầu