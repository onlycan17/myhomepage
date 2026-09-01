---
title: "싱글톤 패턴이란?"
date: '2022-12-07'
tags: []
description: "싱글톤 패턴이란? 싱글톤 Singleton 패턴의 정의는 단순하다. 객체의 인스턴스가 오직 1개만 생성 되는 패턴을 의미한다.싱글톤 패턴을 사용하는 이유나 주의할 점은 조금 후에 살펴보기로 하고,어떻게 생겼는지 그 모습을 코드로 먼저"
---

## **싱글톤 패턴이란?**
싱글톤(Singleton)패턴의 정의는 단순하다.**객체의 인스턴스가 오직 1개만 생성**되는 패턴을 의미한다.싱글톤 패턴을 사용하는 이유나 주의할 점은 조금 후에 살펴보기로 하고,어떻게 생겼는지 그 모습을 코드로 먼저 만나보자.싱글톤 패턴을 구현하는 방법은 여러가지가 있지만,여기서는 객체를 미리 생성해두고 가져오는 가장 단순하고 안전한 방법을 소개하겠다.

```
public class Singleton {

private static Singleton instance;

private Singleton() {

// 생성자는 외부에서 호출못하게 private 으로 지정해야 한다.

}

public static Singleton getInstance() {

if(intance == null){

instance = new Singleton();

}

return instance;

}

public void say() {

System.out.println("hi, there");

}

}
```

## **싱글톤 패턴의 사용하는 이유**
위와 같이 인스턴스를 오직 한 개로만 가져가면 어떤 이점이 있을까?가장 먼저 떠올릴 수 있는 이점은 아무래도**메모리 측면**일 것이다.최초 한번의 new 연산자를 통해서 고정된 메모리 영역을 사용하기 때문에 추후 해당 객체에 접근할 때 메모리 낭비를 방지할 수 있다.뿐만 아니라 이미 생성된 인스턴스를 활용하니 속도 측면에서도 이점이 있다고 볼 수 있다.또다른 이점은 다른 클래스 간에**데이터 공유가 쉽다**는 것이다.싱글톤 인스턴스가 전역으로 사용되는 인스턴스이기 때문에 다른 클래스의 인스턴스들이 접근하여 사용할 수 있다.하지만 여러 클래스의 인스턴스에서 싱글톤 인스턴스의 데이터에 동시에 접근하게 되면 동시성 문제가 발생할 수 있으니 이점을 유의해서 설계하는 것이 좋다.이 외에도 도메인 관점에서 인스턴스가 한 개만 존재하는 것을 보증하고 싶은 경우 싱글톤 패턴을 사용하기도 한다.

### '[디자인패턴(JAVA)](https://onlycan17.tistory.com/category/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%28JAVA%29)' 카테고리의 다른 글

| | [디자인 패턴](https://onlycan17.tistory.com/16)(0)| 2022.12.07
| | [전략패턴](https://onlycan17.tistory.com/15)(0)| 2022.12.07
| | [팩토리패턴](https://onlycan17.tistory.com/14)(0)| 2022.12.07
| | [Builder Pattern 빌더 패턴](https://onlycan17.tistory.com/13)(0)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/12)에 처음 게시(2022-12-07)된 글입니다.
