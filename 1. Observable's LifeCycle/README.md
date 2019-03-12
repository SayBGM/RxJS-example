# 옵저버블의 라이프 사이클

1. 옵저버블 생성 (Creating Observables)
2. 옵저버블 구독 (Subscribing to Observables)
3. 옵저버블 실행 (Executing the Observable)
4. 옵저버블 구독 해제 (Disposing Observables)

## 옵저버블 생성 (Creating Observables)
rxjs 패키지에서 불러온 Observable 클래스의 정적 함수 ```Observable.create```로 직접 옵저버블을 생성한다. ```Observable.create```가 아니더라도 ```range```나 ```of```를 rxjs에서 불러와서 필요한 옵저버블을 생성 할 수 있다.

```range```나 ```of```를 사용하여 만들어진 옵저버블은 추상화된 형태로 사용할 수 있다는 장점이 있는데, 옵저버블 인스턴스에 ```Observable.prototype```으로 연결된 pipe 함수에 다양한 연산자를 인자로 사용해서 새로운 옵저버블 인스턴스를 생성할 수 있다.
## 옵저버블 구독 (Subscribing to Observables), 옵저버블 실행 (Executing the Observable) 
구독과 실행은 데이터를 전달할 콜백을 제공하여 호출 혹은 구독한 후 옵저버블에서 발행하는 값을 사용한다, 이 때 ```subscribe```함수를 사용한다. 

함수를 여러 번 호출하여도 각 함수마다 독립적으로 동작한다는 특징을 가지고 있다.

 예를 들어 ```addEventListener```와 같이 하나의 요소를 클릭하는 것으로 여러 액션을 할 수 있는 것과 비슷하게 옵저버가 구독하는 이벤트에 이벤트가 발생(변수의 값이 달라지는 등)하면 모든 옵저버가 같은 결과를 전달받도록 여러 옵저버에 멀티캐스팅했다는 것이다.

아래 코드는 subscribe라는 함수를 여러 번 호출하여도 함수를 호출 하듯이 새로 함수를 실행 하는 것을 확인 할 수 있다.

```javascript
const { Observable } = require('rxjs');

const observableCreated$ = Observable.create((observer) => {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      observer.next(i);
      if (i === 10) {
        observer.complete();
      }
    }, 300 * i)
  }
});

observableCreated$.subscribe(
  function next(item) {
    console.log(`observerA: ${item}`);
  },
  function error(err) {
    console.log(`observerA: ${err}`);
  },
  function complete() {
    console.log('observerA: complete');
  }
);

setTimeout(() => {
  observableCreated$.subscribe(
    function next(item) {
      console.log(`observerB: ${item}`);
    },
    function error(err) {
      console.log(`observerB: ${err}`);
    },
    function complete() {
      console.log('observerB: complete');
    }
  );
}, 1350);
```

### 옵저버블과 옵저버의 관계
함수를 호출하여 옵저버블을 생성하게 되면 옵저버블 내에는 ```subscribe```함수가 있다. 이 옵저버블 객체는 아무 일도 하지 않고 어떤 일을 해야 할지에 대한 정보만 있다.

이를 subscribe함수를 호출하여 옵저버와 연결을 한 뒤 동작을 실행시킨다. 옵저버 객체는  ```next```, ```error```, ```complete```, 세 개의 함수로 구성되어 있다.

```subscribe```함수에는 ```next```, ```error```, ```complete``` 함수 순서로 옵저버의 구성 요소 혹은 콜백 함수를 개체로 감싼 옵저버 객체 전달을 할 수 있다.

### next, error, complete
  * ```next```
    * 옵저버블 객체에서 ```subscribe```호출 후 옵저버블이 옵저버의 complete나 error를 호출 하기 전까지 next 함수로 값을 발행함
    * complete나 error를 만나면 그 이후에 설정되어있는 next 함수는 무시됨
  * ```complete```
    * 옵저버블 객체에서 ```subscribe```호출 후 옵저버블이 ```complete```를 호출하게 되면 구독을 해제시킨다.
  * ```error```
    * ```complete```와 비슷하지만 error를 출력하기 위한 함수이다.

## 구독 객체 관리 (옵저버블 구독 해제)
1. ```complete```
  * ```complete```는 Observable 객체 내에서 구독을 해제할 수 있는 함수이다. ```complete```를 사용하게 되면 자원 해제가 이루어 지면서 구독 해제가 이뤄진다.
2. ```unsubscribe```
  * ```unsubscribe```는 구독을 멈추는 함수이다. ```subscribe```가 리턴하는 객체는 ```Subscription``` 클래스 타입인데 ```Subscription``` 클래스 타입은 unsubscribe 함수를 호출해야 구독을 멈추게 할 수 있다.
  * [ Angular / Rxjs  Angular에서 unsubscribe(구독취소)은 언제 어떻게 해야하는가?](https://web-front-end.tistory.com/71)

