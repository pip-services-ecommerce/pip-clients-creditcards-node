let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CreditCardsMemoryPersistence } from 'pip-services-CreditCards-node';
import { CreditCardsController } from 'pip-services-CreditCards-node';
import { ICreditCardsClientV1 } from '../../src/version1/ICreditCardsClientV1';
import { CreditCardsDirectClientV1 } from '../../src/version1/CreditCardsDirectClientV1';
import { CreditCardsClientFixtureV1 } from './CreditCardsClientFixtureV1';

suite('CreditCardsDirectClientV1', ()=> {
    let client: CreditCardsDirectClientV1;
    let fixture: CreditCardsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CreditCardsMemoryPersistence();
        let controller = new CreditCardsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-creditcards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-creditcards', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new CreditCardsDirectClientV1();
        client.setReferences(references);

        fixture = new CreditCardsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
