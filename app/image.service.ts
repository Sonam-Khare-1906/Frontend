import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  ROOT_URL: string = 'http://localhost:8088/image';
  constructor(private http: HttpClient) {}

  addImage(data: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.ROOT_URL}/addImage`, data, {
      headers,
      responseType: 'text',
    });
  }
}