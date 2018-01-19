import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';

import { CreditCardV1 } from './CreditCardV1';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';

export class CreditCardsHttpClientV1 extends CommandableHttpClient implements ICreditCardsClientV1 {       
    
    constructor(config?: any) {
        super('creditcards');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CreditCardV1>) => void): void {
        this.callCommand( 
            'get_creditcards', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getCreditCardById(correlationId: string, cardId: string,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand( 
            'get_creditcard_by_id',
            correlationId,
            {
                card_id: cardId
            }, 
            callback
        );        
    }

    public createCreditCard(correlationId: string, card: CreditCardV1,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand(
            'create_creditcard',
            correlationId,
            {
                card: card
            }, 
            callback
        );
    }

    public updateCreditCard(correlationId: string, card: CreditCardV1,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand(
            'update_creditcard', 
            correlationId,
            {
                card: card
            }, 
            callback
        );
    }

    public deleteCreditCardById(correlationId: string, cardId: string,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand(
            'delete_creditcard_by_id', 
            correlationId,
            {
                card_id: cardId
            }, 
            callback
        );
    }
    
}
