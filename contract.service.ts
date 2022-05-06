import {Injectable} from '@angular/core';
import {MongoService, AlertService, ModalService} from 'wacom';
import { CreateComponent } from './create/create.component';
import { ContractsComponent } from './contracts/contracts.component';

@Injectable({
    providedIn: 'root'
})
export class ContractService {
    public contracts: any = [];
    public _contracts: any = {};

    new_contract(users, title) {
        this.modal.show({component: CreateComponent, users, title});
    }

    open_contract(title) {
        this.modal.show({component: ContractsComponent, title});
    }

    constructor(private mongo: MongoService, private alert: AlertService, public modal: ModalService) {
        this.contracts = mongo.get('contract', {}, (arr, obj) => {
            this._contracts = obj;
        });
    }

    create(contract: any = {}, text = 'contract has been created.') {
        if (contract._id) { return this.save(contract); }
        this.mongo.create('contract', contract, created => {
            this.alert.show({text});
        });
    }

    doc(contractId) {
        if (!this._contracts[contractId]) {
            this._contracts[contractId] = this.mongo.fetch('contract', {
                query: {
                    _id: contractId,
                }
            });
        }
        return this._contracts[contractId];
    }

    update(contract, text = 'contract has been updated.') {
        this.mongo.afterWhile(contract, _ => {
            this.save(contract, text);
        });
    }

    save(contract, text = 'contract has been updated.') {
        this.mongo.update('contract', contract, _ => {
            if (text) { this.alert.show({text, unique: contract}); }
        });
    }

    delete(contract, text = 'contract has been deleted.') {
        this.mongo.delete('contract', contract, _ => {
            if (text) { this.alert.show({text}); }
        });
    }
}
