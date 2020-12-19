import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { ClassBindingStyleBindingComponent } from './class-binding-style-binding/class-binding-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { ExemploInputPropertyComponent } from './input-property/exemplo-input-property/exemplo-input-property.component';
import { InputPropertyPaiComponent } from './input-property/input-property-pai/input-property-pai.component';
import { OutputPropertyPaiComponent } from './output-property/output-property-pai/output-property-pai.component';
import { OutputPropertyFilhoComponent } from './output-property/output-property-filho/output-property-filho.component';
import { ExamploViewChildComponent } from './examplo-view-child/examplo-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingInterpolationComponent,
    ClassBindingStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    ExemploInputPropertyComponent,
    InputPropertyPaiComponent,
    OutputPropertyPaiComponent,
    OutputPropertyFilhoComponent,
    ExamploViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
