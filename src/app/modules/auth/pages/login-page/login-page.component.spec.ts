import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports:[HttpClientTestingModule,
      RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Validar que el formulario retorne invalido cuando recibe credenciales incorrectas
  it('Invalid Credentials',()=>{
    //Arrange
    const mockCredentials={
      email:'fdsfsdf',
      password:'dasddasdasddddddddddddddd'
    }
    const emailForm:any=component.formLogin.get('email');
    const passwordForm:any=component.formLogin.get('password');
    //Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);
    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

    //Validar que el formulario retorne es valido cuando recibe credenciales incorrectas
    it('Valid Credentials',()=>{
      //Arrange
      const mockCredentials={
        email:'test@tes.com',
        password:'12345678'
      }
      const emailForm:any=component.formLogin.get('email');
      const passwordForm:any=component.formLogin.get('password');
      //Act
      emailForm.setValue(mockCredentials.email);
      passwordForm.setValue(mockCredentials.password);
      //Assert
      expect(component.formLogin.invalid).toEqual(false);
    });
        //Validar que el boton contenga la palabra Iniciar sesión
        it('Button contains "Iniciar sesión"',()=>{
          //Arrange
          const elementRef=fixture.debugElement.query(By.css('.form-action button'))
          
          //Act
          const getInnerText=elementRef.nativeElement.innerText
          //Assert
          expect(getInnerText).toEqual('Iniciar sesión');
        });
});
