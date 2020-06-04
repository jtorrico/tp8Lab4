import { Component, OnInit } from '@angular/core';
import data from '../../../assets/instrumentos.json';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: any = (data.instrumentos as any);
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
