import { OnInit, AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService, Profile } from '../../../services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-add-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-profile.component.html',
  styleUrl: './add-profile.component.css'
})

export class AddProfileComponent implements AfterViewInit {


  newProfile: Profile = { nickname: '', photo: '', location: '' };

  constructor(private profileService: ProfileService, private router: Router) { }

  addProfile(): void {
    console.log('Submitting profile:', this.newProfile); // Debugging line
    this.profileService.addProfile(this.newProfile).subscribe(() => {
      console.log('Profile added successfully');
      this.newProfile = { nickname: '', photo: '', location: '' };
    });
  }



  ngAfterViewInit(): void {
    const modalElement = document.getElementById("exampleModal")
    const modal = new window.bootstrap.Modal((modalElement));
    modal.show();

    modalElement?.addEventListener("hidden.bs.modal", () => {
      this.router.navigate(["/"])
    })
  }

}
