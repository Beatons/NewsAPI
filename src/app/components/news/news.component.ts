import { Component } from "@angular/core";
import { NewsApiService } from "../../services/news-api.service";
import { FeedStoreService } from "../../services/feed-store.service";
import { Observable } from "rxjs";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from "@angular/router";

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
  filterId:string;
  constructor(
    private newsApi:NewsApiService,
    private feedStore: FeedStoreService,
    private modalService: NgbModal,
    private route:ActivatedRoute,
    private router:Router
    ) {}
    ngOnInit():void {
     const sub1 = this.route.paramMap.subscribe((route)=> {
      this.filterId = route.get('id');
      const sub2 = this.feedStore.get(this.filterId).subscribe((filter) => {
          this.searchInput = filter.filters.q;
          this.sourcesInput = filter.filters.sources;
          sub2.unsubscribe();
          sub1.unsubscribe();
        });
      })
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
    saveAsNew(state,content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       console.log(result);
       if(state === 'create') {
          this.create(result);
        }
        else {
          this.update(result);
        }
      });
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
    create(name) {
      this.feedStore.create({
        name:name,
        filters:{
          q:this.searchInput,
          sources:this.sourcesInput
         }
       }).subscribe().unsubscribe();
    }
    reset() {
      this.searchInput = '';
      this.sourcesInput = [];
      this.getNews();
    }
    update(name:string) {
      this.feedStore.update(
        this.filterId,{
          name:name,
          filters: {
            q:this.searchInput,
            sources:this.sourcesInput
          }
        }).subscribe().unsubscribe();
    }
    delete() {
      this.feedStore.remove(this.filterId).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
}