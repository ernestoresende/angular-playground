import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was crated!'
  serverName = 'Test Server'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  } // Default method from TypeScript, first to be loaded.

  ngOnInit() {} //  lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
  } // Method that is called when the "Add Server button is clicked"

  onUpdateServerName(event: Event) { 
    this.serverName = (<HTMLInputElement>event.target).value
  } // Method that listens for the event target on the form for changes in the input.
}
