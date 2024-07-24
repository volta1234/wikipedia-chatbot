import { AfterViewInit, Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  }

}
