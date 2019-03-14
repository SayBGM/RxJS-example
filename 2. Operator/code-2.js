const { range } = require('rxjs');
const { filter, map } = require('rxjs/operators');

range(0, 10)
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x),
  )