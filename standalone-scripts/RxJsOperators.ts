import { from, of } from "rxjs";
import { map, filter, tap, reduce, scan } from "rxjs/operators";

//Creation Operators: of, from
let source1 = from([44, 55, 66, 77, 88, 99]);
source1
    .pipe(map((val) => val * 10))
    .subscribe((val) => console.log(`Mapped value: ${val}`));

let source2 = of("a", "b", "c");
source2
    .pipe(
        filter((val) => val.toLowerCase() === "hi"),
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

function print(message: string) {
    console.log(message);
}