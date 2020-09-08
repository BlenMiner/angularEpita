import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() images: Array<string>;
  selectedImage: number;

  constructor() {
    this.selectedImage = 0;
  }

  ngOnInit(): void {
  }

  nextImg(): void {
    this.selectedImage++;
      if (this.selectedImage >= this.images.length)
        this.selectedImage = 0;
  }

  prevImg(): void {
    this.selectedImage--;
    if (this.selectedImage < 0)
      this.selectedImage = this.images.length - 1;
  }

  openImg(): void {
    window.open(this.images[this.selectedImage]);
  }
}
