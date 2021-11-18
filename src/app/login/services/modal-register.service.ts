import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalRegisterService {

  constructor() { }


  $modalRegister = new EventEmitter<any>();

}
