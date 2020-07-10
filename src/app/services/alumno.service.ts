import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  listAlumnos: Alumno[] = [
    { nombre: 'Juan Perez', estado: 'Aprobado' },
    { nombre: 'Nicolas Garcia', estado: 'No Aprobado' },
    { nombre: 'Maria Funes', estado: 'Promocionado' }
  ];
  constructor() { }

  addAlumno(alumno: Alumno): void {
    this.listAlumnos.unshift(alumno);
  }
}
