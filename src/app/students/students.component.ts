import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { CommonModule } from '@angular/common';  

export class Student {
  public showDetails: boolean = false;
  
  constructor(
    public imie: string,
    public nazwisko: string,
    public wiek: number,
    public oceny: number[]
  ) {}

  dodajOcene(ocena: number) {
    this.oceny.push(ocena);
  }
}

@Component({
  selector: 'students',
  standalone: true,
  imports: [CommonModule, NgStyle, AddStudentComponent, EditStudentComponent],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  tytul_listy = 'Lista wszystkich studentów';
  
  students: Student[] = [
    new Student('Jan', 'Kowalski', 20, [3.5, 4.0, 2.0]),
    new Student('Anna', 'Nowak', 21, [4.5, 5.0, 3.0]),
    new Student('Piotr', 'Zieliński', 22, [2.0, 3.0, 4.0]),
    new Student('Katarzyna', 'Wiśniewska', 23, [5.0, 4.5, 4.0]),
    new Student('Michał', 'Lewandowski', 19, [3.0, 2.0, 4.5])
  ];

  studentDoEdycji: Student | null = null;

  toggleDetails(student: Student) {
    student.showDetails = !student.showDetails;
    this.studentDoEdycji = student.showDetails ? student : null;
  }
  
  pokazFormularz: boolean = false;

  dodajStudenta(nowyStudent: Student) {
    this.students.push(nowyStudent);
    this.pokazFormularz = false;
  }
}
