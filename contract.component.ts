import { Component } from '@angular/core';
import {ContractService} from "./contract.service";
@Component({
	selector: 'contract',
	templateUrl: './contract.component.html',
	styleUrls: ['./contract.component.scss']
})
export class ContractComponent{
	constructor(public cr: ContractService) {}
}
