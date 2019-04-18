import awsconfig from "../../aws-exports";
import AWSAppSyncClient from "aws-appsync";

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndPoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.authType,
    apiKey: awsconfig.apiKey,
    // jwtToken: async () => (await Auth.currentSession()).getAcceessToken().getJwtToken(),
  },
});

export default client;
