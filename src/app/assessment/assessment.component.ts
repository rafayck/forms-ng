import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
	selectedOption=0;
	sum;
	choices: any =[
		0,
		1,
		2,
		3,

	];
  	
  	radioChangeHandler (event:any){
  		
  	

  		this.selectedOption = parseInt(event.target.value) + this.selectedOption;
  		

  		console.log('sum',this.selectedOption);
  	 }
  	constructor() { }

  	ngOnInit() {
  	}

}
