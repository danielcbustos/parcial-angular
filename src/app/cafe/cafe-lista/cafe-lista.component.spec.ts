/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CafeListaComponent } from './cafe-lista.component';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http'

describe('CafeListaComponent', () => {
  let component: CafeListaComponent;
  let fixture: ComponentFixture<CafeListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      declarations: [ CafeListaComponent ],
      providers:[CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListaComponent);
    component = fixture.componentInstance;



  for (let i = 0; i < 3; i++) {
    const cafe = new Cafe(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.string(20),
      faker.datatype.string(20),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence()
    );
    component.cafes.push(cafe);
  }

  fixture.detectChanges();
  debug = fixture.debugElement;
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table element', () => {
    expect(debug.queryAll(By.css('table.table'))).toHaveSize(1)
  });

  it('should have a thead element', () => {
    expect(debug.queryAll(By.css('thead.thead'))).toHaveSize(1)
  });

  it('should have a tbody element', () => {
    expect(debug.queryAll(By.css('tbody.tbody'))).toHaveSize(1)
  });

  it('should have 3 td elements', () => {
    expect(debug.queryAll(By.css('td.nombre-cafe'))).toHaveSize(3)
  });

  it('should have consistent data', () => {
    const td = debug.queryAll(By.css('td'));
    component.cafes.forEach((c, i) => {
      expect(td[i * 4].nativeElement.textContent).toEqual(c.id.toString());
      expect(td[i * 4 + 1].nativeElement.textContent).toEqual(c.nombre);
      expect(td[i * 4 + 2].nativeElement.textContent).toEqual(c.tipo);
      expect(td[i * 4 + 3].nativeElement.textContent).toEqual(c.region);
    });
  });

  it('should have a td tags with the cafe.nombre', () => {
    debug.queryAll(By.css('td.nombre-cafe')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.cafes[i].nombre)
    });
  });

});
