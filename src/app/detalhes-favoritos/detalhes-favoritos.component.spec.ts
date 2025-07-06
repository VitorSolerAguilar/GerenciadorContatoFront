import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesFavoritosComponent } from './detalhes-favoritos.component';

describe('DetalhesFavoritosComponent', () => {
  let component: DetalhesFavoritosComponent;
  let fixture: ComponentFixture<DetalhesFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
