import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatablogService {

  private apiUrl = 'http://localhost:808/miapi/dameBlog';
    constructor(private http: HttpClient) { }
    getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
