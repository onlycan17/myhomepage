---
title: "JAVA 언어 과제(별 삼각형 찍기 / 구구단 가로 세로 설정)"
date: '2022-12-02'
tags: []
description: "별 과제 / 크기 입력 : 5 / import java.util. ; class Exam2 { public static void main String args { Scanner sc = new Scanner System.in ; Sy"
---

별 과제

/* 크기 입력 : 5

![](/blog/tistory-4-java/1.jpg)

  
    *  
   * *  
  *   *  
 *     *  
* * * * *  
*/  
import java.util.*;  
class Exam2  
{  
 public static void main(String[] args)  
 {  
  Scanner sc = new Scanner(System.in);  
  System.out.print("크기 입력 : ");  
  int star = sc.nextInt();  
  for(int i=1; i<=star;i++){  
   int count=0;  
           for(int k=1; k<=star-i;k++){  
             System.out.print(" ");  
           }

           for(int j=1; j<=i; j++){  
    count++;  
    if(count==1 ||count==i || i==star){  
               System.out.print(" *");  
    }else{System.out.print("  ");}  
           }  
      count=0;  
            System.out.println();  
          }

 }  
}

----------------------------------------------------------------------------------------------

구구단 과제

![](/blog/tistory-4-java/2.jpg)

/*  
구구단  
시작단 : 2  
종료단 : 8  
한줄에 몇단 :3  
곱하기 몇 : 2  
  2단       3단    4단  
2 * 1 = 2   3 * 1 = 3   4*1=4  
2 * 2 = 4   3 * 2 = 6   4*2=8

 5단       6단     7단

  
 8단  
*/  
import java.util.*;  
class Exam  
{  
 public static void main(String args[]){  
     int count;  
  Scanner sc = new Scanner(System.in);

  System.out.println("구구단");  
  System.out.print("시작단 : ");  
  int start = sc.nextInt();  
  System.out.print("종료단 : ");  
  int finish = sc.nextInt();  
  System.out.print("한줄에 몇단 : ");  
  int line1 = sc.nextInt();  
  System.out.print("곱하기 몇 : ");  
  int mul= sc.nextInt();  
  count=start;  
  
  
  for(int i=start;i<=finish/mul;i++){  
   for(int k=0;k<line1;k++){  
        if(count<=finish){  
            System.out.print(count++ + "단     \t");  
     }else{break;}  
       }  
             System.out.print("\n");

  
            for(int l=1;l<=mul;l++){  
    for(int j=start;j<start+line1;j++){  
     if(j<=finish){  
       System.out.print(j+" * "+l+" = "+j*l+"\t");  
     }else{break;}  
       }  
    System.out.print("\n");   
   }  
   start+=line1;  
     }  
  
 }  
}

### '[Java](https://onlycan17.tistory.com/category/Java)' 카테고리의 다른 글

| | [Stream API란](https://onlycan17.tistory.com/11)(0)| 2022.12.07
| | [객체지향 프로그래밍이란? / 함수형 프로그래밍이란?](https://onlycan17.tistory.com/10)(2)| 2022.12.07

---

> 이 글은 제 [Tistory 블로그](https://onlycan17.tistory.com/4)에 처음 게시(2022-12-02)된 글입니다.
