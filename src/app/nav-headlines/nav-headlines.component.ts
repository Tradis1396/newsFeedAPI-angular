import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-nav-headlines",
  templateUrl: "./nav-headlines.component.html",
  styleUrls: ["./nav-headlines.component.css"]
})
export class NavHeadlinesComponent implements OnInit {
  USHeadlines;
  @Input() newsfeedContent = this.USHeadlines;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBitcoinNews().subscribe(
      data => {
        this.USHeadlines = data["articles"];
        console.log(this.USHeadlines);
      },
      err => {
        console.log(err);
      }
    );
  }
}
