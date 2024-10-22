import { Component, Input } from '@angular/core';
import { Student } from '../students/students.component';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // dodaj import


@Component({
  selector: 'edit-student',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  @Input() student!: Student;
  nowaOcena: number | null = null;

  dodajOcene() {
    if (this.nowaOcena) {
      this.student.dodajOcene(this.nowaOcena);
      this.nowaOcena = null;  // resetowanie pola
    }
  }
}
