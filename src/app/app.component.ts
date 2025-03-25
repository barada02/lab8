import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentComponent, FormsModule],
  template: `
    <main>
      <app-student></app-student>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'lab8';
}
