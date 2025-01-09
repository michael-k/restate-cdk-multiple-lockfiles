import * as cdk from 'aws-cdk-lib';
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from 'constructs';

import * as restate from '@restatedev/restate-cdk';

export class MultipleLockfilesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new restate.ServiceDeployer(this, 'ServiceDeployer', {
      architecture: lambda.Architecture.X86_64,
    });
  }
}
