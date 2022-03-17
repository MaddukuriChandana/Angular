import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

import { Router } from '@angular/router';
import { Customer } from '../customer';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formValue !: FormGroup;
  customerdata:any;
 customers:Customer=new Customer();
  constructor(private formBuilder: FormBuilder,private router :Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Id :[''],
      FullName:[''],
      Age:[''],
      Gender:[''],
      Address:['']
    })

  }
  postCustomerDetails(){
    this.customers.Id = this.formValue.value.Id;
    this.customers.FullName = this.formValue.value.FullName;
    this.customers.Age = this.formValue.value.Age;
    this.customers.Gender = this.formValue.value.Gender;
    this.customers.Address = this.formValue.value.Address;
  }
}
