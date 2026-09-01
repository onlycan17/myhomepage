---
title: "타입스크립트를 써야 하는 이유?"
date: '2022-12-02'
tags: []
description: "타입스크립트는 자바스크립틍 타입을 부여한 언어다. 자바스크립트의 확장된 언어라고 많이들 설명한다. 그러나 실제 문법을 보면.... 코틀린을 보는듯하고, swift를 보는 듯한? 왜 타입스크립트를 써야할까요? 자바스크립트도 충분히 복잡"
---

타입스크립트는 자바스크립틍 타입을 부여한 언어다.

자바스크립트의 확장된 언어라고 많이들 설명한다. 

그러나 실제 문법을 보면.... 코틀린을 보는듯하고, swift를 보는 듯한?

## 왜 타입스크립트를 써야할까요?

자바스크립트도 충분히 복잡하고 어려운데 왜 또 다른 언어를 배워야 할까요? 단지 최신 기술이라서? 혹은 다른 회사도 많이 사용하니까 우리도 써야 하는 걸까? 라는 고민을 하게 됩니다. 타입스크립트는 아래 2가지 관점에서 자바스크립트 코드의 품질과 개발 생산성을 높일 수 있습니다.

- [에러의 사전 방지](https://joshua1988.github.io/ts/why-ts.html#%EC%97%90%EB%9F%AC%EC%9D%98-%EC%82%AC%EC%A0%84-%EB%B0%A9%EC%A7%80)
- [코드 가이드 및 자동 완성(개발 생산성 향상)](https://joshua1988.github.io/ts/why-ts.html#%EC%BD%94%EB%93%9C-%EC%9E%90%EB%8F%99-%EC%99%84%EC%84%B1%EA%B3%BC-%EA%B0%80%EC%9D%B4%EB%93%9C)

## [#](https://joshua1988.github.io/ts/why-ts.html#%EC%97%90%EB%9F%AC%EC%9D%98-%EC%82%AC%EC%A0%84-%EB%B0%A9%EC%A7%80)에러의 사전 방지

타입스크립트는 에러를 사전에 미리 예방할 수 있습니다. 아래 2개의 코드를 비교하여 어떻게 에러를 사전에 방지할 수 있는지 살펴보겠습니다.

```
// math.js
function sum(a, b) {
  return a + b;
}

```

```
// math.ts
function sum(a: number, b: number) {
  return a + b;
}

```

두 코드 모두 두 숫자의 합을 구하는 함수 코드입니다. 하나는 자바스크립트로 그리고 다른 하나는 타입스크립트로 작성하였죠. 이 함수를 가지고 실제 코드를 작성해보겠습니다.

```
sum(10, 20); // 30

```

이렇게sum함수를 이용하여 숫자 10과 20을 더합니다. 그러면 저희가 원하는 결과인 30을 얻을 수 있습니다. 그런데 만약 아래와 같이 함수를 호출하면 어떻게 될까요?

```
sum('10', '20'); // 1020

```

자바스크립트에 익숙한 분들이라면 위 코드의 결과가 그렇게 헷갈리진 않을 겁니다. 숫자 대신 문자열을 더하기 때문에10 + 20 = 30이 아닌1020이라는 결과가 나타납니다.

이처럼 의도하지 않은 코드의 동작을 예방할 수 있습니다. 아래와 같이 말이죠.

```
// math.ts
function sum(a: number, b: number) {
  return a + b;
}
sum('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.

```

이 코드를 VSCode에서 확인하면 다음과 같은 오류를 확인할 수 있습니다.

![](/blog/tistory-2-post/1.png)

## [#](https://joshua1988.github.io/ts/why-ts.html#%EC%BD%94%EB%93%9C-%EC%9E%90%EB%8F%99-%EC%99%84%EC%84%B1%EA%B3%BC-%EA%B0%80%EC%9D%B4%EB%93%9C)코드 자동 완성과 가이드

타입스크립트의 또 다른 장점은 코드를 작성할 때 개발 툴의 기능을 최대로 활용할 수 있다는 것입니다. 요즘에 프런트엔드 개발을 할 때 가장 많이 사용되는[Visual Studio Code](https://code.visualstudio.com/)는 툴의 내부가 타입스크립트로 작성되어 있어 타입스크립트 개발에 최적화 되어 있습니다.

개발자 관점에서 자바스크립트에 타입이 더해졌을 때 어떠한 장점이 있는지 살펴보기 위해 아래 자바스크립트 코드를 보겠습니다.

```
// math.js
function sum(a, b) {
  return a + b;
}
var total = sum(10, 20);
total.toLocaleString();

```

위 코드는 앞에서 살펴봤던sum()함수를 이용하여 두 숫자의 합을 구한 다음toLocaleString()(특정 언어의 표현 방식에 맞게 숫자를 표기하는 API)를 적용한 코드입니다. 여기서toLocaleString()라는 API가 어떤 역할을 하는지가 중요한게 아니라 위와 같이 코드를 작성할 때total이라는 변수의 타입이 코드를 작성하는 시점에number라는 것을 자바스크립트가 인지하지 못하고 있는게 중요합니다.

달리 말하면, 개발자가 스스로sum()함수의 결과를 예상하고 타입이number라고 가정한 상태에서number의 API인toLocaleString()를 코딩하게 되는 것이죠. 이 과정을 보면 아래와 같습니다.

![](/blog/tistory-2-post/2.gif)

위에서 볼 수 있듯이total이라는 값이 정해져 있지 않기 때문에 자바스크립트 Number에서 제공하는 API인toLocaleString()을 일일이 작성했습니다. 만약에 오탈자라도 나서toLocalString()이라고 했다면 이math.js파일을 브라우저에서 실행했을 때만 오류를 확인할 수 있었을 겁니다.

그런데 만약 아래와 같이 타입스크립트로 작성하면 어떻게 될까요?

```
function sum(a: number, b: number): number {
  return a + b;
}
var total = sum(10, 20);
total.toLocaleString();

```

![](/blog/tistory-2-post/3.gif)

변수total에 대한 타입이 지정되어 있기 때문에 VSCode에서 해당 타입에 대한 API를 미리 보기로 띄워줄 수 있고 따라서, API를 다 일일이 치는 것이 아니라 tab으로 빠르고 정확하게 작성해나갈 수 있습니다.

### '[타입스크립트](https://onlycan17.tistory.com/category/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)' 카테고리의 다른 글

| | [타입스크립트 제네릭](https://onlycan17.tistory.com/9)(1)| 2022.12.06
| | [타입스크립트 다형성(Polymorphism)](https://onlycan17.tistory.com/8)(0)| 2022.12.06
| | [타입스크립트 오버로딩(Overloading)](https://onlycan17.tistory.com/7)(0)| 2022.12.06
| | [타입스크립트에서의 함수(Call Signatures)](https://onlycan17.tistory.com/6)(0)| 2022.12.06
| | [타입 스크립트 기본 문법](https://onlycan17.tistory.com/5)(0)| 2022.12.05

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/2)에 처음 게시(2022-12-02)된 글입니다.
