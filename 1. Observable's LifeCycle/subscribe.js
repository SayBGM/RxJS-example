const { Observable } = require('rxjs');

const observableCreated$ = Observable.create((observer) => {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      observer.next(i);
      if (i === 10) {
        observer.complete();
      }
    }, 300 * i);
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
