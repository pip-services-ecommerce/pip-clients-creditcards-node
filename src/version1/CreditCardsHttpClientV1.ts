import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { CreditCardV1 } from './CreditCardV1';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';

export class CreditCardsHttpClientV1 extends CommandableHttpClient implements ICreditCardsClientV1 {       
    
    constructor(config?: any) {
        super('v1/credit_cards');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CreditCardV1>) => void): void {
        this.callCommand( 
            'get_credit_cards', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getCreditCardById(correlationId: string, cardId: string, customerId: string,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand( 
            'get_credit_card_by_id',
            correlationId,
            {
                card_id: cardId,
                customer_id: customerId
            }, 
            callback
        );        
    }

    public createCreditCard(correlationId: string, card: CreditCardV1,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand(
            'create_credit_card',
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
            'update_credit_card', 
            correlationId,
            {
                card: card
            }, 
            callback
        );
    }

    public deleteCreditCardById(correlationId: string, cardId: string, customerId: string,
        callback: (err: any, card: CreditCardV1) => void): void {
        this.callCommand(
            'delete_credit_card_by_id', 
            correlationId,
            {
                card_id: cardId,
                customer_id: customerId
            }, 
            callback
        );
    }
    
}
