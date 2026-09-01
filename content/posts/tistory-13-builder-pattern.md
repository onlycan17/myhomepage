---
title: "Builder Pattern 빌더 패턴"
date: '2022-12-07'
tags: []
description: "Builder Pattern 빌더 패턴 빌더 패턴은 생성자를 이용해 객체를 생성할 때 더 편리하게 해주는 디자인 패턴이다.객체의 구성요소 변수 가 많은 경우,객체 생성자의 input 요소가 많은 경우에는 아래와 같이 생성자가 길어지고"
---

## **Builder Pattern 빌더 패턴**
빌더 패턴은 생성자를 이용해 객체를 생성할 때 더 편리하게 해주는 디자인 패턴이다.객체의 구성요소(변수)가 많은 경우,객체 생성자의 input 요소가 많은 경우에는 아래와 같이 생성자가 길어지고 복잡하게 된다.이런 경우 어느 한 요소가 빠지게 되거나,요소의 순서가 뒤바뀐 경우 에러를 찾아내기가 어려워진다.또는 구성요소가 없어지거나,추가 될때마다 새로운 생성자를 만들어주어야 한다.이런 불편함을 해소하고,객체를 생성할 때 input 요소를 하나씩 넣어줄 수 있도록 해주는 패턴이 빌터 패턴이다.public class Object{  private String a;  private String b;  private String c;  private String d;  private String e;  private String f;  private String g;  private String h;  private String i;  public Object(String a, String b, String c, String d,  String e, String f, String g, String h, String i ){  this.a = a;  this.b = b;  this.c = c;  this.d = d;  this.e = e;  this.f = f;  this.g = g;  this.h = h;  this.i = i;  } } Object object = new Constructor(a, b, c, d, e, f, g, h, i); 

## **빌더 패턴의 장단점**

### **장점**

- 객체 생성을 단계적으로 진행할 수 있고,각 단계를 반복할 수도 있다.
- 동일한 객체 생성 코드를 다른 생성자 형식에서도 재사용할 수 있다.
- 비즈니스 로직에서 복잡한 생성자 로직을 분리할 수 있다.

### **단점**

- 클래스가 많아질수록 코드의 전체적인 복잡도는 늘어날 수 있다.(lombok 패키지의@Builder 로 해결됨.)

## **Builder Pattern 빌더 패턴 구현**
public class ObjectBuilder {  private String a;  private String b;  private String c;  private String d;  public ObjectBuilder setA(String a){  this.a = a;  return this;  }  public ObjectBuilder setB(String b){  this.b = b;  return this;  }  public ObjectBuilder setC(String c){  this.c = c;  return this;  }  public ObjectBuilder setD(String d){  this.d = d;  return this;  }  public Object build(){  return new Object(a,b,c,d);  } } 빌터패턴은 아래와 같이 사용한다.ObjectBuilder builder = new ObjectBuilder(); Object object = builder.setA("a").setC("C").setB("B").setD("D").build(); *위와같이 각 구현클래스를 하나하나 구현하려면 코드가 복잡해 지지만 lombok 패키지를 사용하면 builder 패턴을 간편하게 사용할 수 있다.@Builder @RequiredArgsConstructor public class User {  private final String name;  private final int age;  private final int height;  private final int iq; }

### '[디자인패턴(JAVA)](https://onlycan17.tistory.com/category/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%28JAVA%29)' 카테고리의 다른 글

| | [디자인 패턴](https://onlycan17.tistory.com/16)(0)| 2022.12.07
| | [전략패턴](https://onlycan17.tistory.com/15)(0)| 2022.12.07
| | [팩토리패턴](https://onlycan17.tistory.com/14)(0)| 2022.12.07
| | [싱글톤 패턴이란?](https://onlycan17.tistory.com/12)(0)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/13)에 처음 게시(2022-12-07)된 글입니다.
