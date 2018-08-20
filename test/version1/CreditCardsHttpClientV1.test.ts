let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { CreditCardsMemoryPersistence } from 'pip-services-CreditCards-node';
import { CreditCardsController } from 'pip-services-CreditCards-node';
import { CreditCardsHttpServiceV1 } from 'pip-services-CreditCards-node';
import { ICreditCardsClientV1 } from '../../src/version1/ICreditCardsClientV1';
import { CreditCardsHttpClientV1 } from '../../src/version1/CreditCardsHttpClientV1';
import { CreditCardsClientFixtureV1 } from './CreditCardsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('CreditCardsRestClientV1', ()=> {
    let service: CreditCardsHttpServiceV1;
    let client: CreditCardsHttpClientV1;
    let fixture: CreditCardsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CreditCardsMemoryPersistence();
        let controller = new CreditCardsController();

        service = new CreditCardsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-creditcards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-creditcards', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-creditcards', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CreditCardsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

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
