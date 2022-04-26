import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ContractComponent } from './contract.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		ContractComponent
	],
	exports: [
		ContractComponent
	],
	providers: []
})

export class ContractModule { }
