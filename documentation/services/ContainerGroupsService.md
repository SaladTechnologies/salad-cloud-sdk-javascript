# ContainerGroupsService

A list of all methods in the `ContainerGroupsService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description                                                                                                                 |
| :-------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [listContainerGroups](#listcontainergroups)                           | Gets the list of container groups                                                                                           |
| [createContainerGroup](#createcontainergroup)                         | Creates a new container group                                                                                               |
| [getContainerGroup](#getcontainergroup)                               | Gets a container group                                                                                                      |
| [updateContainerGroup](#updatecontainergroup)                         | Updates a container group                                                                                                   |
| [deleteContainerGroup](#deletecontainergroup)                         | Deletes a container group                                                                                                   |
| [startContainerGroup](#startcontainergroup)                           | Starts a container group                                                                                                    |
| [stopContainerGroup](#stopcontainergroup)                             | Stops a container group                                                                                                     |
| [listContainerGroupInstances](#listcontainergroupinstances)           | Gets the list of container group instances                                                                                  |
| [getContainerGroupInstance](#getcontainergroupinstance)               | Gets a container group instance                                                                                             |
| [updateContainerGroupInstance](#updatecontainergroupinstance)         | Updates a container group instance                                                                                          |
| [reallocateContainerGroupInstance](#reallocatecontainergroupinstance) | Reallocates a container group instance to run on a different Salad Node                                                     |
| [recreateContainerGroupInstance](#recreatecontainergroupinstance)     | Stops a container, destroys it, and starts a new one without requiring the image to be downloaded again on a new Salad Node |
| [restartContainerGroupInstance](#restartcontainergroupinstance)       | Stops a container and restarts it on the same Salad Node                                                                    |

## listContainerGroups

Gets the list of container groups

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers`

**Parameters**

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

**Return Type**

`ContainerGroupCollection`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroups('acme-corp', 'dev-env');

  console.log(data);
})();
```

## createContainerGroup

Creates a new container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers`

**Parameters**

