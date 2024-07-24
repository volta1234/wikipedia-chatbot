import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const modalElement = document.getElementById("exampleModal")
    const modal = new window.bootstrap.Modal((modalElement));
    modal.show();

    modalElement?.addEventListener("hidden.bs.modal", ()=>{
      this.router.navigate(["/chat-history"])
    } )
  }

}
