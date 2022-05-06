import {Component, OnInit} from '@angular/core';
import {HttpService} from "wacom";
import {UserService} from "../../../services";
import {ContractService} from "../contract.service";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  public contracts: any = [];
  public title: any = [];

  changeStatus(contract, status) {
    contract.status = status;
    this.http.post('/api/contract/change', {_id: contract._id, status})
  }

  constructor(public us: UserService, public cr: ContractService, private http: HttpService) {
    http.get('/api/contract/myContracts', contracts => {
      this.contracts = contracts;
    })
  }

  ngOnInit(): void {
  }

}
