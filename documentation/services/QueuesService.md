# QueuesService

A list of all methods in the `QueuesService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                                     |
| :-------------------------------- | :---------------------------------------------- |
| [listQueues](#listqueues)         | Gets the list of queues in the given project.   |
| [createQueue](#createqueue)       | Creates a new queue in the given project.       |
| [getQueue](#getqueue)             | Gets an existing queue in the given project.    |
| [updateQueue](#updatequeue)       | Updates an existing queue in the given project. |
| [deleteQueue](#deletequeue)       | Deletes an existing queue in the given project. |
| [listQueueJobs](#listqueuejobs)   | Gets the list of jobs in a queue                |
| [createQueueJob](#createqueuejob) | Creates a new job                               |
| [getQueueJob](#getqueuejob)       | Gets a job in a queue                           |
| [deleteQueueJob](#deletequeuejob) | Cancels a job in a queue                        |

## listQueues

Gets the list of queues in the given project.

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

**Return Type**

`QueueList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueues(
    'rtxaydgbmb5wprcvb9628akhug9lnd3c0',
    'p4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsz6xilo12xl52y9c177',
  );

  console.log(data);
})();
```

## createQueue

Creates a new queue in the given project.

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues`

**Parameters**

| Name             | Type                                      | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :---------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | `[CreateQueue](../models/CreateQueue.md)` | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | `string`                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string`                                  | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

**Return Type**

`Queue`

**Example Usage Code Snippet**

```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'wcaz2jbu5pfmpygxffsf4bh4e6',
    displayName: 'Ef',
    description: 'aute Ut nostrud veniam sint',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'rtxaydgbmb5wprcvb9628akhug9lnd3c0',
    'p4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsz6xilo12xl52y9c177',
    input,
  );

  console.log(data);
})();
```

## getQueue

Gets an existing queue in the given project.

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string` | ✅       | The queue name.                                                                                                                                                                                                                                     |

**Return Type**

`Queue`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueue(
    'g1bq27ohe5dpzbgsk8gvpuhecson4k2eclxss3',
    'wtxd1j0ixuhfk-hdff3n3-hbtsigyh53bt0g4gjh8mcz4',
    'bnkfiyt3k5ke3wy-5gl1809r',
  );

  console.log(data);
})();
```

## updateQueue

Updates an existing queue in the given project.

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type                                      | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :---------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | `[UpdateQueue](../models/UpdateQueue.md)` | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | `string`                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string`                                  | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string`                                  | ✅       | The queue name.                                                                                                                                                                                                                                     |

**Return Type**

`Queue`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk, UpdateQueue } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateQueue: UpdateQueue = {
    displayName: 'TLURNvvFGXm',
    description: 'aliqua et sit anim esse',
  };

  const { data } = await saladCloudSdk.queues.updateQueue(
    'g1bq27ohe5dpzbgsk8gvpuhecson4k2eclxss3',
    'wtxd1j0ixuhfk-hdff3n3-hbtsigyh53bt0g4gjh8mcz4',
    'bnkfiyt3k5ke3wy-5gl1809r',
    input,
  );

  console.log(data);
})();
```

## deleteQueue

Deletes an existing queue in the given project.

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string` | ✅       | The queue name.                                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueue(
    'g1bq27ohe5dpzbgsk8gvpuhecson4k2eclxss3',
    'wtxd1j0ixuhfk-hdff3n3-hbtsigyh53bt0g4gjh8mcz4',
    'bnkfiyt3k5ke3wy-5gl1809r',
  );

  console.log(data);
})();
```

## listQueueJobs

Gets the list of jobs in a queue

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string` | ✅       | The queue name.                                                                                                                                                                                                                                     |
| page             | `number` | ❌       | The page number                                                                                                                                                                                                                                     |
| pageSize         | `number` | ❌       | The number of items per page                                                                                                                                                                                                                        |

**Return Type**

`QueueJobList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueueJobs(
    'jb7eyumc25lm4prwopvwr-1961g-m85nbqda3ufs',
    'sn780t45z2tw4xt1b86w0clx6vkq-3',
    'sx811v32aty9s-ghx1hm2nw1mhgooidhvnhwadaqzuh19krhv62or5c',
    {
      page: 2110014563,
      pageSize: 23,
    },
  );

  console.log(data);
})();
```

## createQueueJob

Creates a new job

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs`

**Parameters**

| Name             | Type                                            | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :---------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | `[CreateQueueJob](../models/CreateQueueJob.md)` | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | `string`                                        | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string`                                        | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string`                                        | ✅       | The queue name.                                                                                                                                                                                                                                     |

**Return Type**

`QueueJob`

**Example Usage Code Snippet**

```typescript
import { CreateQueueJob, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueueJob: CreateQueueJob = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.queues.createQueueJob(
    'jb7eyumc25lm4prwopvwr-1961g-m85nbqda3ufs',
    'sn780t45z2tw4xt1b86w0clx6vkq-3',
    'sx811v32aty9s-ghx1hm2nw1mhgooidhvnhwadaqzuh19krhv62or5c',
    input,
  );

  console.log(data);
})();
```

## getQueueJob

Gets a job in a queue

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string` | ✅       | The queue name.                                                                                                                                                                                                                                     |
| queueJobId       | `string` | ✅       | The job identifier. This is automatically generated and assigned when the job is created.                                                                                                                                                           |

**Return Type**

`QueueJob`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueueJob(
    'j-8sae7t0u7o0emyztq64o8ut710qtepjztx34mk6lruecseiyq06ab3ok5xr',
    'eokxas9m7y892q4m5rifzmevenpg1vot8xgbal184sloim-c7555huym18dia9d',
    'zbvvpn2qgtohp',
    'queue_job_id',
  );

  console.log(data);
})();
```

## deleteQueueJob

Cancels a job in a queue

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}`

**Parameters**

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | `string` | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | `string` | ✅       | The queue name.                                                                                                                                                                                                                                     |
| queueJobId       | `string` | ✅       | The job identifier. This is automatically generated and assigned when the job is created.                                                                                                                                                           |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueueJob(
    'j-8sae7t0u7o0emyztq64o8ut710qtepjztx34mk6lruecseiyq06ab3ok5xr',
    'eokxas9m7y892q4m5rifzmevenpg1vot8xgbal184sloim-c7555huym18dia9d',
    'zbvvpn2qgtohp',
    'queue_job_id',
  );

  console.log(data);
})();
```
