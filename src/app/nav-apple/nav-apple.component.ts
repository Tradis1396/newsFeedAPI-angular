import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-nav-apple",
  templateUrl: "./nav-apple.component.html",
  styleUrls: ["./nav-apple.component.css"]
})
export class NavAppleComponent implements OnInit {
  appleNewsfeed;
  @Input() newsfeedContent = this.appleNewsfeed;
  content: boolean = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAppleNews().subscribe(data => {
      this.appleNewsfeed = data["articles"];
      // console.log(this.appleNewsfeed);
    });

  }
}
