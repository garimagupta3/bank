import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss']
})
export class AddEditAccountComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      accountName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.maxLength(6)]]
      // bank: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("submitted form");
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.addAccount()
  }

  addAccount() {

    console.log("account added")
    console.log(this.form.value);
  }
}
