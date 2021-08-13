---
weight: 3
title: "Web components"
---

## Web components

Để khai báo một HTML Custom Element ta thực hiện như sau:
```jsx
// /web-components/products/src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

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

Trong file `index.html` của project `container` ta load bundle file của project `products`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>The Model Store</title>
    <script src="https://micro-frontends.tuando.net/demo/web-components/products/dist/main.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>

```

Tiếp đến ta gắn HTML ta ` <web-components-products />` vào chỗ cần hiện thị trong project `container`
```jsx
import React from 'react';

const App = () => {
  return (
    <>
      <h1>The model store</h1>
      <web-components-products />
    </>
  )
};

export default App;
```

![Iframe](/images/react-example.png)

{{< button href="https://github.com/dotuan9x/micro-frontends/tree/master/web-components" >}}Source code{{< /button >}}

{{< button href="https://micro-frontends.tuando.net/demo/web-components" >}}Demo{{< /button >}}
