import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  /* Input is responsible for exposing the properties to other components in the app,
  behavior that is not support by default. */
  @Input('srvElement') element: {type: string, name: string, content: string};
  
  constructor() { }

  ngOnInit(): void {
  }

}
