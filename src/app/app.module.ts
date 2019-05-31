import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowServiceComponent } from './show-service/show-service.component';
import { SubModuleCompComponent } from './sub-module-comp/sub-module-comp.component';
import { SubModule } from './sub-module-comp/sub.module';
import { S1Service, S2Service } from './s1.service';
import { FragmentShowerComponent } from './fragment-shower/fragment-shower.component';
import { MyFragmentsModule } from './my-fragments/my-fragments.module';
import {
  MYFIRST_FRAGMENT,
  FRAGMENT_SENTENCE,
  MYSECOND_FRAGMENT
} from './tokens';
import { makeFragmentSentence } from './myFragmentSentenceFactory';
import { RealFragmentUserComponent } from './real-fragment-user/real-fragment-user.component';
import { DataModule } from './realishExample/data.module';
import {
  BREAKDOWN_GRAPH_FRAGMENT,
  FEES_GRAPH_FRAGMENT
} from './realishExample/realTokens';
import { breakdownFragmentFactory } from './realishExample/breakdownFactory';

@NgModule({
  declarations: [
    AppComponent,
    ShowServiceComponent,
    FragmentShowerComponent,
    RealFragmentUserComponent
  ],
  imports: [
    BrowserModule,
    MyFragmentsModule,
    AppRoutingModule,
    SubModule,
    DataModule
  ],
  providers: [
    S1Service,
    S2Service,

    {
      provide: FRAGMENT_SENTENCE,
      useFactory: makeFragmentSentence,
      deps: [MYFIRST_FRAGMENT, MYSECOND_FRAGMENT]
    },
    {
      provide: MYFIRST_FRAGMENT,
      useValue: '((First Fragment Override))'
    },
    // {
    //   provide: BREAKDOWN_GRAPH_FRAGMENT,
    //   useValue: `fragment breakdown on BookingPriceBreakdown {
    //     balanceDue
    //   }`
    // },
    {
      provide: BREAKDOWN_GRAPH_FRAGMENT,
      useFactory: breakdownFragmentFactory,
      deps: [FEES_GRAPH_FRAGMENT]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
