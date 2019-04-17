export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "fullrush-20190415211635-deployment"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://eeqz3qflebh3zcp7rglidipl54.appsync-api.us-west-2.amazonaws.com/graphql"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_Am4tMrODA",
      WEB_CLIENT_ID: "1k4kfj0fndja4nno46pg31rpm",
      IDENTITY_POOL_ID: "us-west-2:37460251-8ea4-4605-8b97-fbb5e997fe53"
    },
    social: {
      FB: "2132652943414873"
    },
  };