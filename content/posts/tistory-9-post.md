---
title: "타입스크립트 제네릭"
date: '2022-12-06'
tags: []
description: "제네릭은 대부분 언어에서 지원하는 개념 중 하나다. 코딩을 하다보면 어떠한 데이터타입을 명시적으로 가져올 수 없거나 동적으로 유연하게 동작하기 원하는 경우가 있는데 이럴경우 제네릭을 보통 사용한다. 제네릭은 대문자로 시작하는 아무 문"
---

제네릭은 대부분 언어에서 지원하는 개념 중 하나다. 

코딩을 하다보면 어떠한 데이터타입을 명시적으로 가져올 수 없거나 동적으로 유연하게 동작하기 원하는 경우가 있는데 

이럴경우 제네릭을 보통 사용한다. 

제네릭은 대문자로 시작하는 아무 문자로나 정의할 수 있다. 

```
type Player<E> = {
 name:string
 extraInfo:E
}

//이렇게 정의할 수도 있음 
//1. type NicoPlayer = Player<{favFood:string}>

//2. type NicoExtra = {
// favFood:string
//}
// type NicoPlayer = Player<NicoExtra>

//const name: Player<{favFood:string}> = {
//1. const name: Player<NicoPlayer> = {
	name:"nico",
    extraInfo: {
    	favFood:"kimchi"
    }
}
```

해당 소스처럼 제네릭소스를 분리하고 확장할 수 있다. 타입을 여러개 다이나믹하게 구성해야 할 경우 제네릭을 사용하면 유용하다. 

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트의 인터페이스(interface)](https://onlycan17.tistory.com/22)(0)| 2022.12.08
| | [타입스크립트 다형성(Polymorphism)](https://onlycan17.tistory.com/8)(0)| 2022.12.06
| | [타입스크립트 오버로딩(Overloading)](https://onlycan17.tistory.com/7)(0)| 2022.12.06
| | [타입스크립트에서의 함수(Call Signatures)](https://onlycan17.tistory.com/6)(0)| 2022.12.06
| | [타입 스크립트 기본 문법](https://onlycan17.tistory.com/5)(0)| 2022.12.05

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/9)에 처음 게시(2022-12-06)된 글입니다.
