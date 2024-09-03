import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  watch(): Observable<boolean> {
    return this.display.asObservable().pipe(
      tap(show => console.log(`Modal visibility changed: ${show}`))
    );
  }



  open() {
    console.log(this.display)
    this.display.next(true);
    console.log(this.display)
  }

  close() {
    this.display.next(false);
  }
}
