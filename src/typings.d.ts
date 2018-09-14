/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

type Environment = {
  apiKey: string
  production: boolean
}

type NewsFeedFilter = {
  q: string
  sources: string[]
}

type NewsFeed = {
  id: string
  name: string
  filters: NewsFeedFilter
}

declare namespace NewsAPI {
  type Source = {
    id: string
    name: string
  }

  type Article = {
    author: string
    description: string
    publishedAt: string
    source: Source
    title: string
    url: string
    urlToImage: string
  }

  type NewsResult = {
    articles: Article[]
    status: 'ok' | 'error'
    totalResults: number
  }

  type Error = {
    code?: string
    message?: string
    status: 'ok' | 'error'
  }

  type SourceResult = {
    status: 'ok' | 'error'
    sources: Source[]
  }

}
