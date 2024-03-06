import { Component } from '@angular/core';
import { Person } from '../model/person';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {

  displayedColumns: string[] = ['name', 'surname', 'age'];

  personList: Person[] = [
    { name: "Matteo", surname: "Tinacci", age: 18 },
    { name: "Lollo", surname: "Coglione", age: 2 },
    { name: "Bobo", surname: "Cane", age: 19 },
  ]

}
