# client: waw add ngx-contract
# Import contract module: 
your_page.module.ts
```
import { ContractModule } from 'src/app/modules';
@NgModule({
	imports: [
		ContractModule
	],
})
```
# Import Contract Service & Modal: 
your_page.component.ts
export class YourPageComponent{
	constructor(public modal:ModalService, public cr: ContractService) {}
}
```
```
# Add button that opens modal to create New Contract:
your_page.component.html
```
<button (click)="cr.new_contract('here you can use params that are needed')">Create Contract</button>
```
# Add button that opens modal My Contracts:
your_page.component.html
```
<button (click)="cr.open_contract(cr.contracts)">Open Contracts</button>
