# Angular React Example

Tích hợp một dự án sử dụng thư viện React (thư mục `products`) vô một dự án sử dụng Framework Angular (thư mục `container`)

## Thư mục container (Angular)
Sử dụng `ng cli` để tạo project bằng câu lệnh `ng new container`. Tiếp đến để để sử dụng Web components ta phải import thêm `CUSTOM_ELEMENTS_SCHEMA` từ `@angular/core` như sau

```ts
// angular-react/container/src/app/app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Tiếp đến ở file `container/src/index.html` đừng quên gắn script file của project `products` nhé

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Container</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://unpkg.com/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet">
  <script src="https://micro-frontends.tuando.net/demo/angular-react/products/dist/main.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

Tiếp theo trong file `container/src/app/app.component.html` ta gắn HTML Custom Element mình đã khai báo của project `products` như sau

```html
<div class="p-1">
    <web-components-products></web-components-products>
  </div>
```

Thế là có ngay một website xịn sò sử dụng giữa 2 công nghệ Angular và React

Chỉnh một số cấu hình trong file `angular.json` để phục vụ cho quá trình build và deploy
```shell
"deployUrl": "https://micro-frontends.tuando.net/demo/angular-react/container/dist/", # Thay đổi domain load các static file 
"index": {
  "input": "src/index.html",
  "output": "../../index.html" # Thay đổi vị trí của file index.html sau khi build
},
```

## Thư mục products (ReactJS)
