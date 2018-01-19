let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { CreditCardsMemoryPersistence } from 'pip-services-CreditCards-node';
import { CreditCardsController } from 'pip-services-CreditCards-node';
import { CreditCardsSenecaServiceV1 } from 'pip-services-CreditCards-node';
import { ICreditCardsClientV1 } from '../../src/version1/ICreditCardsClientV1';
import { CreditCardsSenecaClientV1 } from '../../src/version1/CreditCardsSenecaClientV1';
import { CreditCardsClientFixtureV1 } from './CreditCardsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('CreditCardsSenecaClient', () => {
    let service: CreditCardsSenecaServiceV1;
    let client: CreditCardsSenecaClientV1;
    let fixture: CreditCardsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CreditCardsMemoryPersistence();
        let controller = new CreditCardsController();

        service = new CreditCardsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-creditcards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-creditcards', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-creditcards', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new CreditCardsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new CreditCardsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
