import { Component, OnInit } from '@angular/core';
import { ModalRegisterService } from '../services/modal-register.service';
import { FormControl, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {


  
 

  constructor(
    
    private modalSS: ModalRegisterService,
    private registerUser: AuthService
    
    
    ) { 


   
    
  }

  ngOnInit(): void {

    


  }

  modalClose(){



    this.modalSS.$modalRegister.emit(false)


  }


  async register(pass:string, email: string){

    try{this.registerUser.createUser(email,pass)}

    catch(e)
    {console.log(e)}


  }

}
