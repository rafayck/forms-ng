import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FiqrComponent } from './fiqr/fiqr.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent,
    FiqrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{ path :'assessment', component: AssessmentComponent},
    	{ path : 'fiqr', component: FiqrComponent}
    	])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
