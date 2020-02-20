import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavAppleComponent } from "./nav-apple/nav-apple.component";
import { NavBitcoinComponent } from "./nav-bitcoin/nav-bitcoin.component";
import { NavHeadlinesComponent } from "./nav-headlines/nav-headlines.component";
import { NavTechcrunchComponent } from "./nav-techcrunch/nav-techcrunch.component";
import { NavWallstreetComponent } from "./nav-wallstreet/nav-wallstreet.component";

const routes: Routes = [
  { path: "", redirectTo: "/Apple", pathMatch: "full" },
  { path: "Apple", component: NavAppleComponent },
  { path: "Bitcoin", component: NavBitcoinComponent },
  { path: "US Headlines", component: NavHeadlinesComponent },
  { path: "Tech Crunch", component: NavTechcrunchComponent },
  { path: "Wall Street Journal", component: NavWallstreetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
