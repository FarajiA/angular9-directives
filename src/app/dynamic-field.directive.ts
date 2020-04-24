import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef,
  OnChanges,
  SimpleChange,
  SimpleChanges
  } from "@angular/core";
  import { FormGroup } from "@angular/forms";
import { InputComponent } from './input.component';
import { CheckboxComponent } from './checkbox.component';
import { Subject } from 'rxjs';

  const componentMapper = {
    input: InputComponent,
    checkbox: CheckboxComponent
  };

@Directive({selector: 'monitorDynamicField'})
export class DynamicFieldDirective implements OnChanges {

  @Input() config;
  @Input() group: FormGroup;
  componentRef: any;

  public childName = 'childName';
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit() {
    this.composeComponent();
  }

  composeComponent() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.config.factory]
    )
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.config = this.config;
    this.componentRef.instance.group = this.group;
  }

  ngAfterViewInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config && !changes.config.firstChange) {
      this.container.clear();
      this.composeComponent();
    }
  }

}
