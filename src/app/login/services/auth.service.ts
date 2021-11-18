import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af:AngularFireAuth) {}



  createUser(pass: string, email:string ){


    this.af.createUserWithEmailAndPassword(pass,email)

  }

}
