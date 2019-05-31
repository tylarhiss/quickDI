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
      useExisting: S2Service
    }
    // this will break all of s1 service by overriding the global DI if they are provided root
    // {
    //   provide: S3Service,
    //   useExisting: S4Service
    // }
  ]
})
export class SubModule {}
