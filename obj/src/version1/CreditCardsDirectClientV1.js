"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class CreditCardsDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor("pip-services-creditcards", "controller", "*", "*", "*"));
    }
    getCreditCards(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'credit_cards.get_credit_cards');
        this._controller.getCreditCards(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getCreditCardById(correlationId, cardId, customerId, callback) {
        let timing = this.instrument(correlationId, 'credit_cards.get_credit_card_by_id');
        this._controller.getCreditCardById(correlationId, cardId, customerId, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }
    createCreditCard(correlationId, card, callback) {
        let timing = this.instrument(correlationId, 'credit_cards.create_credit_card');
        this._controller.createCreditCard(correlationId, card, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }
    updateCreditCard(correlationId, card, callback) {
        let timing = this.instrument(correlationId, 'credit_cards.update_credit_card');
        this._controller.updateCreditCard(correlationId, card, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }
    deleteCreditCardById(correlationId, cardId, customerId, callback) {
        let timing = this.instrument(correlationId, 'credit_cards.delete_credit_card_by_id');
        this._controller.deleteCreditCardById(correlationId, cardId, customerId, (err, card) => {
            timing.endTiming();
            callback(err, card);
        });
    }
}
exports.CreditCardsDirectClientV1 = CreditCardsDirectClientV1;
//# sourceMappingURL=CreditCardsDirectClientV1.js.map