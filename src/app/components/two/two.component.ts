import { Component, OnInit } from '@angular/core';
import {OneService} from "../../services/one/one.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor(private ser:OneService) { }

  messageFromOne = "no message recieved";
  messageFromTwo = "message from component two recieved";

  ngOnInit(): void {
    this.ser.$sendtoTwo.subscribe((data) =>{ this.messageFromOne = data});
  }

  onSendOne(){
    this.ser.setMessageFromTwo(this.messageFromTwo);
  }

}
