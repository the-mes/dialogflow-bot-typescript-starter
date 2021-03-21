import * as functions from 'firebase-functions';
import { WebhookClient } from 'dialogflow-fulfillment';

process.env.DEBUG = 'dialogflow:debug';

export const packageBot = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  const intentMap = new Map();

  intentMap.set('', null);
  intentMap.set('', null);

  agent.handleRequest(intentMap).then(
    () => null,
    () => null
  );
});
