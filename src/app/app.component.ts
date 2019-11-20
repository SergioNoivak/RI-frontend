import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';
  name = '';
	input;
	
	 handleClick() {
		this.name = this.input.value;
	}
}
