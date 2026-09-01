---
title: "타입스크립트 다형성(Polymorphism)"
date: '2022-12-06'
tags: []
description: "앞서 오버로딩을 배울때도 눈치를 챗겠지만 타입스크립트의 다형성은 Java같은 객제지향 언어의 다형성과 느낌이 다르다. 함수로서의 개념과 클래스로서의 개념이 다르듯 이것 도 그러한데 여기에서 다형성 polymorphous 은... 일단"
---

앞서 오버로딩을 배울때도 눈치를 챗겠지만 타입스크립트의 다형성은 Java같은 객제지향 언어의 다형성과 느낌이 다르다. 

함수로서의 개념과 클래스로서의 개념이 다르듯 이것 도 그러한데 여기에서 다형성(polymorphous)은... 일단 다음 예제를 보자... 

```
type SuperPrint = {
	(arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
}

const superPrint: SuperPrint = (arr) => {
	arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true,false,true])
superPrint(["a","b","c"])
```

각각의 타입별로 타입을 각각 선언하고 다음과 같이 함수를 호출하였다. 그런데 모양이 같은데 타입이 다르기 때문에 한번더 타입을 추가로 만드는 이런 모양이 과연 효율적인 방법일까? 다형성을 이용하면 더 효율적인 모양을 만들 수 있다.  제네릭과 함께 사용하면 된다. 

우리가 call signatuer를 작성할때, 여기에 들어올 확실한 타입을 모르거나, 어떤 조건에 따라 다른 타입을 동적으로 가지고 올 필요가 있을때 generic을 사용할 수 있다. 

```
type SuperPrint = {
	<TypePlaceholer>(arr: TypePlaceholder[]):void
}

const superPrint: SuperPrint = (arr) => {
	arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true, false, true])
superPrint(["a","b","C"])
superPrint([1,2,true,false])
```

위와 같이 제네릭을 사용하면 선언 타입은 들어오는 값들에 따라 타입스크립트가 유추할 수 있기 때문에 다양한 타입을 효율적으로 가져올 수 있도록 하기 위해 다음과 같이 다형성을 이용할 수 있다. 

만약 리턴타입도 다이나믹한 설정이 필요 하다면 다음 과 같이 사용 할 수 있다. 

```
type SuperPrint = {
	<TypePlaceholer>(arr: TypePlaceholder[]):TypePlaceholder
}

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,4])
superPrint([true, false, true])
superPrint(["a","b","C"])
superPrint([1,2,true,false])
```

이처럼 다형성은 타입의 다양한 형태를 가질 수 있는 것 이라고 하면 이해하면 될 것 같다.

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트의 인터페이스(interface)](https://onlycan17.tistory.com/22)(0)| 2022.12.08
| | [타입스크립트 제네릭](https://onlycan17.tistory.com/9)(1)| 2022.12.06
| | [타입스크립트 오버로딩(Overloading)](https://onlycan17.tistory.com/7)(0)| 2022.12.06
| | [타입스크립트에서의 함수(Call Signatures)](https://onlycan17.tistory.com/6)(0)| 2022.12.06
| | [타입 스크립트 기본 문법](https://onlycan17.tistory.com/5)(0)| 2022.12.05

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/8)에 처음 게시(2022-12-06)된 글입니다.
