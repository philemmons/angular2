import { Component } from '@angular/core';

@Component({ //renders the template inside that custom element
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// hot module replacement( HMR ) - auto reload browser
export class AppComponent {
  title = 'Angular';
}
