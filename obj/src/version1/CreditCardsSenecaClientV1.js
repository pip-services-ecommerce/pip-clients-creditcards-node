"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_seneca_node_1 = require("pip-services-seneca-node");
class CreditCardsSenecaClientV1 extends pip_services_seneca_node_1.CommandableSenecaClient {
    constructor(config) {
        super('credit_cards');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
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
exports.CreditCardsSenecaClientV1 = CreditCardsSenecaClientV1;
//# sourceMappingURL=CreditCardsSenecaClientV1.js.map