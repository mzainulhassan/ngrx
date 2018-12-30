import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { Set } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new Set({fname: this.profileForm.value.firstName, lname: this.profileForm.value.lastName}));
    this.router.navigate(["/page2"]);
  }

}
