---
title: "타입스크립트에서의 함수(Call Signatures)"
date: '2022-12-06'
tags: []
description: "일반적인 함수를 사용해 보면 다음과 같다. function add a:number, b:numger { return a+b } 다음 함수를 화살표 함수로 정의해보면 const add = a:number , b:number = a+b"
---

일반적인 함수를 사용해 보면 다음과 같다. 

```
function add(a:number, b:numger){
	return a+b
}
```

다음 함수를 화살표 함수로 정의해보면 

```
const add = (a:number , b:number) => a+b
```

이런식으로 함수를 작성하면 타입스크립트는 리턴타입이 number임을 유추해낼 수 있다. 

그러면 함수에서 받는 파라미터 a, b의 타입을 유추해서 사용할 수는 없을까?

함수의 리턴타입과 파라미터 타입을 타입스크립트에서는 정의해 줄 수 있다. 

```
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a+b
```

다음과 같이 함수의 타입을 미리 정의해 두고 다음 함수에서 타입을 받아오기 때문에 해당 함수의 타입을 알 수 있고 보다 깔끔한 코드를 작성할 수 있다. 

먼저 함수의 타입을 설명하고 코드를 구현하는 형식으로 작성한다. 

리액트에서 타입스크립트를 채택했다고 했을 때 props로 함수를 보내게 되면, 타입스크립트한테 어떻게 함수가 동작하는지 설명해 줘야 한다. 자주 사용할 수 있으니 알고 있는 것이 좋다. 

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트 제네릭](https://onlycan17.tistory.com/9)(1)| 2022.12.06
| | [타입스크립트 다형성(Polymorphism)](https://onlycan17.tistory.com/8)(0)| 2022.12.06
| | [타입스크립트 오버로딩(Overloading)](https://onlycan17.tistory.com/7)(0)| 2022.12.06
| | [타입 스크립트 기본 문법](https://onlycan17.tistory.com/5)(0)| 2022.12.05
| | [타입스크립트를 써야 하는 이유?](https://onlycan17.tistory.com/2)(0)| 2022.12.02

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/6)에 처음 게시(2022-12-06)된 글입니다.
