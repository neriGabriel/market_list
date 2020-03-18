import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoCompraPage } from './info-compra.page';

describe('InfoCompraPage', () => {
  let component: InfoCompraPage;
  let fixture: ComponentFixture<InfoCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
