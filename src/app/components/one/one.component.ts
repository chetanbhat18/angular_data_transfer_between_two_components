import { Component, OnInit } from '@angular/core';
import {OneService} from "../../services/one/one.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor( private ser:OneService) { }

  messageFromOne = "message from component one recieved"
    messageFromTwo = "no message recieved";

  ngOnInit(): void {
    
     this.ser.$sendtoOne.subscribe((data) =>{ this.messageFromTwo = data});
  }

  onSendTwo(){
    this.ser.setMessageFromOne(this.messageFromOne);
  }
}
