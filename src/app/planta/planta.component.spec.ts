/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './services/planta.service';
import { Planta } from './models/planta';

describe('PlantaComponent', () => {
 let component: PlantaComponent;
 let fixture: ComponentFixture<PlantaComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantaComponent ],
     providers: [ PlantaService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PlantaComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 2; i++) {
    const planta = new Planta(
      1,
      "test",
      "test",
      "test",
      "test",
      "test",
      "test"
    );
    component.plantas.push(planta);
  }

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 3 table row elements', () => {
   expect(debug.queryAll(By.css('*|tr'))).toHaveSize(3)
 });

});