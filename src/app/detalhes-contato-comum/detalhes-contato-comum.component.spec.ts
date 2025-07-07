import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesContatoComumComponent } from './detalhes-contato-comum.component';

describe('DetalhesContatoComumComponent', () => {
  let component: DetalhesContatoComumComponent;
  let fixture: ComponentFixture<DetalhesContatoComumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesContatoComumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesContatoComumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
