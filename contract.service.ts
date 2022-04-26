import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

@Injectable({
    providedIn: 'root'
})
export class ContractService {
    public contracts: any = [];
    public _contracts: any = {};
    public bySto:any ={}
    constructor(private mongo: MongoService, private alert: AlertService) {
        this.contracts = mongo.get('contract', {}, (arr, obj)=>{
            this._contracts = obj;
        });
    }
    create(contract:any={}, text = 'contract has been created.') {
        if(contract._id) return this.save(contract);
        this.mongo.create('contract', contract, created=>{
            this.alert.show({ text });
        });
    }
    doc(contractId){
        if(!this._contracts[contractId]){
            this._contracts[contractId] = this.mongo.fetch('contract', {
                query: {
                    _id: contractId
                }
            });
        }
        return this._contracts[contractId];
    }
    update(contract, text = 'contract has been updated.') {
        this.mongo.afterWhile(contract, _=> {
            this.save(contract, text);
        });
    }
    save(contract, text = 'contract has been updated.'){
        this.mongo.update('contract', contract, _=>{
            if(text) this.alert.show({ text, unique: contract });
        });
    }
    delete(contract, text = 'contract has been deleted.') {
        this.mongo.delete('contract', contract, _=>{
            if(text) this.alert.show({ text });
        });
    }
}
