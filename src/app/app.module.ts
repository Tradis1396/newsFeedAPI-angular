import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatTab,
  MatTabsModule,
  MatTabLink,
  MatTabNav
} from "@angular/material/tabs";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavAppleComponent } from "./nav-apple/nav-apple.component";
import { HttpClientModule } from "@angular/common/http";
import { NavBitcoinComponent } from "./nav-bitcoin/nav-bitcoin.component";
import { NavHeadlinesComponent } from "./nav-headlines/nav-headlines.component";
import { NavTechcrunchComponent } from "./nav-techcrunch/nav-techcrunch.component";
import { NavWallstreetComponent } from "./nav-wallstreet/nav-wallstreet.component";
import { HTMLContentComponent } from "./html-content/html-content.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    NavAppleComponent,
    NavBitcoinComponent,
    NavHeadlinesComponent,
    NavTechcrunchComponent,
    NavWallstreetComponent,
    HTMLContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
