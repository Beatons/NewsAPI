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
  
  sources: Observable<NewsAPI.SourceResult>;
  feed: Observable<NewsAPI.NewsResult>;
  searchInput = '';
  sourcesInput: string[] = [];
  currentPage = 1;
  pageSize = 5;
  constructor(
    private newsApi:NewsApiService,
    // private feedStore: FeedStoreService
    ) {}
    ngOnInit():void {
      this.getSources();
    }

    getNews():void {
      console.log(this.sourcesInput);
      if(this.sourcesInput.length > 0) {
        this.feed = this.newsApi.getNews({
          page:this.currentPage,
          pageSize: this.pageSize,
          sortBy: "popularity",
          q:this.searchInput,
          sources:this.sourcesInput
        });
      }
    }
    private getSources():void {
      this.sources = this.newsApi.getSources();
    }
    saveAsNew() {

    }
    changePage(direction:string) {
      if(direction === 'back') {
        this.currentPage--;
        this.getNews();
      }
      else {
        this.currentPage++;
        this.getNews();
      }
    }
}