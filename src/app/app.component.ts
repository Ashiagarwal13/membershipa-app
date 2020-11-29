import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log(profile.getName());    
  }

  clicked() {
    alert("Pop up");
  }
}
