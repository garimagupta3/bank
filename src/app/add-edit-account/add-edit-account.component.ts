import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss']
})
export class AddEditAccountComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean = false;
  bankName: string;
  accounts: any = [];

  constructor(private formBuilder: FormBuilder, private commonService: CommonService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      accountName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.maxLength(20)]],
      bank: ['']
    });
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
    this.commonService.addAccount(this.form.value).subscribe(() => {
      alert("Account added to favorites");
    })
  }

  addBankName({ target }) {
    let accNumber = target.value;
    let bankCode = accNumber.slice(4, 8);
    this.commonService.getAllBankDetails().subscribe(data => {
      this.accounts = data;
      let currentBankCode = this.accounts.filter(bankdata => bankdata.bankCode == bankCode);
      if (currentBankCode.length) {
        this.f.bank.setValue(currentBankCode[0].bankName);
      } else {
        alert('Bank does not exist, please provide valid account details');
      }
    })
  }
}
