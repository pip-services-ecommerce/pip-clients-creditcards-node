import { DataPage } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';

import { CreditCardV1 } from './CreditCardV1';

export interface ICreditCardsClientV1 {
    getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CreditCardV1>) => void): void;

    getCreditCardById(correlationId: string, cardId: string, customerId: string,
        callback: (err: any, card: CreditCardV1) => void): void;

    createCreditCard(correlationId: string, card: CreditCardV1, 
        callback: (err: any, card: CreditCardV1) => void): void;

    updateCreditCard(correlationId: string, card: CreditCardV1, 
        callback: (err: any, card: CreditCardV1) => void): void;

    deleteCreditCardById(correlationId: string, cardId: string, customerId: string,
        callback: (err: any, card: CreditCardV1) => void): void;
}
