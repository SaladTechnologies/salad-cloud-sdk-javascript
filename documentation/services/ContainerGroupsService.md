# ContainerGroupsService

A list of all methods in the `ContainerGroupsService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description                                                                                                              |
| :-------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [listContainerGroups](#listcontainergroups)                           | Gets the list of container groups                                                                                        |
| [createContainerGroup](#createcontainergroup)                         | Creates a new container group                                                                                            |
| [getContainerGroup](#getcontainergroup)                               | Gets a container group                                                                                                   |
| [updateContainerGroup](#updatecontainergroup)                         | Updates a container group                                                                                                |
| [deleteContainerGroup](#deletecontainergroup)                         | Deletes a container group                                                                                                |
| [startContainerGroup](#startcontainergroup)                           | Starts a container group                                                                                                 |
| [stopContainerGroup](#stopcontainergroup)                             | Stops a container group                                                                                                  |
| [listContainerGroupInstances](#listcontainergroupinstances)           | Retrieves a list of container group instances                                                                            |
| [getContainerGroupInstance](#getcontainergroupinstance)               | Retrieves the details of a single instance within a container group by instance ID                                       |
| [reallocateContainerGroupInstance](#reallocatecontainergroupinstance) | Remove a node from a workload and reallocate the workload to a different node                                            |
| [recreateContainerGroupInstance](#recreatecontainergroupinstance)     | Stops a container, destroys it, creates a new one without requiring the image to be downloaded again on a different node |
| [restartContainerGroupInstance](#restartcontainergroupinstance)       | Restarts a workload on a node without reallocating it                                                                    |

## listContainerGroups

Gets the list of container groups

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

**Return Type**

`ContainerGroupList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroups(
    'g4zikv73wys88ns82g85qcczec2y8bnwc4gs8q6aeebojnkc8rl8-7px',
    'n62j25cdo2sjh0v34w5-21z63jxnxh38ckz48-k1ecu',
  );

  console.log(data);
})();
```

## createContainerGroup

Creates a new container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers`

**Parameters**

| Name             | Type                                                        | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | `[CreateContainerGroup](../models/CreateContainerGroup.md)` | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | `string`                                                    | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string`                                                    | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

**Return Type**

`ContainerGroup`

**Example Usage Code Snippet**

```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupQueueConnection,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  ContainerRestartPolicy,
  CountryCode,
  CreateContainer,
  CreateContainerGroup,
  CreateContainerGroupNetworking,
  SaladCloudSdk,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const containerResourceRequirements: ContainerResourceRequirements = {
    cpu: 2,
    memory: 20102,
    gpuClasses: ['gpu_classes'],
    storageAmount: 4874892434,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom2: LoggingAxiom2 = {
    host: 'consequat',
    apiToken: 'non',
    dataset: 'tempor',
  };

  const datadogTags2: DatadogTags2 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog2: LoggingDatadog2 = {
    host: 'enim',
    apiKey: 'aute eiusmod ad aliquip laboris',
    tags: [datadogTags2],
  };

  const loggingNewRelic2: LoggingNewRelic2 = {
    host: 'Excepteur Ut proident dolor',
    ingestionKey: 'aliqua amet qui',
  };

  const loggingSplunk2: LoggingSplunk2 = {
    host: 'ex id laboris laborum',
    token: 'sit',
  };

  const loggingTcp2: LoggingTcp2 = {
    host: 'eu sed nostrud labore',
    port: 48807,
  };

  const httpFormat2 = HttpFormat2.JSON;

  const httpHeaders3: HttpHeaders3 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression2 = HttpCompression2.NONE;

  const loggingHttp2: LoggingHttp2 = {
    host: 'elit laboris aliquip',
    port: 45731,
    user: 'user',
    password: 'password',
    path: 'path',
    format: httpFormat2,
    headers: [httpHeaders3],
    compression: httpCompression2,
  };

  const createContainerLogging: CreateContainerLogging = {
    axiom: loggingAxiom2,
    datadog: loggingDatadog2,
    newRelic: loggingNewRelic2,
    splunk: loggingSplunk2,
    tcp: loggingTcp2,
    http: loggingHttp2,
  };

  const registryAuthenticationBasic1: RegistryAuthenticationBasic1 = {
    username: 'username',
    password: 'password',
  };

  const registryAuthenticationGcpGcr1: RegistryAuthenticationGcpGcr1 = {
    serviceKey: 'service_key',
  };

  const registryAuthenticationAwsEcr1: RegistryAuthenticationAwsEcr1 = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const registryAuthenticationDockerHub1: RegistryAuthenticationDockerHub1 = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const registryAuthenticationGcpGar1: RegistryAuthenticationGcpGar1 = {
    serviceKey: 'service_key',
  };

  const createContainerRegistryAuthentication: CreateContainerRegistryAuthentication = {
    basic: registryAuthenticationBasic1,
    gcpGcr: registryAuthenticationGcpGcr1,
    awsEcr: registryAuthenticationAwsEcr1,
    dockerHub: registryAuthenticationDockerHub1,
    gcpGar: registryAuthenticationGcpGar1,
  };

  const createContainer: CreateContainer = {
    image: 'Ut',
    resources: containerResourceRequirements,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: createContainerLogging,
    registryAuthentication: createContainerRegistryAuthentication,
  };

  const containerRestartPolicy = ContainerRestartPolicy.ALWAYS;

  const countryCode = CountryCode.AF;

  const containerNetworkingProtocol = ContainerNetworkingProtocol.HTTP;

  const createContainerGroupNetworking: CreateContainerGroupNetworking = {
    protocol: containerNetworkingProtocol,
    port: 26106,
    auth: true,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 30306,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 53006,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 6425,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 10,
    periodSeconds: 10,
    timeoutSeconds: 30,
    successThreshold: 1,
    failureThreshold: 3,
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 5,
    periodSeconds: 1,
    timeoutSeconds: 1,
    successThreshold: 1,
    failureThreshold: 3,
  };

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 123,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'ipsum proident',
    port: 10282,
    queueName: 'cnb3eo62nsjao0',
  };

  const createContainerGroup: CreateContainerGroup = {
    name: 'l-so4tp1yhwjdpa4rchjtb6qp-hyt0s34pmjpl-v1ax9xqfzcvrc7mg',
    displayName: '655oM',
    container: createContainer,
    autostartPolicy: true,
    restartPolicy: containerRestartPolicy,
    replicas: 3,
    countryCodes: [countryCode],
    networking: createContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueConnection: containerGroupQueueConnection,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'g4zikv73wys88ns82g85qcczec2y8bnwc4gs8q6aeebojnkc8rl8-7px',
    'n62j25cdo2sjh0v34w5-21z63jxnxh38ckz48-k1ecu',
    input,
  );

  console.log(data);
})();
```

## getContainerGroup

Gets a container group

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`ContainerGroup`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroup(
    'xpjrui87jps52s0iy',
    'hd-g9wqh8bjget2tyh4q9ni9h81tilnlnf5i-r38a8vv5h4lnt5rb91fzs2',
    'naw4grzs1ulr8elj96ymws1tye0',
  );

  console.log(data);
})();
```

