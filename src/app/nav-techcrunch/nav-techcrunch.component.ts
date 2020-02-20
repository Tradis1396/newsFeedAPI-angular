import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-nav-techcrunch",
  templateUrl: "./nav-techcrunch.component.html",
  styleUrls: ["./nav-techcrunch.component.css"]
})
export class NavTechcrunchComponent implements OnInit {
  techCrunch;
  @Input() newsfeedContent = this.techCrunch;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBitcoinNews().subscribe(data => {
      this.techCrunch = data["articles"];
      console.log(this.techCrunch);
    });
  }
}
