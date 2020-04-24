import { Component, OnInit, AfterViewInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
  <h2>Directive</h2>
  <monitorDynamicField [config]="config" [group]="form"></monitorDynamicField>
  {{ value | json }}
  `
})
export class DynamicFormComponent implements OnInit {

  @Input() config;
  @Input() form: FormGroup;

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      [this.config.name]: new FormControl('', Validators.required)
    });
  }

}
