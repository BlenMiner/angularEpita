import { Component, OnInit } from '@angular/core';
import { ImagedbService } from './imagedb.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'John Dough';
  images: Array<string>;

  constructor(private imageService: ImagedbService) {}

  ngOnInit() {
    this.imageService.getImagesAsync().subscribe(
      data => {
        this.images = data;
      },
      (err: HttpErrorResponse) => {
        this.images = ["./favicon.ico"];
      }
    );
  }
}
