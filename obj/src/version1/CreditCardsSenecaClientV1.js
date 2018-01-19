"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class CreditCardsSenecaClientV1 extends pip_services_net_node_1.CommandableSenecaClient {
    constructor(config) {
        super('creditcards');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getCreditCards(correlationId, filter, paging, callback) {
        this.callCommand('get_creditcards', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getCreditCardById(correlationId, cardId, callback) {
        this.callCommand('get_creditcard_by_id', correlationId, {
            card_id: cardId
        }, callback);
    }
    createCreditCard(correlationId, card, callback) {
        this.callCommand('create_creditcard', correlationId, {
            card: card
        }, callback);
    }
    updateCreditCard(correlationId, card, callback) {
        this.callCommand('update_creditcard', correlationId, {
            card: card
        }, callback);
    }
    deleteCreditCardById(correlationId, cardId, callback) {
        this.callCommand('delete_creditcard_by_id', correlationId, {
            card_id: cardId
        }, callback);
    }
}
exports.CreditCardsSenecaClientV1 = CreditCardsSenecaClientV1;
//# sourceMappingURL=CreditCardsSenecaClientV1.js.map