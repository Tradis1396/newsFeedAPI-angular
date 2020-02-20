import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";
import { NavAppleComponent } from "../nav-apple/nav-apple.component";
@Component({
  selector: "app-nav-bitcoin",
  templateUrl: "./nav-bitcoin.component.html",
  styleUrls: ["./nav-bitcoin.component.css"]
})
export class NavBitcoinComponent implements OnInit {
  bitcoinNewsfeed;
  @Input() newsfeedContent = this.bitcoinNewsfeed;

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getBitcoinNews().subscribe(data => {
      this.bitcoinNewsfeed = data["articles"];
      // console.log(this.bitcoinNewsfeed);
    });
  }
}
