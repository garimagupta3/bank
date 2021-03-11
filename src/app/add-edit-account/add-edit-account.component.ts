import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  id: string;
  isAddMode: boolean;
  accountDetails: any;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    //form validations
    this.form = this.formBuilder.group({
      accountName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.maxLength(20)]],
      bank: ['']
    });

    //autofill edit mode enteries
    if (!this.isAddMode) {
      this.commonService.getAccountById(this.id).subscribe(x => {
        this.accountDetails = x;
        this.f.accountName.setValue(this.accountDetails.accountName);
        this.f.accountNumber.setValue(this.accountDetails.accountNumber);
        this.f.bank.setValue(this.accountDetails.bank);
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    if (this.isAddMode) {
      this.addAccount();
    } else {
      this.updateAccount();
    }
  }

  addAccount() {
    this.commonService.addAccount(this.form.value).subscribe(() => {
      alert("Account added to favorites!");
    })
  }

  updateAccount() {
    this.commonService.updateAccount(this.form.value, this.id).subscribe(() => {
      alert("Account updated successfully!");
    })
  }

  deleteAccount() {
    this.commonService.deleteAccount(this.id).subscribe(() => {
      alert("Account deleted successfully!");
      this.router.navigate(['favorite-accounts']);
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
