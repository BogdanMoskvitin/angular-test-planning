import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  users = [
    'Максим Вильниц',
    'Ольга Крышкова',
    'Юлия Грунина',
    'Марат Большаков',
    'Светлана Иванова',
    'Данил Горбунов',
    'Дарья Васильева',
    'Владимир Силеванов',
    'Андрей Ерохин',
    'Татьяна Костина',
    'Матвей Самсонов',
    'Анастасия Горынкина'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(x:string) {
    alert(x)
  }

}
