import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Novel } from '../models/novel.model';

@Injectable({
  providedIn: 'root'
})
export class SciFiLibraryService {
  private  baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/novels';

  index(): Observable<Novel[]> {
    return this.http.get<Novel[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  addNovel(newNovel: Novel) {

      return this.http.post<Novel>(this.url, newNovel)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );



  }

  deleteNovel(novelId: number) {

    return this.http.delete<Novel>(this.url + '/delete/' + novelId)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );

}

  updateNovel(novelId: number, novel: Novel) {

    return this.http.put<Novel>(this.url + '/' + novelId, novel)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
}

  searchNovels(keyword: String): Observable<Novel[]> {

    return this.http.get<Novel[]>(this.url + '/search/' + keyword + '?sorted=true')
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
  constructor(
    private http: HttpClient) { }

}
