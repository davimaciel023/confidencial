import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonAlert } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class HomePage implements OnInit {

  isAlertOpen = false;
  alertButtons = ['Fazer oq né'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
    if (isOpen === true) {
      this.router.navigate(['/parabens']);
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
