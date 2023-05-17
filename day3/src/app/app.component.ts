import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar/>
    <app-header/>
    <app-banner/>
    <app-main/>
    <app-footer/>
  `
})
export class AppComponent {
  title = 'Assignment';
}
