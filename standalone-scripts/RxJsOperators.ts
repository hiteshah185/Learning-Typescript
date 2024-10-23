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
  catchError,
  switchMap,
  mergeMap,
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

const errorSource = from([1, 2, 33]).pipe(
  catchError((err) => of("Error Handled"))
);
errorSource.subscribe(
  (val) => {
    print(`Value: ${val}`);
  },
  (err) => {
    print(`Error: ${err}`);
  },
  () => {
    print(`Completed`);
  }
);

const observable1 = from([11, 22, 33, 44, 55]);
const observable2 = from(["a", "b", "c"]);
observable1
  .pipe(switchMap((val) => of(`-Value-> ${val}`)))
  .subscribe((val) => print(`SwitchMap:${val}`));
observable2
  .pipe(
    map((val) => val.toUpperCase()),
    mergeMap((val) => of(`-Value-> ${val}`))
  )
  .subscribe((val) => print(`MergeMap:${val}`));
function print(message: string) {
  console.log(message);
}
