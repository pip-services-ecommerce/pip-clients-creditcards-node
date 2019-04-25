import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { CreditCardV1 } from './CreditCardV1';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';
export declare class CreditCardsLambdaClientV1 extends CommandableLambdaClient implements ICreditCardsClientV1 {
    constructor(config?: any);
    getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CreditCardV1>) => void): void;
    getCreditCardById(correlationId: string, cardId: string, customerId: string, callback: (err: any, card: CreditCardV1) => void): void;
    createCreditCard(correlationId: string, card: CreditCardV1, callback: (err: any, card: CreditCardV1) => void): void;
    updateCreditCard(correlationId: string, card: CreditCardV1, callback: (err: any, card: CreditCardV1) => void): void;
    deleteCreditCardById(correlationId: string, cardId: string, customerId: string, callback: (err: any, card: CreditCardV1) => void): void;
}
