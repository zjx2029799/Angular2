import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  		<h1>Hello Angular: {{name}}</h1>
  		<p><strong>Email: </strong>{{email}}</p>
  		<p><strong>Address:</strong>{{address.street}} {{address.city}} {{address.state}}</p>
    `,
})
export class UserComponent  { 
  	name: string;
  	email: string;
  	address: address;
  
	  constructor(){
	  	this.name = 'Jiaxing Zheng';
	  	this.email = 'jiaxing.zheng@siemens.com';
	  	this.address = {
	  		street : '755 college road',
	  		city: 'Princeton',
	  		state: 'NJ'
  		}
	}
}
interface address{
	street: string;
	city: string;
	state: string;
}