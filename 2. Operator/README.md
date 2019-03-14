# 연산자

RxJS의 연산자는 기본적으로 함수 형태로 제공이 된다.

map이나 filter와 같은 여러 값들을 취급할 수 있는 연산자를 제공한다.

연산자의 일부는 개발자가 작성한 함수를 인자로 사용하여 동작하는 것들도 있다.

## 연산자를 사용하기 위해서

연산자를 사용하기 위해서는 일단 옵저버블을 생성해야한다. 따라서 옵저버블을 생성하는 함수나 이미 생성된 옵저버블 인스턴스에서 pipe 함수로 값을 다룰 연산자들이 필요하다.

## 그럼 연산자를 사용해보자

예를 들어 ```Observable.create```는 옵저버블을 생성하는 일반적인 생성함수이다. 여기서 Rxjs에서 불러온 생성함수로는 1개의 값만 발행하는 옵저버블을 생성하는 of, 특정 범위의 값을 순서대로 발행하는 옵저버블을 생성하는 range등이 있다.

RxJS에서는 일정 시간마다 0부터 1씩 증가하는 값을 return 해주는 옵저버블을 만드는 ```interval``` 함수가 있다. 이를 파이퍼블 연산자인 ```filter```를 각각 ```rxjs```와 ```rxjs/operators```에서 불러와서 ```pipe``` 함수 안에서 사용한다.

```javascript
const { interval } = require('rxjs');
const { filter } = require('rxjs/operators');

let divisor = 2;

interval(1000).pipe(
  filter((value) => value % divisor == 0),
).subscribe((value) => console.log(value))
```

RxJs의 연산자는 순수함수<sup id="a1">[1](#footnote1)</sup> 형태이다. 다만 인자로 사용하는 함수가 순수 함수가 아니라면 이 연산자의 동작은 순수 함수가 아니다.

[<b id="footnote1">1</b>](#a1) 부수효과가 없는 함수 즉, 어떤 함수에 동일한 인자를 주었을 때 항상 같은 값을 리턴하는 함수이자 외부의 상태를 변경하지 않는 함수