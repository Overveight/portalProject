import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss']
})
export class UserAddFormComponent implements OnInit {

  constructor() { }
  users: any[] = [
    {title: '1'},
    {title: '1'},
    {title: '1'},
    {title: '1'}
  ]
  ngOnInit(): void {
  }

}
