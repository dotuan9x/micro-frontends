# Web components

Cách cài đặt và sử dụng
```shell
# Cài đặt các package cần thiết
npm install

# Chạy ứng dụng
npm start
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>The Model Store</title>
    <link href="https://unpkg.com/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet">
    <script src="http://localhost:8002/main.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>

```

Khai báo HTML Custom Element có tên là `web-components-products`
```jsx
class Webcomponents extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        ReactDOM.render(<App />, this);
    }
}

customElements.define('web-components-products', Webcomponents);
```

Sau đó ở project `container` ta sử dụng bằng cách sử dụng HTML tag `<web-components-products />`
```jsx
import React from 'react';

function App() {
    return (
        <>
            <h1>Welcome to Web components</h1>
            <div className="products">
                <web-components-products />
            </div>
        </>
    )
}

export default App;
```
