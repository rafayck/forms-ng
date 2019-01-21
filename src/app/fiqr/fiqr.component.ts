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

  answered: any =[ 
    ['domain1-1',0],
    ['domain1-2',0],
    ['domain1-3',0],
    ['domain1-4',0],
    ['domain1-5',0],
    ['domain1-6',0],
    ['domain1-7',0],
    ['domain1-8',0],
    ['domain1-9',0],
    ['domain2-1',0],
    ['domain2-2',0],
    ['domain3-1',0],
    ['domain3-2',0],
    ['domain3-3',0],
    ['domain3-4',0],
    ['domain3-5',0],
    ['domain3-6',0],
    ['domain3-7',0],
    ['domain3-8',0],
    ['domain3-9',0],
    ['domain3-10',0],
  ];

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

      let answered=this.answered;
      for (let i=0; i < answered.length;i++){
          if(event.target.name==answered[i][0]){
            answered[i][1] = parseInt(event.target.value)
          }
           console.log(answered[i][1])      
      }
      this.getSum(answered)
  	}
  	
  getSum(answered){
       let sum1=0;
       let sum2=0;
       let sum3=0;

       // console.log('in func',answered)
       for(let i =0 ; i < 9 ; i++){
         sum1 += parseInt(answered[i][1])
       }
       this.domain1sum = sum1;

       for(let i =9 ; i < 11 ; i++){
         sum2 += parseInt(answered[i][1])
       }
       this.domain1sum = sum1;

       for(let i =11 ; i < answered.length ; i++){
         sum3 += parseInt(answered[i][1])
       }
       this.domain1sum = sum1;
       this.domain2sum = sum2;
       this.domain3sum = sum3;
       // console.log('sum1,sum2,sum3', sum1,sum2,sum3);

       this.finalScore = sum1/3 + sum2 + sum3/2;
     }

  	constructor() { }

  	ngOnInit() {
  	}

}
