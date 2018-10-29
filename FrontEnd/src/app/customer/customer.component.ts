import { Component, OnInit } from '@angular/core';
import {Customer} from "../dto/customer";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer:Customer=new Customer();
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

  saveCustomer(){
    this.customerService.save(this.customer);
  }

}
