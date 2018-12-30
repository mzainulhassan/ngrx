import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/reducers/user.reducer';
import { Get } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  user: Observable<User>;

  constructor(private store: Store<State>) {
    this.user = store.select("user");
  }

  ngOnInit() {
  }

}
