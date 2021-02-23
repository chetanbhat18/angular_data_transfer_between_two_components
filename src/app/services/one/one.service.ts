import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {

messageFromOne:string;
messageFromTwo: string;
$sendtoOne = new EventEmitter();
$sendtoTwo = new EventEmitter();

  constructor() { }

  setMessageFromOne(data1: string){
    this.messageFromOne = data1;
    this.$sendtoTwo.emit(this.messageFromOne)
  }

  setMessageFromTwo(data2: string){
    this.messageFromTwo = data2;
    this.$sendtoOne.emit(this.messageFromTwo)
  }

}
