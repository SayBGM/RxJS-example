# React-Variety-Example
React를 공부하면서 다양한 라이브러리들을 어떻게 결합하는지 연구 해보는 레포입니다.

Rxjs, Web3, axios, Lottie등의 다양한 라이브러리 예제등을 올릴 예정이며 추후 라이브러리를 어떻게 만드는 지에 대하여 알아볼 생각입니다.

## Rxjs
  ### 소개
 - [ReactiveX](http://reactivex.io/) 프로젝트에서 출발한 리액티브 프로그래밍을 지원하는 자바스크립트 라이브러리
 - 이벤트 스트림을 옵저버블(Observable)이라는 객체로 표현한 후 비동기 이벤트 기반의 프로그램 작성을 도움
 - 이벤트 처리를 위한 API로 다양한 연산자를 제공하는 함수형 프로그래밍 기법이 도입되어 있음
 - 이는 리액티브 프로그래밍을 쉽게 해주는 장점을 가지고 있음

### 내가 왜 써야될까?
[![Video Label](http://img.youtube.com/vi/2f09-veX4HA/0.jpg)](https://youtu.be/2f09-veX4HA)
- FEconf 2017에서 발표하신 손찬욱님의 말에 따르면 다음과 같다.

  Rxjs는 일관된 방식으로 안전하게 데이터 흐름을 처리하는 라이브러리이다.
  모든 어플리케이션은 궁극적으로 상태머신이다.
  (입력을 받고 그에 따른 로직을 통해 상태를   변환시키거나 불러와서 출력하는 형태)

  개발자가 처리하는 입력값이란?
   - 사용자가 입력하는 값(마우스, 키보드)
   - 함수의 반환값
   - 배열 데이터
   - DB 데이터, 서버가 넘겨주는 데이터

  그런데 어떤거는 동기, 어떤거는 비동기로 처리... 
  ![image](https://user-images.githubusercontent.com/28648915/49361570-bc4cd980-f71f-11e8-8900-1421a711d71d.png)(손찬욱님 PPT 중)
  
  이렇게 처리할 거면 하나의 방식으로 처리하자(인터페이스의 단일화)

 ### 사용하는 웹페이지 [출처](https://www.wappalyzer.com/technologies/rxjs)
 <img width="1378" alt="2018-12-01 11 27 05" src="https://user-images.githubusercontent.com/28648915/49329345-a4127880-f5c0-11e8-97d2-d14461decbf5.png">