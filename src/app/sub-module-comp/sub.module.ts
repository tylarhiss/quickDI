import {
  SubModuleCompComponent,
  SubModuleComp2Component,
  SubModuleComp3Component,
  SubModuleComp4Component
} from './sub-module-comp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { S1Service, S2Service, S3Service, S4Service } from '../s1.service';

@NgModule({
  declarations: [
    SubModuleCompComponent,
    SubModuleComp2Component,
    SubModuleComp3Component,
    SubModuleComp4Component
  ],
  exports: [
    SubModuleCompComponent,
    SubModuleComp2Component,
    SubModuleComp3Component,
    SubModuleComp4Component
  ],
  imports: [BrowserModule],
  providers: [
    {
      provide: S1Service,
      useClass: S2Service
    }
  ]
})
export class SubModule {}
