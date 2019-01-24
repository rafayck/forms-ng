import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FiqrComponent } from './fiqr/fiqr.component';
import { GreenzoneComponent } from './greenzone/greenzone.component';
import { ConsentComponent } from './consent/consent.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent,
    FiqrComponent,
    GreenzoneComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{ path :'assessment', component: AssessmentComponent},
    	{ path : 'fiqr', component: FiqrComponent},
      { path : 'greenzone', component : GreenzoneComponent},
      { path : 'consent', component: ConsentComponent}
    	])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