## updateContainerGroup

Updates a container group

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type                                                        | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body               | `[UpdateContainerGroup](../models/UpdateContainerGroup.md)` | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName   | `string`                                                    | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | `string`                                                    | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | `string`                                                    | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`ContainerGroup`

**Example Usage Code Snippet**

```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  CountryCode,
  SaladCloudSdk,
  UpdateContainer,
  UpdateContainerGroup,
  UpdateContainerGroupNetworking,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const resources: Resources = {
    cpu: 11,
    memory: 17397,
    gpuClasses: ['gpu_classes'],
    storageAmount: 53243271378,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom3: LoggingAxiom3 = {
    host: 'Lorem esse minim enim',
    apiToken: 'eiusmod',
    dataset: 'incididunt ut Ut',
  };

  const datadogTags3: DatadogTags3 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog3: LoggingDatadog3 = {
    host: 'Excepteur',
    apiKey: 'sit nisi nulla esse',
    tags: [datadogTags3],
  };

  const loggingNewRelic3: LoggingNewRelic3 = {
    host: 'anim',
    ingestionKey: 'id velit Lorem',
  };

  const loggingSplunk3: LoggingSplunk3 = {
    host: 'sint nostrud sunt anim commodo',
    token: 'eu culpa voluptate ut',
  };

  const loggingTcp3: LoggingTcp3 = {
    host: 'do eu Ut minim mollit',
    port: 51879,
  };

  const httpFormat3 = HttpFormat3.JSON;

  const httpHeaders4: HttpHeaders4 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression3 = HttpCompression3.NONE;

  const loggingHttp3: LoggingHttp3 = {
    host: 'in sit Excepteur dolor consectetur',
    port: 16123,
    user: 'user',
    password: 'password',
    path: 'path',
    format: httpFormat3,
    headers: [httpHeaders4],
    compression: httpCompression3,
  };

  const updateContainerLogging: UpdateContainerLogging = {
    axiom: loggingAxiom3,
    datadog: loggingDatadog3,
    newRelic: loggingNewRelic3,
    splunk: loggingSplunk3,
    tcp: loggingTcp3,
    http: loggingHttp3,
  };

  const registryAuthenticationBasic2: RegistryAuthenticationBasic2 = {
    username: 'username',
    password: 'password',
  };

  const registryAuthenticationGcpGcr2: RegistryAuthenticationGcpGcr2 = {
    serviceKey: 'service_key',
  };

  const registryAuthenticationAwsEcr2: RegistryAuthenticationAwsEcr2 = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const registryAuthenticationDockerHub2: RegistryAuthenticationDockerHub2 = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const registryAuthenticationGcpGar2: RegistryAuthenticationGcpGar2 = {
    serviceKey: 'service_key',
  };

  const updateContainerRegistryAuthentication: UpdateContainerRegistryAuthentication = {
    basic: registryAuthenticationBasic2,
    gcpGcr: registryAuthenticationGcpGcr2,
    awsEcr: registryAuthenticationAwsEcr2,
    dockerHub: registryAuthenticationDockerHub2,
    gcpGar: registryAuthenticationGcpGar2,
  };

  const updateContainer: UpdateContainer = {
    image: 'mollit exercitation',
    resources: resources,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: updateContainerLogging,
    registryAuthentication: updateContainerRegistryAuthentication,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 27521,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 30306,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 53006,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 6425,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 10,
    periodSeconds: 10,
    timeoutSeconds: 30,
    successThreshold: 1,
    failureThreshold: 3,
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 5,
    periodSeconds: 1,
    timeoutSeconds: 1,
    successThreshold: 1,
    failureThreshold: 3,
  };

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 123,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const updateContainerGroup: UpdateContainerGroup = {
    displayName: 'v9k',
    container: updateContainer,
    replicas: 57,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'xpjrui87jps52s0iy',
    'hd-g9wqh8bjget2tyh4q9ni9h81tilnlnf5i-r38a8vv5h4lnt5rb91fzs2',
    'naw4grzs1ulr8elj96ymws1tye0',
    input,
  );

  console.log(data);
})();
```

