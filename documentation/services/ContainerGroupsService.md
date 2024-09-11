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
| [reallocateContainerGroupInstance](#reallocatecontainergroupinstance) | Reallocates a container group instance to run on a different Salad Node                                                     |
| [recreateContainerGroupInstance](#recreatecontainergroupinstance)     | Stops a container, destroys it, and starts a new one without requiring the image to be downloaded again on a new Salad Node |
| [restartContainerGroupInstance](#restartcontainergroupinstance)       | Stops a container and restarts it on the same Salad Node                                                                    |

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
    'v50imwzgi4em4q035',
    'm6yw3-xm60cb7tiev8rketqiiwjepibzf2ust1cvjx8oua8mepeueo5-1',
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
  QueueAutoscaler,
  SaladCloudSdk,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const containerResourceRequirements: ContainerResourceRequirements = {
    cpu: 10,
    memory: 17858,
    gpuClasses: ['gpu_classes'],
    storageAmount: 32391110488,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom2: LoggingAxiom2 = {
    host: 'Ut con',
    apiToken: 'nostrud irure dolore',
    dataset: 'mollit irure et Duis dolore',
  };

  const datadogTags2: DatadogTags2 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog2: LoggingDatadog2 = {
    host: 'pariatur',
    apiKey: 'non ut',
    tags: [datadogTags2],
  };

  const loggingNewRelic2: LoggingNewRelic2 = {
    host: 'cupidatat cillum est sit minim',
    ingestionKey: 'dolore laboris fugiat Duis',
  };

  const loggingSplunk2: LoggingSplunk2 = {
    host: 'aliquip velit culpa',
    token: 'ex',
  };

  const loggingTcp2: LoggingTcp2 = {
    host: 'aliqua',
    port: 17249,
  };

  const httpFormat2 = HttpFormat2.JSON;

  const httpHeaders3: HttpHeaders3 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression2 = HttpCompression2.NONE;

  const loggingHttp2: LoggingHttp2 = {
    host: 'magna',
    port: 62049,
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
    image: 'voluptate officia adipisicing',
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
    port: 9813,
    auth: true,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 23269,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 61900,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 58759,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 5,
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
    initialDelaySeconds: 6,
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
    initialDelaySeconds: 4,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'ullamco magna est nulla aliqua',
    port: 49952,
    queueName: 'nnz26lyemw7nednorlqjlsihb42092pn8d',
  };

  const queueAutoscaler: QueueAutoscaler = {
    minReplicas: 57,
    maxReplicas: 24,
    desiredQueueLength: 20,
    pollingPeriod: 1406,
    maxUpscalePerMinute: 35,
    maxDownscalePerMinute: 42,
  };

  const createContainerGroup: CreateContainerGroup = {
    name: 'qfojt-6ccoil4t55-ccoyybgw92dermtsdfn3t2xmag',
    displayName: 'O0hSlJUW',
    container: createContainer,
    autostartPolicy: true,
    restartPolicy: containerRestartPolicy,
    replicas: 114,
    countryCodes: [countryCode],
    networking: createContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueConnection: containerGroupQueueConnection,
    queueAutoscaler: queueAutoscaler,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'v50imwzgi4em4q035',
    'm6yw3-xm60cb7tiev8rketqiiwjepibzf2ust1cvjx8oua8mepeueo5-1',
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
    'gq7z7dvdopv2czgde1zrufxgiv5tp-kncd4gfzda9ik-lw',
    'xd-if9b1yvozs9trd4v0bll7qwslfehyhnfadnjp2w52gwrmz',
    'ojjj5b9hbe2fr6f5t7j1htjaws1zx3r',
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
    memory: 21424,
    gpuClasses: ['gpu_classes'],
    storageAmount: 12333132242,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom3: LoggingAxiom3 = {
    host: 'commodo ea exercitation pariatur consequat',
    apiToken: 'ipsum',
    dataset: 'id Excepteur',
  };

  const datadogTags3: DatadogTags3 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog3: LoggingDatadog3 = {
    host: 'exercitation aliquip',
    apiKey: 'veniam',
    tags: [datadogTags3],
  };

  const loggingNewRelic3: LoggingNewRelic3 = {
    host: 'amet velit sed cillum',
    ingestionKey: 'et',
  };

  const loggingSplunk3: LoggingSplunk3 = {
    host: 'proident',
    token: 'est',
  };

  const loggingTcp3: LoggingTcp3 = {
    host: 'ut velit ea cillum',
    port: 13557,
  };

  const httpFormat3 = HttpFormat3.JSON;

  const httpHeaders4: HttpHeaders4 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression3 = HttpCompression3.NONE;

  const loggingHttp3: LoggingHttp3 = {
    host: 'nisi fugiat cupidatat',
    port: 60288,
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
    image: 'ex cillum dolor',
    resources: resources,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: updateContainerLogging,
    registryAuthentication: updateContainerRegistryAuthentication,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 64823,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 23269,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 61900,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 58759,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 5,
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
    initialDelaySeconds: 6,
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
    initialDelaySeconds: 4,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const updateContainerGroup: UpdateContainerGroup = {
    displayName: '-xzxtaW.t2I',
    container: updateContainer,
    replicas: 110,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'gq7z7dvdopv2czgde1zrufxgiv5tp-kncd4gfzda9ik-lw',
    'xd-if9b1yvozs9trd4v0bll7qwslfehyhnfadnjp2w52gwrmz',
    'ojjj5b9hbe2fr6f5t7j1htjaws1zx3r',
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
    'gq7z7dvdopv2czgde1zrufxgiv5tp-kncd4gfzda9ik-lw',
    'xd-if9b1yvozs9trd4v0bll7qwslfehyhnfadnjp2w52gwrmz',
    'ojjj5b9hbe2fr6f5t7j1htjaws1zx3r',
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
    'zfx07sgyz1fs97sfhtue78-54vdogp2qrcnt-8a',
    'v7jhy3jn2rdf012fi7ouno3mk9',
    'a4d0ajj5ajjquzeg-z3kvqxtnoxnlzhjhjt-8naw',
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
    'c0o0gqev-mnkpy8af-s7rq68p2lenu8izbg09xnu6-fkv4dta4yd',
    'rpi16e4ddle58fi8u9w2qgnsgj7cnci4p90a72aagy0f001ws1rwna83a3asuz',
    'fd6ugn07m5xpcp89lefemdke05z4s9eg1d2caksvlhpzm',
  );

  console.log(data);
})();
```

## listContainerGroupInstances

Gets the list of container group instances

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
    'dcbh1',
    'pdcapp3enb9gd2f4k49vviu53s67ckwwnxsd-gfjsmuxcljdg4t1zzyoj',
    'vl2kuh4c67m3ae7qwlwipkdye-ad',
  );

  console.log(data);
})();
```

## getContainerGroupInstance

Gets a container group instance

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
    'b0up7kyr7vabeivb96iwcvlvvm1n',
    'ngljb',
    'xtp82b9jzwqov1insghigvfq0donadhrrdqx-2redu46g7e',
    'container_group_instance_id',
  );

  console.log(data);
})();
```

## reallocateContainerGroupInstance

Reallocates a container group instance to run on a different Salad Node

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
    'xk27gbnpmwk5xor49bk4ujk7',
    'cy1l6xj-5vzihwp4ho850l3faynnuq71ru6y',
    'mgza-e8llajq25o36x8b-38phh',
    'container_group_instance_id',
  );

  console.log(data);
})();
```

## recreateContainerGroupInstance

Stops a container, destroys it, and starts a new one without requiring the image to be downloaded again on a new Salad Node

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
    'pkfh3rhnvt4x30k5t',
    'o7r3q30xz',
    'aq7hd1fjfxgtq8uehil3eplo',
    'container_group_instance_id',
  );

  console.log(data);
})();
```

## restartContainerGroupInstance

Stops a container and restarts it on the same Salad Node

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
    'kd79h7bg0vpngqc8hz5pxjwi7muqnmuuqsx3q3zm2hxkci5yv6kho',
    'u5ljgqmbs6a7s',
    'qmq3nj6oy8b2wpzbidnelidy9s6k9w',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
