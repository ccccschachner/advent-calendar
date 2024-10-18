import { Component, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  days: { dayNumber: number, isOpened: boolean, content: string }[] = [];
  selectedDay: { dayNumber: number, content: string } | null = null; // To store the currently opened day
  hoursUntilChristmas: number=0;

  constructor() {
    this.initializeDays();
    this.calculateHoursUntilChristmas();
  }

  initializeDays(): void {
    const daysArray = Array.from({ length: 24 }, (_, i) => i + 1);

    for (let i = daysArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [daysArray[i], daysArray[j]] = [daysArray[j], daysArray[i]];
    }

    for (let i = 0; i < daysArray.length; i++) {
      this.days.push({
        dayNumber: daysArray[i],
        isOpened: false,
        content: `./assets/images/${daysArray[i]}.jpg`,
      });
    }
  }

  openDay(day: { dayNumber: number, isOpened: boolean, content: string }): void {
    const today = new Date().getDate();
    //if (day.dayNumber <= today) {
      if (!day.isOpened) {
        day.isOpened = true;
      }
      this.selectedDay = day;
    /*}
    else {
      this.selectedDay = day;
      this.selectedDay.content = "not found"
      console.log("Not available yet ;) ");
    }*/
  }

  // Close the modal when the user clicks the close button
  closeModal(): void {
    this.selectedDay = null; // Reset the selected day to hide the modal
  }

  calculateHoursUntilChristmas(): void {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmasDate = new Date(currentYear, 11, 24);

    if (today > christmasDate) {
      christmasDate.setFullYear(currentYear + 1);
    }
    const timeDiff = christmasDate.getTime() - today.getTime();
    this.hoursUntilChristmas = Math.floor(timeDiff / (1000 * 60 * 60));
  }
   
}