import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Customer} from "../dto/customer";

@Injectable()
export class CustomerService {
  customerList:AngularFireList<any>;
  constructor(private firebase:AngularFireDatabase) { }

  save(customer:Customer){
    this.customerList.push(
      {
        address:customer.address,
        name:customer.name,
        telephone:customer.telephone,

      }
    );
  }

}
