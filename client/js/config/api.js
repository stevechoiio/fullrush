import awsconfig from "../../aws-exports";
import AWSAppSyncClient from "aws-appsync";
import { Auth } from "aws-amplify";

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndPoint,
  region: awsconfig.aws_project_region,
  auth: {
    type: awsconfig.aws_appsync_authType,
    // apiKey: awsconfig.aws_appsync_apiKey
    
    // jwtToken: async () => (await Auth.currentSession()).getAcceessToken().getJwtToken(),
  }
});

export default client;
