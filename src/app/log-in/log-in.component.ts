import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { LogIn } from '../store/actions/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  submitted = false;
  success = false;
  messageForm: FormGroup;

  user: User = new User();

  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>) {
    this.messageForm = this.formBuilder.group({
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6)]],
    })
   }

  ngOnInit() {
  }
  onSubmit(): void {
    this.submitted = true;

    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
    
    console.log(this.user)
    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

}
