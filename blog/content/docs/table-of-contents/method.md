---
weight: 3
title: "Một số phương pháp triển khai Micro Frontends"
---

## Một số phương pháp triển khai Micro Frontends
### **Build-time integration**
là việc coi các ứng dụng như một package và ứng dụng chính sẽ thêm các ứng dụng con như một thư viện như sau:

```json
{
  "name": "@feed-me/container",
  "version": "1.0.0",
  "description": "A food delivery web app",
  "dependencies": {
    "@feed-me/browse-restaurants": "^1.2.3",
    "@feed-me/order-food": "^4.5.6",
    "@feed-me/user-profile": "^7.8.9"
  }
}
```

Cách tiếp cận này có một số hạn chế như:
- Chúng ta sẽ phải re-compile (bundle) các ứng dụng chính và release lại mỗi khi các ứng dụng con có thay đổi (release version mới từ 0.0.1 ⇒ 0.02)
- Không có sự đồng bộ chức năng giữa các ứng dụng chính nếu chúng ta bỏ xót quá trình đồng bộ version của ứng dụng con (Cũng có thể là một điểm lợi nếu chúng ta không muốn nâng cấp chức năng ở một trang nào đó)
- Phụ thuộc các dependences với nhau
    - Nếu project `@feed-me/container` sử dụng React và `@feed-me/browse-restaurants` cũng sử dụng React thì sẽ bị trùng lập thư viện và tăng dung lượng khi tải trang web
    - Nếu project `@feed-me/container` sử dụng React và  `@feed-me/browse-restaurants` sử dụng chung React với project chính thì sẽ bị phụ thuộc vào version của project chính.

### **Run-time integration via iframes**
```html
<html>
  <head>
    <title>Feed me!</title>
  </head>
  <body>
    <h1>Welcome to Feed me!</h1>

    <iframe id="micro-frontend-container"></iframe>

    <script type="text/javascript">
      const microFrontendsByRoute = {
        '/': 'https://browse.example.com/index.html',
        '/order-food': 'https://order.example.com/index.html',
        '/user-profile': 'https://profile.example.com/index.html',
      };

      const iframe = document.getElementById('micro-frontend-container');
      iframe.src = microFrontendsByRoute[window.location.pathname];
    </script>
  </body>
</html>
```
Mỗi lần thay đổi url từ https://acb.com/ sang https://acb.com/order-food phần nội dụng của trang sẽ được tải lại bởi một nội dung từ domain khác, trong ví dụ là https://order.example.com/index.html.

Ưu điểm:
- Không bị ảnh hưởng bởi styles (CSS) giữa các trang chính và trang trong iframe

Hạn chế:
- Phải tải lại toàn bộ trang khi thay đổi đường dẫn
- Khó khăn trong việc giao tiếp giữa các chức năng

Tham khảo ví dụ: https://micro-frontends.tuando.net/docs/example/iframes/

### **Run-time integration via JavaScript**

### **Run-time integration via Web Components**
Cách tiếp cận này cho phép chúng ta khai báo một HTML Custom Element, ví dụ như ta khai báo một HTML Custom Element `<footer-order></footer-order>` thì chỗ nào muốn sử dụng ta chỉ cần chèn đoạn mã `<footer-order></footer-order>` là có thể sử dụng được rồi.


Tham khảo ví dụ: https://micro-frontends.tuando.net/docs/example/web-components/

### **Module Federation Webpack 5**
Module Federation là một tính năng mới của Webpack 5. Nó cho phép chúng ta cấu hình để một ứng dụng có thể dynamic load code từ một ứng dụng khác.

Hiểu đơn giản là chúng ta có 2 ứng dụng được phát triển độc lập A và B, ứng dụng B là một phần nhỏ chức năng của ứng dụng A. Module Federation sẽ cho phép ta nhúng ứng dụng B và ứng dụng A và chia sẻ tài nguyên giữa chúng.

Chi tiết các bạn tham khảo tài liệu tại [Module Federation](https://webpack.js.org/concepts/module-federation/) và các ví dụ tại [Module Federation Examples](https://github.com/module-federation/module-federation-examples)


Tham khảo ví dụ: 

React: https://micro-frontends.tuando.net/docs/example/react-example/

React: https://micro-frontends.tuando.net/docs/example/react-redux/

### ***Tài liệu tham khảo:****

https://martinfowler.com/articles/micro-frontends.html

https://micro-frontends.org/