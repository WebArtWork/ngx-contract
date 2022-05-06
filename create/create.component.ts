import {Component, OnInit} from '@angular/core';
import {ContractService, UserService} from "../../../services";
import {ModalService} from "wacom";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public role;
  public contract: any = {};
  public users: any = [];
  public title: any = []
  // public count: any = 0;
  //
  // counter() {
  //   this.count++
  //   localStorage.setItem('Contracts created:', this.count)
  //   console.log(this.count)
  // }
  public name: String;

  constructor(public us: UserService,
              public cs: ContractService,
              public modal: ModalService,
  ) {
  }

  ngOnInit(): void {
  }

}
