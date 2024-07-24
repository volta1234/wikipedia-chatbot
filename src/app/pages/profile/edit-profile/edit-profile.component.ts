import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const modalElement = document.getElementById("exampleModal")
    const modal = new window.bootstrap.Modal((modalElement));
    modal.show();

    modalElement?.addEventListener("hidden.bs.modal", () =>{
      this.router.navigate(["/"])
    })
  }

}