## deleteContainerGroup

Deletes a container group

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'xpjrui87jps52s0iy',
    'hd-g9wqh8bjget2tyh4q9ni9h81tilnlnf5i-r38a8vv5h4lnt5rb91fzs2',
    'naw4grzs1ulr8elj96ymws1tye0',
  );

  console.log(data);
})();
```

## startContainerGroup

Starts a container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/start`

**Parameters**

| Name               | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'qv-nsi3p0ihren7kh3cozmla70bry',
    'nwspw00apvowm2uk3ia7vi9jlaex78t719gjcf-7ed',
    'jmguhpzfluex6-1ksn8mw9',
  );

  console.log(data);
})();
```

## stopContainerGroup

Stops a container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/stop`

**Parameters**

| Name               | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'akn0y-5uryou3umpp3jva-wgcda23a08440n-ew1-q',
    'im',
    'd9iq2qrkhhpqc1ii57w5xgt26suu70u1qechp',
  );

  console.log(data);
})();
```

## listContainerGroupInstances

Retrieves a list of container group instances

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances`

**Parameters**

| Name               | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`ContainerGroupInstances`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroupInstances(
    'x9apf4t0-uai3sdl150pq-zx5u-9-j',
    'bz4mp1vscg2wjxeuemfxcv-ue7tm-bp-8n1hvh8fnv7mx285iuup332rpaf',
    'shaiuchf2q8kkg3dsgwkty0ap7uq2b1ex4akekgljza8i9375vs22d352n',
  );

  console.log(data);
})();
```

## getContainerGroupInstance

Retrieves the details of a single instance within a container group by instance ID

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}`

**Parameters**

| Name                     | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | `string` | ✅       | The unique instance identifier                                                                                                                                                                                                                      |

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
    'bsf7v',
    'ulau11f5g2zdmdpxhrfzhv7x3dhck87lv8-z-v',
    'efzk8ea2roe6yryt0-t1885dp762ut0igkfak4jbmum3tb50ov',
    'container_group_instance_id',
  );

  console.log(data);
})();
```

## reallocateContainerGroupInstance

Remove a node from a workload and reallocate the workload to a different node

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/reallocate`

**Parameters**

| Name                     | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | `string` | ✅       | The unique instance identifier                                                                                                                                                                                                                      |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'cq7z43vbdm-ym2fjvtwvm3kubeomi0c157pyuvzjd-oj09gh',
    'rxoh7290af1yiwyo8xtgc4vo',
    'wsr245-lzbbnxajonfxep9ngo2h6p4ol',
    'container_group_instance_id',
  );

  console.log(data);
})();
```

## recreateContainerGroupInstance

Stops a container, destroys it, creates a new one without requiring the image to be downloaded again on a different node

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/recreate`

**Parameters**

| Name                     | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | `string` | ✅       | The unique instance identifier                                                                                                                                                                                                                      |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'dqryzs0nwtgem9',
    's1kzoxeehf59gi91ttsn9ueh4r0udym74yor3eg40ckc',
    'r227v3cr3',
    'container_group_instance_id',
  );

  console.log(data);
})();
```

## restartContainerGroupInstance

Restarts a workload on a node without reallocating it

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/restart`

**Parameters**

| Name                     | Type     | Required | Description                                                                                                                                                                                                                                         |
| :----------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName         | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName              | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName       | `string` | ✅       | The unique container group name                                                                                                                                                                                                                     |
| containerGroupInstanceId | `string` | ✅       | The unique instance identifier                                                                                                                                                                                                                      |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'x2hb606akllhe-z9w578p05ni',
    'czv80xtiift-dhcux3behoqegicbjgytvavm7ngiki6uxl76eoewg5dgz5g',
    'f3mzshp',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
