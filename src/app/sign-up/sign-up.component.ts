import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.states';
import { SignUp } from '../store/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
// 
  submitted = false;
  success = false;
  messageForm: FormGroup;

  user: User = new User();

  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>) {
    this.messageForm = this.formBuilder.group({
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(4)]],
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
    this.store.dispatch(new SignUp(payload));
    console.log(this.user)
    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

}
