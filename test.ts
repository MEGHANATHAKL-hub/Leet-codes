import { Observable, of } from 'rxjs';

function multiplication(a, b): Observable<number> {
    return of(a*b);
}

console.log(multiplication(2,2));