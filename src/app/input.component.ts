import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'monitor-input',
  template: `
  <div [formGroup]="group" >
    <p>
      input works!
    </p>
    <input [formControlName]="config.name" id="stuff-text" type="text"
    [required]="group.get(config.name).hasError('required') && (group.get(config.name).dirty || group.get(config.name).touched)" />
  </div>
  `
})
export class InputComponent implements OnInit {

  group: FormGroup;
  config: any;
  constructor() { }

  ngOnInit(): void {
  }

}
