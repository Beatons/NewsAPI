import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FeedStoreService {
  private newsFeedsSubject = new BehaviorSubject<NewsFeed[]>([]);

  constructor() {
    this.newsFeedsSubject.next(this.read());
  }

  get newsFeeds(): Observable<NewsFeed[]> {
    return this.newsFeedsSubject.asObservable();
  }

  create(options: {
    name: string
    filters: NewsFeedFilter
  }): Observable<NewsFeed> {
    return new Observable(obs => {
      const filter: NewsFeed = Object.assign({
        id: String( Math.floor(Math.random() * 1000000) )
      }, options);
      const feeds = this.newsFeedsSubject.value;
      feeds.push(filter);
      this.newsFeedsSubject.next(feeds.slice(0));
      this.write();
      obs.next(filter);
      obs.complete();
    });
  }

  remove(id: string): Observable<void> {
    return new Observable(obs => {
      const feeds = this.newsFeedsSubject.value;
      const idx = feeds.findIndex(f => f.id === id);
      if (idx === -1) {
        return;
      }
      feeds.splice(idx, 1);
      this.newsFeedsSubject.next(feeds.slice(0));
      this.write();
      obs.next();
      obs.complete();
    });
  }

  update(id: string, options: {
    name: string
    filters: NewsFeedFilter
  }): Observable<NewsFeed> {
    return new Observable(obs => {
      const feeds = this.newsFeedsSubject.value;
      const idx = feeds.findIndex(f => f.id === id);
      if (idx === -1) {
        return;
      }
      feeds[idx] = Object.assign({
        id,
      }, options);
      this.newsFeedsSubject.next(feeds.slice(0));
      this.write();
      obs.next(feeds[idx]);
      obs.complete();
    });
  }

  get(id: string): Observable<NewsFeed> {
    return new Observable(obs => {
      obs.next(this.newsFeedsSubject.value.find(f => f.id === id));
      obs.complete();
    });
  }

  private read(): NewsFeed[] {
    const str = localStorage.getItem('newsFeeds');
    if (!str) {
      return [];
    }
    return JSON.parse(str);
  }

  private write() {
    localStorage.setItem('newsFeeds', JSON.stringify(this.newsFeedsSubject.value));
  }
}
