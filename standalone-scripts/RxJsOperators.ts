import { from, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';


const source1 = from([44, 55, 66, 77, 88, 99]);
source1.pipe(
    map(val => val * 10)
).subscribe(val => console.log(`Mapped value: ${val}`));

const source2 = of('a', 'b', 'c');
source2.pipe(
    filter(val => val % 2 === 0),
    tap(val => print(`Tapped:${val}`))
).subscribe(
    val => print(`After subscribing:${val}`)
);

function print(message: string) {
    console.log(message);
}