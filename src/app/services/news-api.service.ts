import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn:'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get<NewsAPI.SourceResult>('https://newsapi.org/v2/sources', {
      params: {
        apiKey: environment.apiKey
      }
    });
  }

  getNews(options: {
    page: number
    pageSize: number
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt'
    q: string
    sources: string[]
  }) {
    return this.http.get<NewsAPI.NewsResult>('https://newsapi.org/v2/everything', {
      params: {
        page: String(options.page),
        pageSize: String(options.pageSize),
        sortBy: options.sortBy ? String(options.sortBy) : '',
        q: encodeURIComponent(options.q),
        sources: options.sources.join(','),
        apiKey: environment.apiKey
      }
    });
  }
}
