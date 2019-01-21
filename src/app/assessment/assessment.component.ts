import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
	selectedOption=0;
  sum;
  answered: any =[ 
    ['question1',0],
    ['question2',0],
    ['question3',0],
    ['question4',0],
    ['question5',0],
    ['question6',0],
    ['question7',0],
    ['question8',0],
    ['question9',0],
    ['question10',0],
    ['question11',0],

  ];  
  points:any=[]
  choices: any =[
    0,
    1,
    2,
    3,
  ];
  	
   point:number; 
 

  	radioChangeHandler (event:any){
  		
  	
       let answered = this.answered;
      
         for (let i=0; i < answered.length;i++){
           // console.log('i:',answered[i][0],event.target.name)
          if(event.target.name==answered[i][0]){
            // console.log('match')
            answered[i][1] = parseInt(event.target.value)
          }
           // console.log(answered[i][1])      
         }
         this.getSum(answered)
      
      
      

      
  	 }
     
     getSum(answered){
       let sum = 0;
       console.log('in func',answered)
       for(let i =0 ; i < answered.length; i++){
         sum += parseInt(answered[i][1])
       }
       this.selectedOption=sum;
     }
  	constructor() { }

  	ngOnInit() {
  	}

}
