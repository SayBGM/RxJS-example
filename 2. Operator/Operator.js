const { interval } = require('rxjs');
const { filter } = require('rxjs/operators');

let divisor = 2;

interval(500).pipe(
  filter((value) => value % divisor == 0),
).subscribe((value) => console.log(value))