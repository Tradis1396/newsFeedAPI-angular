import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-html-content',
  templateUrl: './html-content.component.html',
  styleUrls: ['./html-content.component.css']
})
export class HTMLContentComponent implements OnInit {
  @Input() newsfeedContent;
  constructor() { }

  ngOnInit() {

  }

}