| Name             | Type                                                                        | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [ContainerGroupCreationRequest](../models/ContainerGroupCreationRequest.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                                                      | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string                                                                      | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

**Return Type**

`ContainerGroup`

**Example Usage Code Snippet**

```typescript
import {
  ContainerConfiguration,
  ContainerGroupCreationRequest,
  ContainerGroupLivenessProbe,
  ContainerGroupQueueConnection,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  ContainerRestartPolicy,
  CountryCode,
  CreateContainerGroupNetworking,
  QueueBasedAutoscalerConfiguration,
  SaladCloudSdk,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const axiomLoggingConfiguration: AxiomLoggingConfiguration = {
    host: 'host',
    apiToken: 'api_token',
    dataset: 'dataset',
  };

  const datadogTagForContainerLogging: DatadogTagForContainerLogging = {
    name: 'name',
    value: 'value',
  };

  const datadogLoggingConfiguration: DatadogLoggingConfiguration = {
    host: 'host',
    apiKey: 'api_key',
    tags: [datadogTagForContainerLogging],
  };

  const format = Format.JSON;

  const containerLoggingHttpHeader: ContainerLoggingHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const compression = Compression.NONE;

  const containerHttpLoggingConfiguration: ContainerHttpLoggingConfiguration = {
    host: 'host',
    port: 43509,
    user: 'user',
    password: 'password',
    path: 'path',
    format: format,
    headers: [containerLoggingHttpHeader],
    compression: compression,
  };

  const newRelicLoggingConfiguration: NewRelicLoggingConfiguration = {
    host: 'host',
    ingestionKey: 'ingestion_key',
  };

  const containerLoggingSplunkConfiguration: ContainerLoggingSplunkConfiguration = {
    host: 'host',
    token: 'token',
  };

  const tcpLoggingConfiguration: TcpLoggingConfiguration = {
    host: 'host',
    port: 35405,
  };

  const containerLoggingConfiguration: ContainerLoggingConfiguration = {
    axiom: axiomLoggingConfiguration,
    datadog: datadogLoggingConfiguration,
    http: containerHttpLoggingConfiguration,
    newRelic: newRelicLoggingConfiguration,
    splunk: containerLoggingSplunkConfiguration,
    tcp: tcpLoggingConfiguration,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const containerRegistryAuthenticationAwsEcr: ContainerRegistryAuthenticationAwsEcr = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const containerRegistryAuthenticationBasic: ContainerRegistryAuthenticationBasic = {
    username: 'username',
    password: 'password',
  };

  const containerRegistryAuthenticationDockerHub: ContainerRegistryAuthenticationDockerHub = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const containerRegistryAuthenticationGcpGar: ContainerRegistryAuthenticationGcpGar = {
    serviceKey: 'service_key',
  };

  const containerRegistryAuthenticationGcpGcr: ContainerRegistryAuthenticationGcpGcr = {
    serviceKey: 'service_key',
  };

  const containerRegistryAuthentication: ContainerRegistryAuthentication = {
    awsEcr: containerRegistryAuthenticationAwsEcr,
    basic: containerRegistryAuthenticationBasic,
    dockerHub: containerRegistryAuthenticationDockerHub,
    gcpGar: containerRegistryAuthenticationGcpGar,
    gcpGcr: containerRegistryAuthenticationGcpGcr,
  };

  const containerResourceRequirements: ContainerResourceRequirements = {
    cpu: 13,
    memory: 28311,
    gpuClasses: ['gpu_classes'],
    storageAmount: 20719714697,
  };

  const containerConfiguration: ContainerConfiguration = {
    command: ['command'],
    environmentVariables: [],
    image: 'acme/:latest',
    imageCaching: true,
    logging: containerLoggingConfiguration,
    priority: containerGroupPriority,
    registryAuthentication: containerRegistryAuthentication,
    resources: containerResourceRequirements,
  };

  const countryCode = CountryCode.AF;

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupGRpcProbe: ContainerGroupGRpcProbe = {
    port: 4792,
    service: 'service',
  };

  const containerGroupProbeHttpHeader: ContainerGroupProbeHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const httpScheme = HttpScheme.HTTP;

  const containerGroupHttpProbeConfiguration: ContainerGroupHttpProbeConfiguration = {
    headers: [containerGroupProbeHttpHeader],
    path: 'path',
    port: 18942,
    scheme: httpScheme,
  };

  const containerGroupTcpProbe: ContainerGroupTcpProbe = {
    port: 47377,
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 987,
    periodSeconds: 10,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 30,
  };

  const theContainerGroupNetworkingLoadBalancer = TheContainerGroupNetworkingLoadBalancer.ROUND_ROBIN;

  const containerNetworkingProtocol = ContainerNetworkingProtocol.HTTP;

  const createContainerGroupNetworking: CreateContainerGroupNetworking = {
    auth: true,
    clientRequestTimeout: 100000,
    loadBalancer: theContainerGroupNetworkingLoadBalancer,
    port: 60000,
    protocol: containerNetworkingProtocol,
    serverResponseTimeout: 100000,
    singleConnectionLimit: true,
  };

  const queueBasedAutoscalerConfiguration: QueueBasedAutoscalerConfiguration = {
    desiredQueueLength: 2,
    maxReplicas: 219,
    maxDownscalePerMinute: 5,
    maxUpscalePerMinute: 16,
    minReplicas: 88,
    pollingPeriod: 680,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'path',
    port: 39086,
    queueName: 'dawtm7q4ohrrc63u35mpg4-370h--6se6eqezp-gj0',
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 479,
    periodSeconds: 1,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 1,
  };

  const containerRestartPolicy = ContainerRestartPolicy.ALWAYS;

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 15,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 563,
    tcp: containerGroupTcpProbe,
    periodSeconds: 3,
    successThreshold: 2,
    timeoutSeconds: 10,
  };

  const containerGroupCreationRequest: ContainerGroupCreationRequest = {
    autostartPolicy: true,
    container: containerConfiguration,
    countryCodes: [countryCode],
    displayName: 'QTB',
    livenessProbe: containerGroupLivenessProbe,
    name: 'name',
    networking: createContainerGroupNetworking,
    queueAutoscaler: queueBasedAutoscalerConfiguration,
    queueConnection: containerGroupQueueConnection,
    readinessProbe: containerGroupReadinessProbe,
    replicas: 257,
    restartPolicy: containerRestartPolicy,
    startupProbe: containerGroupStartupProbe,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'acme-corp',
    'dev-env',
    containerGroupCreationRequest,
  );

  console.log(data);
})();
```

## getContainerGroup

Gets a container group

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`ContainerGroup`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroup('acme-corp', 'dev-env', 'mandlebrot');

  console.log(data);
})();
```

## updateContainerGroup

Updates a container group

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type                                                    | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body               | [ContainerGroupPatch](../models/ContainerGroupPatch.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName   | string                                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string                                                  | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string                                                  | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`ContainerGroup`

**Example Usage Code Snippet**

```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupPatch,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  CountryCode,
  QueueBasedAutoscalerConfiguration,
  SaladCloudSdk,
  UpdateContainer,
  UpdateContainerGroupNetworking,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const axiomLoggingConfiguration: AxiomLoggingConfiguration = {
    host: 'host',
    apiToken: 'api_token',
    dataset: 'dataset',
  };

  const datadogTagForContainerLogging: DatadogTagForContainerLogging = {
    name: 'name',
    value: 'value',
  };

  const datadogLoggingConfiguration: DatadogLoggingConfiguration = {
    host: 'host',
    apiKey: 'api_key',
    tags: [datadogTagForContainerLogging],
  };

  const format = Format.JSON;

  const containerLoggingHttpHeader: ContainerLoggingHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const compression = Compression.NONE;

  const containerHttpLoggingConfiguration: ContainerHttpLoggingConfiguration = {
    host: 'host',
    port: 43509,
    user: 'user',
    password: 'password',
    path: 'path',
    format: format,
    headers: [containerLoggingHttpHeader],
    compression: compression,
  };

  const newRelicLoggingConfiguration: NewRelicLoggingConfiguration = {
    host: 'host',
    ingestionKey: 'ingestion_key',
  };

  const containerLoggingSplunkConfiguration: ContainerLoggingSplunkConfiguration = {
    host: 'host',
    token: 'token',
  };

  const tcpLoggingConfiguration: TcpLoggingConfiguration = {
    host: 'host',
    port: 35405,
  };

  const containerLoggingConfiguration: ContainerLoggingConfiguration = {
    axiom: axiomLoggingConfiguration,
    datadog: datadogLoggingConfiguration,
    http: containerHttpLoggingConfiguration,
    newRelic: newRelicLoggingConfiguration,
    splunk: containerLoggingSplunkConfiguration,
    tcp: tcpLoggingConfiguration,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const containerRegistryAuthenticationAwsEcr: ContainerRegistryAuthenticationAwsEcr = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const containerRegistryAuthenticationBasic: ContainerRegistryAuthenticationBasic = {
    username: 'username',
    password: 'password',
  };

  const containerRegistryAuthenticationDockerHub: ContainerRegistryAuthenticationDockerHub = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const containerRegistryAuthenticationGcpGar: ContainerRegistryAuthenticationGcpGar = {
    serviceKey: 'service_key',
  };

  const containerRegistryAuthenticationGcpGcr: ContainerRegistryAuthenticationGcpGcr = {
    serviceKey: 'service_key',
  };

  const containerRegistryAuthentication: ContainerRegistryAuthentication = {
    awsEcr: containerRegistryAuthenticationAwsEcr,
    basic: containerRegistryAuthenticationBasic,
    dockerHub: containerRegistryAuthenticationDockerHub,
    gcpGar: containerRegistryAuthenticationGcpGar,
    gcpGcr: containerRegistryAuthenticationGcpGcr,
  };

  const containerResourceUpdateSchema: ContainerResourceUpdateSchema = {
    cpu: 4,
    memory: 50175,
    gpuClasses: ['gpu_classes'],
    storageAmount: 27536827537,
  };

  const updateContainer: UpdateContainer = {
    command: ['command'],
    environmentVariables: [],
    image: 'image',
    imageCaching: true,
    logging: containerLoggingConfiguration,
    priority: containerGroupPriority,
    registryAuthentication: containerRegistryAuthentication,
    resources: containerResourceUpdateSchema,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 27606,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupGRpcProbe: ContainerGroupGRpcProbe = {
    port: 4792,
    service: 'service',
  };

  const containerGroupProbeHttpHeader: ContainerGroupProbeHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const httpScheme = HttpScheme.HTTP;

  const containerGroupHttpProbeConfiguration: ContainerGroupHttpProbeConfiguration = {
    headers: [containerGroupProbeHttpHeader],
    path: 'path',
    port: 18942,
    scheme: httpScheme,
  };

  const containerGroupTcpProbe: ContainerGroupTcpProbe = {
    port: 47377,
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 987,
    periodSeconds: 10,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 30,
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 479,
    periodSeconds: 1,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 1,
  };

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 15,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 563,
    tcp: containerGroupTcpProbe,
    periodSeconds: 3,
    successThreshold: 2,
    timeoutSeconds: 10,
  };

  const queueBasedAutoscalerConfiguration: QueueBasedAutoscalerConfiguration = {
    desiredQueueLength: 2,
    maxReplicas: 219,
    maxDownscalePerMinute: 5,
    maxUpscalePerMinute: 16,
    minReplicas: 88,
    pollingPeriod: 680,
  };

  const containerGroupPatch: ContainerGroupPatch = {
    displayName: 'rukYe',
    container: updateContainer,
    replicas: 476,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueAutoscaler: queueBasedAutoscalerConfiguration,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    containerGroupPatch,
  );

  console.log(data);
})();
```

## deleteContainerGroup

Deletes a container group

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup('acme-corp', 'dev-env', 'mandlebrot');

  console.log(data);
})();
```

