"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class CreditCardsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('credit_cards');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getCreditCards(correlationId, filter, paging, callback) {
        this.callCommand('get_credit_cards', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getCreditCardById(correlationId, cardId, customerId, callback) {
        this.callCommand('get_credit_card_by_id', correlationId, {
            card_id: cardId,
            customer_id: customerId
        }, callback);
    }
    createCreditCard(correlationId, card, callback) {
        this.callCommand('create_credit_card', correlationId, {
            card: card
        }, callback);
    }
    updateCreditCard(correlationId, card, callback) {
        this.callCommand('update_credit_card', correlationId, {
            card: card
        }, callback);
    }
    deleteCreditCardById(correlationId, cardId, customerId, callback) {
        this.callCommand('delete_credit_card_by_id', correlationId, {
            card_id: cardId,
            customer_id: customerId
        }, callback);
    }
}
exports.CreditCardsLambdaClientV1 = CreditCardsLambdaClientV1;
//# sourceMappingURL=CreditCardsLambdaClientV1.js.map