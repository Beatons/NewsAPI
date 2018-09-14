import { Component } from "@angular/core";
import { NewsApiService } from "../../services/news-api.service";
import { FeedStoreService } from "../../services/feed-store.service";
import { Observable } from "rxjs";

@Component({
  selector:'gg-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})

export class GGNewsComponent {
  
  sources: Observable<NewsAPI.SourceResult>

  constructor(
    private newsApi:NewsApiService,
    private feedStore: FeedStoreService
    ) {}
    ngOnInit():void {
      this.getSources();
    }

    private getSources():void {
      this.sources = this.newsApi.getSources();
    }
    saveAsNew() {
      
    }
}