import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { AnswerFormat } from './answer-format';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public listAnswersFromServices = [
    {
      id: 1,
      idActividad: 5,
      valor: "1",
      recurso: ''
    },
    {
      id: 2,
      idActividad: 5,
      valor: "A",
      recurso: ''
    },
    {
      id: 3,
      idActividad: 5,
      valor: "2",
      recurso: ''
    },
    {
      id: 4,
      idActividad: 5,
      valor: "B",
      recurso: ''
    },
    {
      id: 5,
      idActividad: 5,
      valor: "C",
      recurso: ''
    },
    {
      id: 6,
      idActividad: 5,
      valor: "D",
      recurso: ''
    },
    {
      id: 7,
      idActividad: 5,
      valor: "5",
      recurso: ''
    },
    {
      id: 8,
      idActividad: 5,
      valor: "6",
      recurso: ''
    },
    {
      id: 9,
      idActividad: 5,
      valor: "7",
      recurso: ''
    },
    {
      id: 10,
      idActividad: 5,
      valor: "H",
      recurso: ''
    },
  ];

  public listAnswers: Array<AnswerFormat>;
  public answerUser: Array<AnswerFormat>;

  constructor(public alertController: AlertController) {
    this.listAnswers = <Array<AnswerFormat>> this.listAnswersFromServices;
    console.log(this.listAnswers);
    this.answerUser = new Array();
  }

  selectAnswer(answer: any) {
    console.log(answer);
    for (let i = 0; i < this.listAnswers.length; i++) {
      if (this.listAnswers[i].valor === answer.valor) {
        let answerSelected = this.listAnswers[i];
        if (!answerSelected.selected) {
          this.answerUser.push(answer);
        } else {
          this.removeAnswer(answer);
        }
        answerSelected.selected = !answerSelected.selected;
        this.listAnswers[i] = answerSelected;
      }
    }
  }

  removeAnswer(answer) {
    this.answerUser.forEach((item, index) => {
      if (item === answer) this.answerUser.splice(index, 1);
    });
  }

  sendAnswer() {
    // En este lugar envias llamas al servicio y envias la respuesta.
    // Como la respuesta esta almacenada en la lista answerUser, aqui debes implementar la logica necesaria
    // para enviar la respuesta digamos un string separado por ',' --> 2,G,5,Y

    let answerSend = "";
    for (let i = 0; i < this.answerUser.length; i++) {
      if (i === this.answerUser.length - 1) {
        answerSend = answerSend + this.answerUser[i].valor;
      } else {
        answerSend = answerSend + this.answerUser[i].valor + ",";
      }
    }
    this.presentAlert("Esta es la respuesta del usuario: " + answerSend);
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: "Send",
      message: message,
      buttons: ["OK"],
    });
    await alert.present();
  }
}
