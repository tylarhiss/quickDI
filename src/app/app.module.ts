import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowServiceComponent } from './show-service/show-service.component';
import { SubModuleCompComponent } from './sub-module-comp/sub-module-comp.component';
import { SubModule } from './sub-module-comp/sub.module';
import { S1Service, S2Service } from './s1.service';

import { RealFragmentUserComponent } from './real-fragment-user/real-fragment-user.component';
import { DataModule } from './realishExample/data.module';
import {
  BREAKDOWN_GRAPH_FRAGMENT,
  FEES_GRAPH_FRAGMENT
} from './realishExample/realTokens';
import { breakdownFragmentFactory } from './realishExample/breakdownFactory';

@NgModule({
  declarations: [AppComponent, ShowServiceComponent, RealFragmentUserComponent],
  imports: [BrowserModule, AppRoutingModule, SubModule, DataModule],
  providers: [
    S1Service,
    S2Service

    // {
    //   provide: BREAKDOWN_GRAPH_FRAGMENT,
    //   useValue: `fragment breakdown on BookingPriceBreakdown {
    //     balanceDue
    //   }`
    // }
    // {
    //   provide: BREAKDOWN_GRAPH_FRAGMENT,
    //   useFactory: breakdownFragmentFactory,
    //   deps: [FEES_GRAPH_FRAGMENT]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
