import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AutenticacaoService} from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public email: string = "";
	public password: string = "";
	public mensagem: string = "";

	constructor (
		public autenticacaoService: AutenticacaoService,
		public router: Router,
		public toastController: ToastController
	) {}

	cadastrarUsuario() {
		this.autenticacaoService.cadastroFirebase(this.email, this.password)
		.then((res) => {
			this.router.navigate(['app/home/home']);
		}).catch((error) => {
			this.mensagem = "Erro ao cadastrar usuário";
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
