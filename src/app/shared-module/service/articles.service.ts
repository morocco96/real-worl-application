import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article, ArticleListConfig} from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private apiService: ApiService
  ) { }

  query(config: ArticleListConfig): Observable<{articles: Article[], articleCount: number}> {

    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];  
    });
  

  return this.apiService
  .get(
    '/articles' + ((config.type === 'feed')? '/feed' : ''),
    new HttpParams({ fromObject: params})

  );

}

get(slug): Observable<Article> {
  return this.apiService.get('/articles/' + slug)
  .pipe(map(data => data.article));
}

destroy(slug) {
  return thi.apiService.delete('/articles/' + slug);
}

save(article): Observable<Article> {
  if(article.slug) {
    return this.apiService.put('/articles/' + Article.slug, {article: article})
    .pipe(map(data => data.article));
  
  }else {
    return this.apiService.post('/articles/', {article: article})
    .pipe(map(data => data.article));
  }
}

favorite(slug):Observable<Article> {
  return this.apiService.post('/articles/' + slug + '/favorite');
}

unfavorite(slug): Observable<Article> {
  return this.apiService.delete('/articles/' + slug + '/favorite');
}

}
