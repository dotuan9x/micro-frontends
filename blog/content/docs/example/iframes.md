---
weight: 1
title: "Iframes"
---

## Iframe example

Để triển khai `iframe` thì đơn giản khỏi phải nói luôn. Ta chỉ cần chèn HTML tag `<iframe src="example.com"></iframe>` là có ngay một app khác xịn sò vào trong ứng dụng của mình liền. 

Demo: Mình sẽ demo iframe bằng cách gắn một app khác (app `products` hiện thị các sản phẩm liên quan) vào một app chính như hình bên dưới. 

![Iframe](/images/react-example.png)

Trong file `App.jsx` của project `container` đã chèn HTML tag iframe như bên dưới, và kết quả sẽ như hình bên trên. Ta có chức năng Related products nằm bên trong app `container`
```jsx
// iframes/container/src/App.jsx
<div className="p-1" style={{width: 210}}>
    <iframe className="w-full h-full" src="https://micro-frontends.tuando.net/demo/react-example/products#/" />
</div>
```

{{< button href="https://github.com/dotuan9x/micro-frontends/tree/master/iframes" >}}Source code{{< /button >}}

{{< button href="https://micro-frontends.tuando.net/demo/iframes" >}}Demo{{< /button >}}
