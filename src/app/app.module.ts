import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpartacusModule} from './spartacus/spartacus.module';
import {CustomModule} from "./spartacus/custom/custom.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    CustomModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
