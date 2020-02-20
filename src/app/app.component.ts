import { Component } from "@angular/core";
import {
  MatTab,
  MatTabsModule,
  MatTabLink,
  MatTabNav
} from "@angular/material/tabs";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-newsfeed";
  navLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "Apple",
        link: "./Apple",
        index: 0
      },
      {
        label: "Bitcoin",
        link: "./Bitcoin",
        index: 1
      },
      {
        label: "US Headlines",
        link: "./US Headlines",
        index: 3
      },
      {
        label: "Tech Crunch",
        link: "./Tech Crunch",
        index: 4
      },
      {
        label: "Wall Street Journal",
        link: "./Wall Street Journal",
        index: 5
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }
}
