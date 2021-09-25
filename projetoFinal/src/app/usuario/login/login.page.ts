import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AutenticacaoService} from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
	public password: string = "";
	public mensagem: string = "";

	constructor (
		public autenticacaoService: AutenticacaoService,
		public router: Router,
		public toastController: ToastController
	) {}

	loginUsuario() {
		this.autenticacaoService.loginFirebase(this.email, this.password)
		.then((res) => {
			this.router.navigate(['home']);
		}).catch((error) => {
			this.mensagem = "E-mail e/ou Senha incorreto(s)";
			this.exibeMensagem();
		})
	}

	async exibeMensagem() {
		const toast = await this.toastController.create({
			message: this.mensagem,
			duration: 2000
		});
		toast.present();
	}

  ngOnInit() {
  }

}
