import { Component, OnInit } from '@angular/core';
import { ImagedbService } from './imagedb.service'

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
    this.images = this.imageService.getImages();
  }
}
