import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-accounts',
  templateUrl: './favorite-accounts.component.html',
  styleUrls: ['./favorite-accounts.component.scss']
})
export class FavoriteAccountsComponent implements OnInit {
  bankList;
  config: any;
  collection = { count: 10, data: [] };
  constructor(private commonService: CommonService) { 


    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
  }

  ngOnInit(): void {

    this.getAllItems();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getAllItems(){
    this.commonService.getBankDetails()
  .subscribe(
    (data:any) => {
      this.bankList = data;
      console.log(data)
        
    },
    error => {

    });
  }



  

}
