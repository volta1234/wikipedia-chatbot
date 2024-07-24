import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-add-profile',
  standalone: true,
  imports: [],
  templateUrl: './add-profile.component.html',
  styleUrl: './add-profile.component.css'
})
export class AddProfileComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const modalElement = document.getElementById("exampleModal")
    const modal = new window.bootstrap.Modal((modalElement));
    modal.show();

    modalElement?.addEventListener("hidden.bs.modal",() => {
      this.router.navigate(["/"])
    })
  }

}
