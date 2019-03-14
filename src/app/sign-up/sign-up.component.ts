import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

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

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6)]],
    })
   }

  ngOnInit() {
  }
  onSubmit(): void {
    this.submitted = true;
    console.log(this.user)
    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

}
