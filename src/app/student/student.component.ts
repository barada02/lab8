import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: any[] = [];
  newStudent = {
    name: '',
    age: '',
    grade: ''
  };

  constructor(private http: HttpClient) {
    this.fetchStudents();
  }

  onSubmit() {
    this.http.post('https://angulartest-93e44-default-rtdb.asia-southeast1.firebasedatabase.app/students.json', 
      this.newStudent
    ).subscribe(() => {
      this.fetchStudents();
      this.newStudent = { name: '', age: '', grade: '' };
    });
  }

  fetchStudents() {
    this.http.get('https://angulartest-93e44-default-rtdb.asia-southeast1.firebasedatabase.app/students.json')
      .subscribe((data: any) => {
        if (data) {
          this.students = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
        } else {
          this.students = [];
        }
      });
  }
}
