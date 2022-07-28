import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text = "";

  constructor( public chat:ChatService) { }
  
  sendMessage(){

    console.log("hi mig");

    let mesageInfo = {
      text: this.text,
      messageType:1
    };
    this.chat.sendMessage(mesageInfo);
    this.text = "";
  }

  ngOnInit(): void {
  }

}
