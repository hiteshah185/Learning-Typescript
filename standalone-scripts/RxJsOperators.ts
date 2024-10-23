import { from, of, interval } from "rxjs";
import {
  map,
  filter,
  tap,
  reduce,
  scan,
  take,
  takeUntil,
  first,
  debounceTime,
} from "rxjs/operators";

//Creation Operators: of, from
let source1 = from([44, 55, 66, 77, 88, 99]);
source1
  .pipe(map((val) => val * 10))
  .subscribe((val) => console.log(`Mapped value: ${val}`));

let source2 = of("a", "b", "c");
source2
  .pipe(
    filter((val) => val.toLowerCase() === "a"),
    tap((val) => print(`Tapped:${val}`))
  )
  .subscribe((val) => print(`After subscribing:${val}`));
//Trasformation Operators: map, filter, pluck,tap

source1
  .pipe(
    reduce((acc, val) => acc + val, 0),
    scan((acc, val) => acc + val, 0)
  )
  .subscribe((val) => print(`After subscribing:${val}`));

let source3 = interval(1000);
source3
  .pipe(take(3), takeUntil(source2.pipe(first())), debounceTime(500))
  .subscribe((val) => print(`Debounced:${val}`));

function print(message: string) {
  console.log(message);
}
