import { Component, OnInit } from "@angular/core";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FeedStoreService } from "../../services/feed-store.service";
import { Observable } from "rxjs";

@Component({
  selector: 'gg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class GGNavigationComponent implements OnInit {
  faHome = faHome
  filters:Observable<NewsFeed[]>;
  constructor(
    private feedStore: FeedStoreService
  ) {}

  ngOnInit():void {
    this.filters = this.feedStore.newsFeeds;
    this.feedStore.newsFeeds.subscribe((news) => {
      console.log(news);
      
    })
  }
}