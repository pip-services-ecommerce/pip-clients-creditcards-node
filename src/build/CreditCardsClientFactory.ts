import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { CreditCardsDirectClientV1 } from '../version1/CreditCardsDirectClientV1';
import { CreditCardsHttpClientV1 } from '../version1/CreditCardsHttpClientV1';
import { CreditCardsSenecaClientV1 } from '../version1/CreditCardsSenecaClientV1';
import { CreditCardsLambdaClientV1 } from '../version1/CreditCardsLambdaClientV1';

export class CreditCardsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-creditcards', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-creditcards', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-creditcards', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-creditcards', 'client', 'seneca', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-creditcards', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(CreditCardsClientFactory.DirectClientV1Descriptor, CreditCardsDirectClientV1);
		this.registerAsType(CreditCardsClientFactory.HttpClientV1Descriptor, CreditCardsHttpClientV1);
		this.registerAsType(CreditCardsClientFactory.SenecaClientV1Descriptor, CreditCardsSenecaClientV1);
		this.registerAsType(CreditCardsClientFactory.LambdaClientV1Descriptor, CreditCardsLambdaClientV1);
	}
	
}
