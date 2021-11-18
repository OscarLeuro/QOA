import { Component, OnInit } from '@angular/core';
import { ModalRegisterService } from './services/modal-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalSwitch:boolean = false;

  constructor(private modalSS:ModalRegisterService) { }

  ngOnInit(): void {

    this.modalSS.$modalRegister.subscribe( (valor) => {this.modalSwitch = valor})


  }


  openModal(){



    this.modalSwitch = true;


  }



}
