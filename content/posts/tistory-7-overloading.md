---
title: "타입스크립트 오버로딩(Overloading)"
date: '2022-12-06'
tags: []
description: "보통 실무를 하면 일일이 개발자가 코드를 작성하지 않고 외부 라이브러리나 플러그인을 가져다가 사용한다. 이런 패키지나 라이브러리들은 오버로딩을 엄청 많이 사용한다. 그래서 사용자는 오버로딩이 어떻게 생겨먹은 놈인지 우리한태 매우 중요"
---

보통 실무를 하면 일일이 개발자가 코드를 작성하지 않고 외부 라이브러리나 플러그인을 가져다가 사용한다. 

이런 패키지나 라이브러리들은 오버로딩을 엄청 많이 사용한다. 

그래서 사용자는 오버로딩이 어떻게 생겨먹은 놈인지 우리한태 매우 중요하다. 

앞서서 우리는 Call Signatures를 배웠는데 

```
type Add = {
	(a:number, b:number) : number
   }
const add: Add = (a,b) => a+b
```

다음과 같이 type에 {}를 씌워서 사용도 가능하다. 이런 방법이 가능한 이유는 오버로딩 때문이다. 

오버로딩은 함수가 여러개의 call signatures를 가지고 있을 때 발생시킨다. 

그냥 여러 개가 아니라 서로 다른 여러개의 call signatures를 가졌을 때다. 그때 오버로딩이 발생한다. 

```
type Add = {
	(a: number, b: number) : number
    (a: number, b: string) : number
}

const add: Add = (a, b) => a + b // b가 number일수도 있고 string일 수도 있기 때문에 에러발생 

const add: Add = (a,b) => {
	if(typeof b === "string") return a
    return a+b
}
```

물론 이런식으로 함수를 짤 일이 없겠지만 오버로딩의 개념을 이해하는 용도로 보면 좋을 것 같다.

다시 말하면, 오버로딩은 여러 call signatures가 있는 함수일 뿐이다.

이것을 실제 업무에 사용 할 법 한지는 다음 예제를 보도록 하자.

```
type Config = {
	path: string,
    state: object,
}

type Push = {
	(path:string):void
    (config: Config):void
}

const push:Push = (config) => {
	if(typeof config === "string"){
    	console.log(config)
    }
    else {
    	console.log(config.path, config.state)
       
    }
}
```

 보통 리액트 Nextjs에서 라우터 푸쉬를 호출한다고 했을때 타입스크립트를 채용 했다면 다음과 같이 타입을 지정해서 사용할 경우가 생길 것이다.  상황에 따라서 타입을 서로 다른 것을 보낼 경우가 발생할 수 있다. 

타입스크립트는 내부에서 그 타입을 체크하도록 해준다. 

개념은 쉬운편이다. 다만 Java같은 객체지향 언어를 생각하고 접근하면 굉장히 이질적이고 생소하게 느껴질 수 있을 것이다. 

위에 오버로딩은 타입스크립트관점에서의 오버로딩이고 타입체크 관점에서 편의를 위해 고안된 방법론이라고 접근했을 때 좀 더 친숙하게 이해할 수 있을 것 같다.

추가로 다음과 같이 오버로딩을 작성할 수 있으니 참고하자 

```
type Add = {
	(a:number, b:number) :number
    (a:number, b:number, c:number) :number,
}

const add:Add = (a,b,c?:number) => {
	if(c) return a + b + c
    return a+b
}

add(1,2)
add(1,2,3)
```

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트 제네릭](https://onlycan17.tistory.com/9)(1)| 2022.12.06
| | [타입스크립트 다형성(Polymorphism)](https://onlycan17.tistory.com/8)(0)| 2022.12.06
| | [타입스크립트에서의 함수(Call Signatures)](https://onlycan17.tistory.com/6)(0)| 2022.12.06
| | [타입 스크립트 기본 문법](https://onlycan17.tistory.com/5)(0)| 2022.12.05
| | [타입스크립트를 써야 하는 이유?](https://onlycan17.tistory.com/2)(0)| 2022.12.02

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/7)에 처음 게시(2022-12-06)된 글입니다.
