import { OnInit, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ProfileService, Profile } from './services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent{
  title = 'wikipedia-chatbot';
  profile: Profile | undefined;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.getProfile(Number(id)).subscribe((profile) => {
        this.profile = profile;
      });
    }
  }
}
