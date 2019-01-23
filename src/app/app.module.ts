import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FiqrComponent } from './fiqr/fiqr.component';
import { GreenzoneComponent } from './greenzone/greenzone.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent,
    FiqrComponent,
    GreenzoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{ path :'assessment', component: AssessmentComponent},
    	{ path : 'fiqr', component: FiqrComponent},
      { path : 'greenzone', component : GreenzoneComponent}
    	])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
