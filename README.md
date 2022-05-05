Add contract module in this way:
# client: waw add ngx-contract
```
Import contract module to your page:
your_page.module.ts
```
# import { ContractModule } from 'src/app/modules';
```
@NgModule({
	imports: [
		ContractModule
	],
})
```
# Add button that opens modal to create New Contract:
```
<button (click)="cr.new_contract('here you can use params that are needed')">Create Contract</button>
```
# Add button that opens modal My Contracts:
```
<button (click)="cr.open_contract(cr.contracts)">Open Contracts</button>
