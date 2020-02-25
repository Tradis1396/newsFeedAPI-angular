import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiKey: string = "b6e99529b71c4054bf3df59d1d4dfc11";

  constructor(private http: HttpClient) {}

  getAppleNews() {
    return this.http.get(
      `http://newsapi.org/v2/everything?q=apple&from=2020-02-25&sortBy=popularity&apiKey=${this.apiKey}`
    );
  }
  getBitcoinNews() {
    return this.http.get(
      `http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-25&sortBy=publishedAt&apiKey=${this.apiKey}`
    );
  }
  getHeadlinesNews() {
    return this.http.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`
    );
  }
  getTechCrunchNews() {
    return this.http.get(
      `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`
    );
  }
  getWallStreetNews() {
    return this.http.get(
      `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${this.apiKey}`
    );
  }
}
