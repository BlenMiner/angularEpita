import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagedbService {

  constructor(private http: HttpClient) { }

  getImages(): Array<string> {
    return [
      "https://images7.alphacoders.com/583/thumb-1920-583269.jpg",
      "https://images4.alphacoders.com/936/thumb-1920-936378.jpg",
      "https://images3.alphacoders.com/620/thumb-1920-62009.jpg",
      "https://images.alphacoders.com/600/thumb-1920-600154.jpg",
      "https://images7.alphacoders.com/550/thumb-1920-550963.jpg"
    ];
  }

  getImagesAsync(): Observable<Array<string>> {
    return this.http.get<Array<string>>("https://bcracker.dev/angular/images.json");
  }
}
