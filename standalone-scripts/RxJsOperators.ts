import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';


const source1 = from([44, 55, 66, 77, 88, 99]);
source1.pipe(
    map(val => val * 10)
).subscribe(val => console.log(`Mapped value: ${val}`));
