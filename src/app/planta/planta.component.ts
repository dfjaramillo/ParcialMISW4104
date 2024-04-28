import { Component, OnInit } from '@angular/core';
import { Planta } from './models/planta';
import { PlantaService } from './services/planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas : Array<Planta> = [];
  plantasInterior : Array<Planta> = [];
  plantasExterior : Array<Planta> = [];
  constructor(private plantaService: PlantaService) { }    

  getPlantas() {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.getPlantasInterior();
      this.getPlantasExterior();
    });
  }
  getPlantasInterior(){
    this.plantasInterior = this.plantas.filter(planta=>planta.tipo == "Interior")
  }

  getPlantasExterior(){
    this.plantasExterior = this.plantas.filter(planta=>planta.tipo == "Exterior")
  }

  ngOnInit() {
    this.getPlantas();
    
  }

}
