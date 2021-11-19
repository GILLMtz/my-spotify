import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import * as mockRaw from '../../../data/user.json';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
describe('AuthService', () => {
  let service: AuthService;
  let mockUser:any=(mockRaw as any).default;
  let httpClientSpy:{post:jasmine.Spy}
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
       
    });
    httpClientSpy=jasmine.createSpyObj('HttpClient',['post']);
    service =new AuthService(httpClientSpy as any )
  });

  /* it('should be created', () => {
    expect(service).toBeTruthy();
  }); */

  //Validar que retorne un objeto "data" y "tokenSession" 
  it('Return Object "data" and "tokenSession" ',(done:DoneFn)=>{
    //Arrange
    
    const user:any=mockUser.UserOk;
    const mockResponse={
      data:{},
      tokenSession:'x0x0x0x'
    }
    //Act
    httpClientSpy.post.and.returnValue(
      of( mockResponse)
      );
    //Assert
    service.sendCredential(user.email,user.password).subscribe(
      responseApi=>{
        const getProperties=Object.keys(responseApi);
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        done();
        console.log('<<<<>>>>> Respuesta api 😎😎',responseApi)
      }
    );
  });
});
