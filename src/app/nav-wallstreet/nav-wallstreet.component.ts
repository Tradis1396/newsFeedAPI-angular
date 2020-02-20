import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-nav-wallstreet",
  templateUrl: "./nav-wallstreet.component.html",
  styleUrls: ["./nav-wallstreet.component.css"]
})
export class NavWallstreetComponent implements OnInit {
  wallStreet;
  @Input() newsfeedContent = this.wallStreet;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBitcoinNews().subscribe(data => {
      this.wallStreet = data["articles"];
      console.log(this.wallStreet);
    });
  }
}
