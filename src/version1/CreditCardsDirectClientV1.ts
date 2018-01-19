import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { ICreditCardsClientV1 } from './ICreditCardsClientV1';
//import { ICreditCardsController } from 'pip-services-creditcards-node';
import { CreditCardV1 } from './CreditCardV1';

export class CreditCardsDirectClientV1 extends DirectClient<any> implements ICreditCardsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-creditcards", "controller", "*", "*", "*"))
    }

    public getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CreditCardV1>) => void): void {
        let timing = this.instrument(correlationId, 'creditcards.get_creditcards');
        this._controller.getCreditCards(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getCreditCardById(correlationId: string, cardId: string, 
        callback: (err: any, creditcard: CreditCardV1) => void): void {
        let timing = this.instrument(correlationId, 'creditcards.get_creditcard_by_id');
        this._controller.getCreditCardById(correlationId, cardId, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }

    public createCreditCard(correlationId: string, card: CreditCardV1, 
        callback: (err: any, card: CreditCardV1) => void): void {
        let timing = this.instrument(correlationId, 'creditcards.create_creditcard');
        this._controller.createCreditCard(correlationId, card, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }

    public updateCreditCard(correlationId: string, card: CreditCardV1, 
        callback: (err: any, card: CreditCardV1) => void): void {
        let timing = this.instrument(correlationId, 'creditcards.update_creditcard');
        this._controller.updateCreditCard(correlationId, card, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }

    public deleteCreditCardById(correlationId: string, cardId: string,
        callback: (err: any, card: CreditCardV1) => void): void {
        let timing = this.instrument(correlationId, 'creditcards.delete_creditcard_by_id');
        this._controller.deleteCreditCardById(correlationId, cardId, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }
}