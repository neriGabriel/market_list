import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarCompraPage } from './listar-compra.page';

describe('ListarCompraPage', () => {
  let component: ListarCompraPage;
  let fixture: ComponentFixture<ListarCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
