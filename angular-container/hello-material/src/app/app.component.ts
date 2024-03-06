import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/person';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TabellaComponent } from './tabella/tabella.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabellaComponent, MatToolbarModule, MatIconModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Progetto';
  numClick = 0;
  buttonDisabled: boolean = false;
  newPerson: Person = { name: "", surname: "", age: 0 };
  editMode: boolean = false;

  personList: Person[] = [
    { name: "Matteo", surname: "Tinacci", age: 18 },
    { name: "Lollo", surname: "Coglione", age: 2 },
    { name: "Bobo", surname: "Cane", age: 19 },
  ]

  AddButton = () => {
    this.personList.push(this.newPerson);
    this.buttonDisabled = true;
    this.newPerson = { name: "", surname: "", age: 0 };
  }

  click2 = () => {
    this.buttonDisabled = false;
  }

  DeleteButton = (index: number) => {
    if (index > -1)
      this.personList.splice(index, 1);
  }

  ModifyButton = (index: number) => {
    this.editMode = true;
    this.newPerson = this.personList[index];
  }

  CompleteEdit = () => {
    this.editMode = false;
    this.newPerson = { name: "", surname: "", age: 0 };
  }


}
