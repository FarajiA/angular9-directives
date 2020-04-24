import { Component, ChangeDetectorRef} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <h1> Testing Dynamic Form</h1>
  <input type="radio" name="favorite_pet" value="Cats" (change)="changeMethod('input')">Input<br>
  <input type="radio" name="favorite_pet" value="Dogs" (change)="changeMethod('checkbox')">Checkbox<br>
  <app-dynamic-form *ngIf="config" [config]="config"></app-dynamic-form>
  `
})
export class AppComponent {
  constructor(private changeDetector: ChangeDetectorRef){}

  config;
  title = 'directivesAngular9';

  changeMethod(input: string) {

    if (input === 'input') {
      this.config = { name: 'textName', factory: 'input'};
    }
    else {
      this.config = { name: 'checkName', factory: 'checkbox'};
    }
  }
}
