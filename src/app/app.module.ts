import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputComponent } from './input.component';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    InputComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    InputComponent,
    CheckboxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
