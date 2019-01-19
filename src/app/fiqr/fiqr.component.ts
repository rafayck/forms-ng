import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiqr',
  templateUrl: './fiqr.component.html',
  styleUrls: ['./fiqr.component.css']
})
export class FiqrComponent implements OnInit {

  domain1sum=0;
  domain2sum=0;
  domain3sum=0;
  finalScore=0;
	sum;
	choices: any =[
		
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,


	];
	
	radioChangeHandler1 (event:any){
  		this.domain1sum = parseInt(event.target.value) + this.domain1sum;
  		let temp = this.domain1sum + this.domain2sum + this.domain3sum;
  		this.finalScore = this.domain1sum/3 + this.domain3sum/2;
  	}

  	radioChangeHandler2 (event:any){
  		this.domain2sum = parseInt(event.target.value) + this.domain2sum;
   		let temp = this.domain1sum + this.domain2sum + this.domain3sum;
  		this.finalScore = this.domain1sum/3 + this.domain3sum/2;
  	}

	radioChangeHandler3 (event:any){
		this.domain3sum = parseInt(event.target.value) + this.domain3sum;
  		let temp = this.domain1sum + this.domain2sum + this.domain3sum;
  		this.finalScore = this.domain1sum/3 + this.domain3sum/2;
	}
  	
  

  	constructor() { }

  	ngOnInit() {
  	}

}
