const { Observable } = require('rxjs');
const { map, toArray } = require('rxjs/operators');

const observableCreated$ = Observable.create((observer) => {
  const arr = [1, 2];
  for(i in arr) {
    observer.next(arr[i]);
  }
  observer.complete();
})

observableCreated$.pipe(
  map((value) => value * 2),
  map((value) => value + 1),
  map((value) => value * 3),
  toArray()
).subscribe(
  function next(item) {
    console.log(item);
  }
)