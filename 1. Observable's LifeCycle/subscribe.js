const { Observable } = require('rxjs');

const observableCreated$ = Observable.create((observer) => {
  let i = 0;
  const setIntervalID = setInterval(() => {
    i++;
    observer.next(i);
    if (i === 30) {
      observer.complete();
    }
  }, 500);
  return function unsubscribe() {
    clearInterval(setIntervalID);
  };
});

const obser = observableCreated$.subscribe(
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
      console.log(`\t\t\t\t\t\t\tobserverB: ${item}`);
    },
    function error(err) {
      console.log(`\t\t\t\t\t\t\tobserverB: ${err}`);
    },
    function complete() {
      console.log('\t\t\t\t\t\t\tobserverB: complete');
    }
  );
}, 1350);

setTimeout(() => {
  obser.unsubscribe();
}, 5000);
