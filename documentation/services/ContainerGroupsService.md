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

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |

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
    'ep7fgeqvy6vfd66h1ewe-69h',
    'dpdhw0h4i3hwpdzw9',
  );

  console.log(data);
})();
```

## createContainerGroup

Creates a new container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers`

**Parameters**

| Name             | Type                                                      | Required | Description                  |
| :--------------- | :-------------------------------------------------------- | :------- | :--------------------------- |
| body             | [CreateContainerGroup](../models/CreateContainerGroup.md) | ✅       | The request body.            |
| organizationName | string                                                    | ✅       | The unique organization name |
| projectName      | string                                                    | ✅       | The unique project name      |

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
    cpu: 6,
    memory: 8938,
    gpuClasses: ['gpu_classes'],
    storageAmount: 49533820101,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom2: LoggingAxiom2 = {
    host: 'amet et',
    apiToken: 'nostrud in reprehenderit consequat',
    dataset: 'Ut eu',
  };

  const datadogTags2: DatadogTags2 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog2: LoggingDatadog2 = {
    host: 'ut occaecat ex',
    apiKey: 'sed fugiat magna sit',
    tags: [datadogTags2],
  };

  const loggingNewRelic2: LoggingNewRelic2 = {
    host: 'elit laboris enim',
    ingestionKey: 'enim nulla',
  };

  const loggingSplunk2: LoggingSplunk2 = {
    host: 'fugiat pariatur cupidatat amet',
    token: 'in',
  };

  const loggingTcp2: LoggingTcp2 = {
    host: 'in cupidatat proident magna exercitation',
    port: 13910,
  };

  const httpFormat2 = HttpFormat2.JSON;

  const httpHeaders3: HttpHeaders3 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression2 = HttpCompression2.NONE;

  const loggingHttp2: LoggingHttp2 = {
    host: 'do',
    port: 36577,
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
    image: 'magna laboris exercitation sunt',
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
    port: 26042,
    auth: true,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 58492,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 10866,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 43992,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 9,
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
    initialDelaySeconds: 10,
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
    initialDelaySeconds: 1,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'velit do tempor consequat',
    port: 12759,
    queueName: 'bwcr1macbu9hd9pgyexpjpio5ssrhv-fzk9udwt102odv6a5s5fynms2',
  };

  const createContainerGroup: CreateContainerGroup = {
    name: 'vgm3',
    displayName: 'qQx',
    container: createContainer,
    autostartPolicy: true,
    restartPolicy: containerRestartPolicy,
    replicas: 21,
    countryCodes: [countryCode],
    networking: createContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueConnection: containerGroupQueueConnection,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'ep7fgeqvy6vfd66h1ewe-69h',
    'dpdhw0h4i3hwpdzw9',
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

| Name               | Type   | Required | Description                     |
| :----------------- | :----- | :------- | :------------------------------ |
| organizationName   | string | ✅       | The unique organization name    |
| projectName        | string | ✅       | The unique project name         |
| containerGroupName | string | ✅       | The unique container group name |

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
    'zt-dvmb-gmo5a',
    'enqsq6na2w8d2wlvk-85d3jxhjhj',
    'fcixv6oyiqlk',
  );

  console.log(data);
})();
```

## updateContainerGroup

Updates a container group

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}`

**Parameters**

| Name               | Type                                                      | Required | Description                     |
| :----------------- | :-------------------------------------------------------- | :------- | :------------------------------ |
| body               | [UpdateContainerGroup](../models/UpdateContainerGroup.md) | ✅       | The request body.               |
| organizationName   | string                                                    | ✅       | The unique organization name    |
| projectName        | string                                                    | ✅       | The unique project name         |
| containerGroupName | string                                                    | ✅       | The unique container group name |

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
    cpu: 3,
    memory: 8954,
    gpuClasses: ['gpu_classes'],
    storageAmount: 38490522084,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom3: LoggingAxiom3 = {
    host: 'ipsum et',
    apiToken: 'magna do pariatur dolor',
    dataset: 'eiusmod mollit',
  };

  const datadogTags3: DatadogTags3 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog3: LoggingDatadog3 = {
    host: 'voluptate nisi sint consectetur',
    apiKey: 'ea proident exercitation do',
    tags: [datadogTags3],
  };

  const loggingNewRelic3: LoggingNewRelic3 = {
    host: 'Lorem laborum nostrud enim ipsum',
    ingestionKey: 'Ut nulla est cupidatat',
  };

  const loggingSplunk3: LoggingSplunk3 = {
    host: 'in laboris',
    token: 'aliqua incididunt Lorem ad sunt',
  };

  const loggingTcp3: LoggingTcp3 = {
    host: 'voluptat',
    port: 55775,
  };

  const httpFormat3 = HttpFormat3.JSON;

  const httpHeaders4: HttpHeaders4 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression3 = HttpCompression3.NONE;

  const loggingHttp3: LoggingHttp3 = {
    host: 'culpa sunt',
    port: 21705,
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
    image: 'cupidatat officia',
    resources: resources,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: updateContainerLogging,
    registryAuthentication: updateContainerRegistryAuthentication,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 41663,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 58492,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 10866,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 43992,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 9,
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
    initialDelaySeconds: 10,
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
    initialDelaySeconds: 1,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const updateContainerGroup: UpdateContainerGroup = {
    displayName: 'tbkBzZA6',
    container: updateContainer,
    replicas: 37,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'zt-dvmb-gmo5a',
    'enqsq6na2w8d2wlvk-85d3jxhjhj',
    'fcixv6oyiqlk',
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

| Name               | Type   | Required | Description                     |
| :----------------- | :----- | :------- | :------------------------------ |
| organizationName   | string | ✅       | The unique organization name    |
| projectName        | string | ✅       | The unique project name         |
| containerGroupName | string | ✅       | The unique container group name |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'zt-dvmb-gmo5a',
    'enqsq6na2w8d2wlvk-85d3jxhjhj',
    'fcixv6oyiqlk',
  );

  console.log(data);
})();
```

## startContainerGroup

Starts a container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/start`

