import { Component } from '@angular/core';
import { MaterialModule } from '../../../share/modules/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Festivo } from '../../../core/entities/festivo';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { FestivosService } from '../../services/festivos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-festivos',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MaterialModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, NgxDatatableModule, FormsModule],
  templateUrl: './festivos.component.html',
  styleUrl: './festivos.component.css'
})
export class FestivosComponent  {
  public festivos: Festivo[] = [];
  public columnas=[
    {name: "Name", prop:"nombre"},
    {name: "Day", prop:"dia"},
    {name: "Month", prop:"mes"}
  ];

  public selectedYear: number;
  public selectedDate: string;

  constructor(private festivosService: FestivosService, private datePipe: DatePipe) {
    this.selectedYear = new Date().getFullYear(); // se asigna el año actual como valor por defecto
    this.selectedDate = "";
  }

  public getHolidays(){
    if (this.selectedYear){
        this.festivosService.getHolidays(this.selectedYear).subscribe({
          next: response => {
            this.festivos = response.map((item: any) => ({
              id: item.id,
              nombre: item.nombre,
              dia: item.dia,
              mes: item.mes,
              diaspascua: item.diasPascua,
              tipo: item.tipo
            }));
          },
          error: error  => {
            window.alert(error.message);
          }
      });
    }
  }

  public checkHolidays() {
    if (this.selectedDate) {
      const formattedDate = this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy');
      if (formattedDate) {
        this.festivosService.checkHolidays(formattedDate).subscribe({
          next: (response: boolean) => {
            if (response) {
              window.alert("It's a holiday");
            } else {
              window.alert("It's not a holiday");
            }
          },
          error: error => {
            window.alert(error.message);
          }
        });
      }
    }
  }
}
