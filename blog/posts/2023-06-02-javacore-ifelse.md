---
layout: Post
title: Cấu trúc rẽ nhánh trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-02
useHeaderImage: true
headerImage: /img/in-post/2020-08-24/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Java Core
---

Cùng mình tìm hiểu về Cấu trúc rẽ nhánh trong Java nha

<!-- more -->

## Câu lệnh điều kiện

Trong các ngôn ngữ thì luôn luôn có cái này, mình sẽ không nhiều mà đi thẳng đến chi tiết

Có **2** loại câu điều kiện :

- **if..else** : xem [tại đây](https://www.youtube.com/watch?v=h3fgxLlmnUQ)
- **switch..case** : xem [tại đây](https://www.youtube.com/watch?v=IgNvSHjWxfY)

---

## 1. Lệnh if..else

Nó cũng giống như các ngôn ngữ khác thôi, **if** là nếu, **else if** là còn nếu, **else** là các trường hợp còn lại, cụ thể sau đây : 

- Sử dụng **if** để xác định điều kiện **đúng** để thực thi
- Sử dụng **else if** để xác định các điều **đúng** tiếp theo kiểm tra, sau khi **if** sai
- Sử dụng **else** để xác định các điều kiện **sai**

```java
int date = 2; 
if(date == 2){
    System.out.println("Date của bạn là 2");
}
else if(date == 3){
    System.out.println("Date của bạn là thứ 3");
}
else{
    System.out.println("Date của bạn khác mọi cái trên");
}
// output : Date của bạn là 2
```

 Có 1 loại kiểu rút gọn của **if..else** là **toán tử 3 ngôi** (*có thể tham khảo*), có cú pháp :

 Biến **=** (điều kiện ) **?** Thực thi  **true** **:** Thực thi **false** **;**

**Dạng** [if..else]() : 

```java
int date = 2;
if(date == 2)
   System.out.println("Date là thứ 2");
else
    System.out.println("Date không phải là thứ 2")
// Output : Date là thứ 2
 ```

 **Dạng** [toán tử 3 ngôi]() : 
 
 ```java
 int date = 2;
 String result = (date == 2) ? "Date là thứ 2" : "Date là thứ 2";
System.out.println(result);
// Output : Date là thứ 2
```

---

## 2. Lệnh switch..case

Nó cũng tương đương với **if..else**, nhưng nếu bạn đặt điều kiện chỉ so sánh với **giá trị nguyên** thì đây sẽ thích hợp cho bạn như sau;

```java
int date = 3;
switch(date){
    case 1 : "Date là 1"; break;
    case 2 : "Date là 2"; break;
    case 3 : "Date là 3"; break;
    case 4 : "Date là 4"; break;
default:
    "Các Date còn lại";
    break;
}
// output : Date là 3
```
::: warning
 🚀 Như bạn có thể thấy thì **switch..case** có những lưu ý sau :

 - Các **case** là trường hợp của biến **date** và chỉ chấp nhận **số nguyên**
 - Cuối **case** phải có **break** để thoát vòng điều kiện
 - **default** tương ứng với **else** là các trường hợp còn lại
 - Có thể gộp nhiều **case** lại, như **case 1,2,3:**
:::



<!-- https://youtu.be/TZ7O5JL35zk -->
<iframe width="100%" height="450" src="https://www.youtube.com/embed/TZ7O5JL35zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

