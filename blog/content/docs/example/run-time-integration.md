---
weight: 2
title: "Run-time integration via JavaScript"
---

## Run-time integration via JavaScript

Trong React thông thường file `index.jsx` ta sẽ render `<App />` vào trong một div element có id là root như `<div id="root"></div>`

```jsx
// /run-time-integration/products/src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Ta sẽ chỉnh lại như sau, khai báo một function global `renderProducts` truyển vào parameter `containerId` và tiến hành sử dụng ReactDOM render `<App />` vào trong element này.

```jsx
// /run-time-integration/products/src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.renderProducts = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
    );
};

```

Trong file index.html của `container`, ta load script file bundle của project `products` và sau đó gọi global function `renderProducts` để render app `products` vào trong ứng dụng `container`

```html
<!-- /run-time-integration/container/public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>The Model Store</title>
    <link href="https://unpkg.com/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet">
    <!-- Load file bundle của project products  -->
    <script src="http://localhost:8002/main.js"></script>
</head>
<body>
    <div id="root"></div>

    <!-- Gọi function renderProducts để render app products vào element id có name products -->
    <script type="text/javascript">
        window.onload = () => {
            window.renderProducts('products')
        }
    </script>
</body>
</html>
```

Và kết quả sẽ như sau, ứng dụng `container` đã có thêm phần Related products của ứng dụng `products`
![Iframe](/images/react-example.png)

{{< button href="https://github.com/dotuan9x/micro-frontends/tree/master/run-time-integration" >}}Source code{{< /button >}}

{{< button href="https://micro-frontends.tuando.net/demo/run-time-integration#/" >}}Demo{{< /button >}}
