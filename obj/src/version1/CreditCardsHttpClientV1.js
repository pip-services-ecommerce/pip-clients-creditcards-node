"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CreditCardsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/credit_cards');
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
exports.CreditCardsHttpClientV1 = CreditCardsHttpClientV1;
//# sourceMappingURL=CreditCardsHttpClientV1.js.map