**Parameters**

| Name               | Type   | Required | Description                     |
| :----------------- | :----- | :------- | :------------------------------ |
| organizationName   | string | ✅       | The unique organization name    |
| projectName        | string | ✅       | The unique project name         |
| containerGroupName | string | ✅       | The unique container group name |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'sm3eup0iqixen33w3mp1ln15pix00azjaxgfnuon5rnc',
    'kyp6oi0404lk6h',
    'ucuerglkiabi4sbb23l56oq87j1v654hdchyg-8n5glaql3-539c',
  );

  console.log(data);
})();
```

## stopContainerGroup

Stops a container group

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/stop`

**Parameters**

| Name               | Type   | Required | Description                     |
| :----------------- | :----- | :------- | :------------------------------ |
| organizationName   | string | ✅       | The unique organization name    |
| projectName        | string | ✅       | The unique project name         |
| containerGroupName | string | ✅       | The unique container group name |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'tytntnk7-le269faihpgelqal6jc7327027puoxjag6lmdgb0c3qeelc',
    's1m84-o8x59',
    't96e3mcxix0izfrbhlu3evx',
  );

  console.log(data);
})();
```

## listContainerGroupInstances

Retrieves a list of container group instances

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances`

**Parameters**

| Name               | Type   | Required | Description                     |
| :----------------- | :----- | :------- | :------------------------------ |
| organizationName   | string | ✅       | The unique organization name    |
| projectName        | string | ✅       | The unique project name         |
| containerGroupName | string | ✅       | The unique container group name |

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
    'i5dt471e81flms65ujlnugscfp5-4x1xl1-c1ax257sioy7vldsm',
    'hwxbxx0fdtl98ziqbie46xqcbddvaoe06qhpuoplm89wi1',
    'y4q9cpfigd95ewlngasgx2e93zxeimrri0-iro9w0j3jvvgj2awj6-0ivo87g',
  );

  console.log(data);
})();
```

## getContainerGroupInstance

Retrieves the details of a single instance within a container group by instance ID

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}`

**Parameters**

| Name                     | Type   | Required | Description                     |
| :----------------------- | :----- | :------- | :------------------------------ |
| organizationName         | string | ✅       | The unique organization name    |
| projectName              | string | ✅       | The unique project name         |
| containerGroupName       | string | ✅       | The unique container group name |
| containerGroupInstanceId | string | ✅       | The unique instance identifier  |

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
    'cce0i3',
    'bb53k',
    'vtsp-47yvqix7',
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

| Name                     | Type   | Required | Description                     |
| :----------------------- | :----- | :------- | :------------------------------ |
| organizationName         | string | ✅       | The unique organization name    |
| projectName              | string | ✅       | The unique project name         |
| containerGroupName       | string | ✅       | The unique container group name |
| containerGroupInstanceId | string | ✅       | The unique instance identifier  |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'e1831z2sf2i9bk6n01-l4p5c2u',
    'h86701y3xcmm3m3c1oqx1cbz9zmgggid8ddvtm74etd0oedpgesup',
    'zpw3lnw7ag07-nla57',
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

| Name                     | Type   | Required | Description                     |
| :----------------------- | :----- | :------- | :------------------------------ |
| organizationName         | string | ✅       | The unique organization name    |
| projectName              | string | ✅       | The unique project name         |
| containerGroupName       | string | ✅       | The unique container group name |
| containerGroupInstanceId | string | ✅       | The unique instance identifier  |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'xzg6rr4bm5841gi0z8-206cdrb7o1',
    'p6ls0enipujsrco8ums89jy5ldm9v9wniwlzg156f7f4hj66c1pcdqiziv',
    'lrb4rg8t0zwxs2l1ja3src79wfm1p-s-dl9lt39rn',
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

| Name                     | Type   | Required | Description                     |
| :----------------------- | :----- | :------- | :------------------------------ |
| organizationName         | string | ✅       | The unique organization name    |
| projectName              | string | ✅       | The unique project name         |
| containerGroupName       | string | ✅       | The unique container group name |
| containerGroupInstanceId | string | ✅       | The unique instance identifier  |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'pwt3jkl-373gjha9x4b8jfvgcvy-5z9eei5vo7ho3lx9fwf',
    'b6guf5mbszj1pjm7bnkx94c6wxjsm11-6l9gj1w78dzugvi1ay',
    'g3nf416-xd0f74r83g8t-3gf0nk0-ksf6kohlh6m-flte85e',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
