import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fun',
  templateUrl: './vbu4.component.html',
  styleUrls: ['./vbu4.component.css']
})
export class VBU4Component implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

  pp(msg: string): string{
    let res: string = "";
    for (let i = 0; i < msg.length; ++i) {
      if (i % 2 == 0)
           res += msg.charAt(i).toLowerCase();
      else res += msg.charAt(i).toUpperCase();
    }
    return res;
  }

}
