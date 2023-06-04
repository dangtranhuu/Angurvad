---
layout: Post
title: Vòng lặp trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-02
useHeaderImage: true
headerImage: /img/in-post/2020-10-07/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Java Core
---

Cùng mình tìm hiểu về vòng lặp **for, forEach, while và do while** trong Java nha ^^

<!-- more -->


# Vòng lặp

Cũng như bài [Điều kiện](), thì đây là một vấn đề có trong mọi ngôn ngữ lập trình.

> Vậy vòng lặp là gì?

**Vòng lặp là cấu trúc lặp đi lặp lại một biểu thức nào đó đến khi nào điều kiện dừng là sai**

Dùng để làm một vấn đề gì đó lặp đi lặp lại, có các kiểu vòng lặp sau :

- **while**
- **do..while**
- **for**
- **for..Each**

---

## 1. Vòng lặp **while**

Như mọi ngôn ngữ đây là vòng lặp lại lặp lại miễn điều kiện là **true**, sẽ thoát khi điều kiện là **false**

**Ví dụ** : 

```java
int i = 0;
while (i < 4){
	System.out.print(i + " ");
	i++; //có này để dần dẫn cho điều kiện thành false
}
// output : 0 1 2 3
```

---

## 2. Vòng lặp **do..while**

Đây là một biến thể của vòng lặp **while**, sẽ thực hiện trước một lần với lệnh **do** và sau đó kiểm tra điều kiện.

**Ví dụ**: 

```java
int i = 0; 
do{
   System.out.print(i + " ");
}while(i < 0)
// output : 0
```

---

## 3. Vòng lặp **for**

Nó là một dạng vòng lặp ngắn gọn nhất,bao gồm 3 phần chính :

- **Initaliztion** : *khởi tạo vòng lặp*
- **Test Statement** : *điều kiện kiểm tra*
- **Iteration Statement** : *bước nhảy của vòng lặp*

**Ví dụ** : 

```java
int [] myArray = {4,5,7,2};
for (int i = 0 ; i < array.length; i++){
   System.out.print(i + " ");
}
// output : 4 5 7 2
```

---

## 4. Vòng lặp **for..Each**

Được sử dụng riêng để lặp ra các phần tử trong 1 **Array**, (*có thể dùng **for** như bình thường*)

**Ví dụ** :

```java
int[] myArray = {5,3,2,6};
for(int index : myArray){
   System.out.print(index + " ");
}
// output : 5 3 2 6
```

---

## 5. Điều khiển vòng lặp

Vậy ta tự hỏi thế này :

> 🤔 Nếu trong một **array** có **10** phần tử, ta **for** từ **0 tới 10**, và ta muốn nó dừng tại 5 thì thế nào ?

Đơn giản là ta có thể dùng **break** để thoát khỏi vòng lặp : 

```java
int[] array = {5,3,8,6};
for(int i : array){
   if(i == 8){
      break;
   }
   System.out.print(i + " ");
}
//output : 5 3
```

> 🤔 Nếu trong một **array** có **10** phần tử, ta **for** từ **0 tới 10**, và muốn tới 5 thì bỏ qua nó thì thể nào ?

Đơn giản là ta có thể dùng **continue** để bỏ qua trường hợp đó :

```java
int[] array = {5,3,8,6};
for(int i : array){
   if(i == 8){
      continue;
   }
   System.out.print(i + " ");
}
//output : 5 3 6
```

## 6. Gắn nhãn vòng lặp

Ta sẽ đúng tới **Label** để điều khiển vòng lặp một cách tốt nhất :

```java
int[] array = {5,3,8,6};
loop:
for(int i in array){
   if(i == 8){
      continue loop;
   }
   System.out.print(i + " ");
}
//output : 5 3 6
```

>  🚀 Tức là nó sẽ đánh dấu vòng lặp đó là **loop**, còn bạn dùng **continue** và **break** lên chính vòng lặp đó.
