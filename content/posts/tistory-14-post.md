---
title: "팩토리패턴"
date: '2022-12-07'
tags: []
description: "팩토리패턴 팩토리 패턴 사용이유객체를 생성하는 코드를 분리하여 클라이언트 코드와 결합도 의존성 를 낮추어 클라이언트측의 코드 수정을 최소화 하기 위해 사용객체지향 특성 중 다형성과 객체를 생성하는 클래스를 분리하여 결합도를 낮추고 객"
---

## 팩토리패턴
팩토리 패턴 사용이유객체를 생성하는 코드를 분리하여 클라이언트 코드와 결합도(의존성)를 낮추어 클라이언트측의 코드 수정을 최소화 하기 위해 사용객체지향 특성 중 다형성과 객체를 생성하는 클래스를 분리하여 결합도를 낮추고 객체의 추가 수정이 발생하더라도 클라이언트 측의 수정을 최소화 할 수 있다.

## 팩토리 패턴 종류

## *팩토리 메서드 패턴

## *추상 팩토리 패턴
팩토리 메서드 패턴객체를 생성하는 인터페이스는 미리 정의 하되,객체 생성은 서브 클래스(팩토리)로 위임하는 패턴객체를 생성해서 반환하는 것을 말한다.즉,결과값이 객체인 것이다.public interface NoteBook{}public class LGNotebook implements Notebook {public LGNotebook(){ `System.out.println('LG 노트북');` }}public class SamSungNotebook implements Notebook {public SamSungNotebook(){System.out.println('Samsung 노트북'); `}` }public class NotebookFactory {public Notebook createNotebook(String type) {Notebook notebook = null; `switch(type){` case "LG":notebook = new LGNotebook();break;case "SamSung":notebook = new SamSungNotebook();break;}return notebook;}}MouseFactory의 입력값에 따라 LGMouse 객체를 생성할지 SamSungMouse 객체를 생성할지 결정public interface Mouse {}public class LGMouse implements Mouse{public LGMouse() {System.out.println("LG 마우스");}}public class SamSungMouse implements Mouse{public SamSungMouse(){System.out.print.ln("SamSung 마우스");}}ComputerFactory클래스에서 어떤 제조사의 노트북과 마우스를 선택할지 결정public class ComputerFactory{public void createComputer(String styp){NotebookFactory notebookFactory = new NotebookFactory();MouseFactory mouseFactory = new MouseFactory();noteBookFactory.createNotebook(type);mousefactory.createMouse(type);System.out.println("—-"+type+"컴퓨터 완성 —-");}}테스트public class factoryMethodPatterMain{public static void main(){ComputerFactory computerFactory = new ComputerFactory();computerFactory.createComputer("LG");}}컴퓨터는 다양한 부품이 존재한다.부품이 증가할수록 ComputerFactory에 해당 부품 Factory 객체가 증가되어야 한다.추상 팩토리 패턴서로 연관되거나 의존적인 객체들의 조합을 만드는 인터페이스를 제공하는 패턴각각의 ComputerFactory에서 Notebook 과 Mouse를 create 한다.public interface NewComputerFactory {public Notebook createNotebook();public Mouse createMouse();}public class LGComputerFactory implements NewComputerFactory{public LGNotebook createNotebook(){return new LGNotebook();}public LGMouse createMouse(){return new LGMouse();}}public class SamSungComputerFactory implements NewComputerFactory{public SamSungNotebook createNotebook(){return new SamSungNotebook();}public SamSungMouse createMouse(){return new SamSungMouse();}}public class Factory{public void createComputer(String type){NewComputerFactory newcomputerFactory = null;switch(type){case "LG":newcomputerFactory = new LGComputerFactory();break;case "SamSung":newcomputerFactory = new SamSungComputerFactory();break;}newcomputerFactory.createNotebook();newcomputerFactory.createMouse();}}테스트public class AbstracteFactorypatternMain {public static void main(){Factory computerFactory = new Factory();computerFactory.createComputer("LG");}}팩토리 메서드 패턴은 각각 다른 객체들이 필요할때 사용하며,추상팩토리 패턴은 서로 연관 있는 객체들의 조합이 필요할 때 사용한다.

### '[디자인패턴(JAVA)](https://onlycan17.tistory.com/category/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%28JAVA%29)' 카테고리의 다른 글

| | [디자인 패턴](https://onlycan17.tistory.com/16)(0)| 2022.12.07
| | [전략패턴](https://onlycan17.tistory.com/15)(0)| 2022.12.07
| | [Builder Pattern 빌더 패턴](https://onlycan17.tistory.com/13)(0)| 2022.12.07
| | [싱글톤 패턴이란?](https://onlycan17.tistory.com/12)(0)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/14)에 처음 게시(2022-12-07)된 글입니다.
