import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset, Set } from './store/actions/counter.actions';
import { State } from './store';
import { Counter } from './store/reducers/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<Counter>;

  constructor(private store: Store<State>) {
    this.count$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  set() {
    this.store.dispatch(new Set({ value: 100 }));
  }

}
