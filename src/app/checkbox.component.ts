import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'monitor-checkbox',
  template: `
  <div [formGroup]="group">
    <p>
      checkbox works!
    </p>
    <input id="stuff-checkbox" [formControlName]="config.name" value="Bike" type="checkbox"
    [required]="group.get(config.name)?.hasError('required') && (group.get(config.name)?.dirty || group.get(config.name)?.touched)"/>
  </div>
  `,
})
export class CheckboxComponent implements OnInit {

  group: FormGroup;
  config: any;
  constructor() { }

  ngOnInit(): void {
  }

}
