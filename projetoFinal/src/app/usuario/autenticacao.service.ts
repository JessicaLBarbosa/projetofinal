import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  loginFirebase(email, password) {
		return this.ngFireAuth.signInWithEmailAndPassword(email, password)
	}

	cadastroFirebase(email, password) {
		return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
	}
}
