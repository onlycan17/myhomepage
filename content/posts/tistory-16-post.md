---
title: "디자인 패턴"
date: '2022-12-07'
tags: []
description: "디자인 패턴 디자인 패턴 Design Pattern 은 소프트웨어 공학의 소프트웨어 설계에서 공통으로 발생하는 문제에 대해 자주 쓰이는 설계 방법을 정리한 패턴이다. 사용 이유 디자인 패턴을 참고하여 개발할 경우 개발의 효율성과 유지"
---

## 디자인 패턴

> 

디자인 패턴(Design Pattern)은 소프트웨어 공학의 소프트웨어 설계에서 공통으로 발생하는 문제에 대해 자주 쓰이는 설계 방법을 정리한 패턴이다.

## 사용 이유

디자인 패턴을 참고하여 개발할 경우 개발의 효율성과 유지보수성, 운용성이 높아지며 프로그램의 최적화에 도움이 된다.

## 디자인 패턴 종류

## **커맨드패턴**

**커맨트 패턴**(Command pattern)은 이벤트가 발생했을 때 실행될 기능이 다양하면서도 변경이 필요한 경우에 이벤트를 발생시키는 클래스를 변경하지 않고 재사용하고자 할 때 유용하다. 실행될 기능을 캡슐화함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계하는 패턴이다.

한마디로 명령 중심 추상화 패턴이다.

아래의 예제는 눌리면 특정 기능을 수행하는 버튼을 표현한 예제다.

**1. Command**

- 동작을 수행하는 execute 메서드가 포함된 Command 인터페이스

```
public interface Command {
    public abstract void execute();
}
```

**2. Button**

- Button 클래스의 pressed 메서드에서 구체적인 기능(램프 켜기, 끄기)을 직접 구현하는 대신 버튼을 눌렀을 때 실행될 기능을 Button 클래스 외부에서 제공받아 캡슐화해 pressed 메서드에서 호출한다.

```
public class Button {
    private Command command;
  
    public Button(Command command) {
        setCommand(command);
    }
  
    public void setCommand(Command command) {
        this.command = command;
    }
  
    public void pressed() {
        command.execute();
    }
}
```

**3. Lamp**

```
public class Lamp {
    public void turnOn() {
        System.out.println("Lamp On");
    }
  
    public void turnOff() {
        System.out.println("Lamp Off");
    }
}
```

**4. LampOnCommand**

- LampOnCommand 클래스에서는 execute 메서드를 구현해 램프 켜는 기능을 구현한다.

```
public class LampOnCommand implements Command {
    private Lamp lamp;
  
    public LampOnCommand(Lamp lamp) {
        this.lamp = lamp;
    }
  
    public void execute() {
        lamp.turnOn();
    }
}
```

**5. LampOffCommand**

- LampOffComand 클래스에서도 마찬가지로 execute 메서드를 구현해 램프 끄는 기능을 구현한다.

```
public class LampOffCommand implements Command {
    private Lamp lamp;
  
    public LampOffCommand(Lamp lamp) {
        this.lamp = lamp;
    }
  
    public void execute() {
        lamp.turnOff();
    }
}
```

Client 클래스에서는 Command 인터페이스를 구현하는 LampOnCommand와 LampOffCommand 객체를 Button 객체에 설정한다. 그리고 Button 클래스의 pressed 메서드에서 Command 인터페이스의 execute 메서드를 호출할 수 있게 함으로써 LampOnCommand와 LampOffCommand 클래스의 execute 메서드를 실행할 수가 있다.

```
public class Client {
    public static void main(String[] args) {
        Lamp lamp = new Lamp();
        
        Command lampOnCommand = new LampOnCommand(lamp);
        Command lampOffCommand = new LampOffCommand(lamp);
      
        Button button = new Button(lampOnCommand);
        button.pressed();
      	
        button.setCommand(lampOffCommand);
        button.pressed();
    }
}
```

커맨트 패턴은 실행될 기능을 캡슐화함으로써 기능의 실행을 요구하는 호출자(Invoker) 클래스와 실제 기능을 실행하는 수신자(Receiver) 클래스 사이의 의존성을 제거한다. 따라서 실행될 기능의 변경에도 호출자 클래스를 수정 없이 그대로 사용할 수 있도록 해준다.

### '[디자인패턴(JAVA)](https://onlycan17.tistory.com/category/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%28JAVA%29)' 카테고리의 다른 글

| | [전략패턴](https://onlycan17.tistory.com/15)(0)| 2022.12.07
| | [팩토리패턴](https://onlycan17.tistory.com/14)(0)| 2022.12.07
| | [Builder Pattern 빌더 패턴](https://onlycan17.tistory.com/13)(0)| 2022.12.07
| | [싱글톤 패턴이란?](https://onlycan17.tistory.com/12)(0)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/16)에 처음 게시(2022-12-07)된 글입니다.