## startContainerGroup

Starts a container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/start`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup('acme-corp', 'dev-env', 'mandlebrot');

  console.log(data);
})();
```

## stopContainerGroup

Stops a container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/stop`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup('acme-corp', 'dev-env', 'mandlebrot');

  console.log(data);
})();
```

## listContainerGroupInstances

Gets the list of container group instances

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`ContainerGroupInstanceCollection`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroupInstances(
    'acme-corp',
    'dev-env',
    'mandlebrot',
  );

  console.log(data);
})();
```

## getContainerGroupInstance

Gets a container group instance

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}`

**Parameters**

| Name                     | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | string | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | string | ✅       | The unique container group instance identifier                                                                                                                                                                                                      |

**Return Type**

`ContainerGroupInstance`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
  );

  console.log(data);
})();
```

## updateContainerGroupInstance

Updates a container group instance

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}`

**Parameters**

| Name                     | Type                                                                    | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body                     | [ContainerGroupInstancePatch](../models/ContainerGroupInstancePatch.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName         | string                                                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | string                                                                  | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | string                                                                  | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | string                                                                  | ✅       | The unique container group instance identifier                                                                                                                                                                                                      |

**Return Type**

`ContainerGroupInstance`

**Example Usage Code Snippet**

```typescript
import { ContainerGroupInstancePatch, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const containerGroupInstancePatch: ContainerGroupInstancePatch = {
    deletionCost: 76724,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
    containerGroupInstancePatch,
  );

  console.log(data);
})();
```

## reallocateContainerGroupInstance

Reallocates a container group instance to run on a different Salad Node

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/reallocate`

**Parameters**

| Name                     | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | string | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | string | ✅       | The unique container group instance identifier                                                                                                                                                                                                      |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
  );

  console.log(data);
})();
```

## recreateContainerGroupInstance

Stops a container, destroys it, and starts a new one without requiring the image to be downloaded again on a new Salad Node

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/recreate`

**Parameters**

| Name                     | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | string | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | string | ✅       | The unique container group instance identifier                                                                                                                                                                                                      |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
  );

  console.log(data);
})();
```

## restartContainerGroupInstance

Stops a container and restarts it on the same Salad Node

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/restart`

**Parameters**

| Name                     | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | string | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | string | ✅       | The unique container group instance identifier                                                                                                                                                                                                      |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
  );

  console.log(data);
})();
```
