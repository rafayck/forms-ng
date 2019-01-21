import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<nav>
  			<a routerLink="/assessment" routerLinkActive="active">Assessment</a>
  			<br>
  			<a routerLink="/fiqr" routerLinkActive="active">FIQR</a>
  			</nav>
  			<router-outlet></router-outlet> `,
  encapsulation: ViewEncapsulation.None,
  
})
export class AppComponent {
  title = 'forms';
}
