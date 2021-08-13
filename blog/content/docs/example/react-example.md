---
weight: 4
title: "Module Federation React Example"
---

## Module Federation React Example

Module Federation là một plugin của webpack 5, nên ta tiến hành cấu hình webpack như sau:   

Import `ModuleFederationPlugin` của webpack (lưu ý module này chỉ có trong webpack 5 trở lên)
```js
// webpack.config
const {ModuleFederationPlugin} = require('webpack').container;
````

Sau đó ta cấu hình plugin trong project `products` như sau
```js
// webpack.config (products project)
 plugins: [
    new ModuleFederationPlugin({
        name: 'Products',
        library: {type: 'var', name: 'Products'},
        filename: 'products.js',
        exposes: {
            './App': './src/App',
        },
        shared: {
            'react': {
                eager: true,
                singleton: true,
                requiredVersion: dependencies.react,
            },
            'react-dom': {
                eager: true,
                singleton: true,
            }
        }
    }),
    new HTMLWebpackPlugin({
        template: path.resolve('public/index.html'),
        filename: './index.html',
        chunksSortMode: 'none'
    })
]
```

Tiếp đó ta cấu hình webpack của project `container` như sau
```js
plugins: [
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            Products: 'Products@http://localhost:8002/products.js',
        }
    }),
    new HTMLWebpackPlugin({
        template: path.resolve('public/index.html'),
        filename: './index.html',
        chunksSortMode: 'none'
    })
]
```

Với thông tin cấu hình trên ta chú ý đoạn `'Products@http://localhost:8002/products.js'` thì `Products` là giá trị `name` trong phần cấu hình ` library: {type: 'var', name: 'Products'}` của file webpack của project `products`

Và `http://localhost:8002/products.js` và domain và file bundle của project `products` sau khi được start lên

Sau đó khi sử dụng ta chỉ việc import như một thư viện hoặc một component bình thường
```jsx
import React from 'react';

const RelatedProducts = React.lazy(() => import('Products/App'));

function App() {
    return (
        <React.Suspense fallback={null}>
            <RelatedProducts />
        </React.Suspense>
    )
}

export default App;
```

Và kết quả sẽ như hình bên dưới

![Iframe](/images/react-example.png)

{{< button href="https://github.com/dotuan9x/micro-frontends/tree/master/react-example" >}}Source code{{< /button >}}

{{< button href="https://micro-frontends.tuando.net/demo/react-example" >}}Demo{{< /button >}}
