import { YamlConfigReader } from 'pip-services-commons-node';
import { CreditCardsClientFixtureV1 } from './CreditCardsClientFixtureV1';
import { CreditCardsLambdaClientV1 } from '../../src/version1/CreditCardsLambdaClientV1';

suite('CreditCardsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: CreditCardsLambdaClientV1;
    let fixture: CreditCardsClientFixtureV1;

    setup((done) => {
        client = new CreditCardsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new CreditCardsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});