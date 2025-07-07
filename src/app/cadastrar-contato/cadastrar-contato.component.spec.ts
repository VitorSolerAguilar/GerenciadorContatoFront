import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContatoComponent } from './cadastrar-contato.component';

describe('CadastrarContatoComponent', () => {
  let component: CadastrarContatoComponent;
  let fixture: ComponentFixture<CadastrarContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
