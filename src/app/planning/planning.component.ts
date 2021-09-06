import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(x:string) {
    alert(x)
  }

  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
