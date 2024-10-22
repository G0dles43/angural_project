import { Component, Output, EventEmitter } from '@angular/core';
import { Student } from '../students/students.component';
import { NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // dodaj import

@Component({
  selector: 'add-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  imie: string = '';
  nazwisko: string = '';
  wiek: number | null = null;

  @Output() studentDodany = new EventEmitter<Student>();

  dodajStudenta() {
    if (this.imie && this.nazwisko && this.wiek) {
      const nowyStudent = new Student(this.imie, this.nazwisko, this.wiek, []);
      this.studentDodany.emit(nowyStudent);
      this.resetForm();
    }
  }

  resetForm() {
    this.imie = '';
    this.nazwisko = '';
    this.wiek = null;
  }
}
