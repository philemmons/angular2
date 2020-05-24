import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// hot module replacement( HMR ) - auto reload browser
export class AppComponent {
  title = 'Angular';
}
