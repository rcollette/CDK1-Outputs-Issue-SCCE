#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { IamUsersStack } from '../lib/IamUsersStack';
import { FargateStack } from "../lib/FargateStack";

const app = new App();
const iamUsersStack = new IamUsersStack(app, 'temp-cdkexportissue-users-stack', {
  description: 'Temporary stack to demonstrate CDK 2 cross stack exports not working issue.',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
new FargateStack(app, 'temp-cdkexportissue-stack', {
  description: 'Temporary stack to demonstrate CDK 2 cross stack exports not working issue.',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  environment: {},
  signerAccessKey: iamUsersStack.signerAccessKey
});


