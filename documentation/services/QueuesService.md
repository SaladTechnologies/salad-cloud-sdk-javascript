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

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

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
    'xtp82b9jzwqov1insghigvfq0donadhrrdqx-2redu46g7e',
    'xk27gbnpmwk5xor49bk4ujk7',
  );

  console.log(data);
})();
```

## createQueue

Creates a new queue in the given project.

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues`

**Parameters**

| Name             | Type                                    | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :-------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [CreateQueue](../models/CreateQueue.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string                                  | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |

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
    name: 'ho4d79h7bg0vpngqc8hz5pxjwi',
    displayName: 'IWPKHVWPTc',
    description: 'aliqua id nostrud',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'xtp82b9jzwqov1insghigvfq0donadhrrdqx-2redu46g7e',
    'xk27gbnpmwk5xor49bk4ujk7',
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

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string | ✅       | The queue name.                                                                                                                                                                                                                                     |

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
    'bb5wprcvb9628akhug9lnd2',
    'bw-4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsy',
    'wilo12xl52y9c178cmdya6ykpby-hunb0b6s7s2l',
  );

  console.log(data);
})();
```

## updateQueue

Updates an existing queue in the given project.

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type                                    | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :-------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [UpdateQueue](../models/UpdateQueue.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string                                  | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string                                  | ✅       | The queue name.                                                                                                                                                                                                                                     |

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
    displayName: 'O5Yf2',
    description: 'cupidatat',
  };

  const { data } = await saladCloudSdk.queues.updateQueue(
    'bb5wprcvb9628akhug9lnd2',
    'bw-4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsy',
    'wilo12xl52y9c178cmdya6ykpby-hunb0b6s7s2l',
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

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string | ✅       | The queue name.                                                                                                                                                                                                                                     |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueue(
    'bb5wprcvb9628akhug9lnd2',
    'bw-4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsy',
    'wilo12xl52y9c178cmdya6ykpby-hunb0b6s7s2l',
  );

  console.log(data);
})();
```

## listQueueJobs

Gets the list of jobs in a queue

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs`

**Parameters**

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string | ✅       | The queue name.                                                                                                                                                                                                                                     |
| page             | number | ❌       | The page number                                                                                                                                                                                                                                     |
| pageSize         | number | ❌       | The number of items per page                                                                                                                                                                                                                        |

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
    'wcaz2jbu5pfmpygxffsf4bh4e6',
    'dzh9lv6afpamv8cx0x6',
    's9f4ikmr0j6c3n18n4djttkqmgzb46dd5wogzrfe2pq12s2',
    {
      page: 706148771,
      pageSize: 45,
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

| Name             | Type                                          | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :-------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [CreateQueueJob](../models/CreateQueueJob.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                        | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string                                        | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string                                        | ✅       | The queue name.                                                                                                                                                                                                                                     |

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
    'wcaz2jbu5pfmpygxffsf4bh4e6',
    'dzh9lv6afpamv8cx0x6',
    's9f4ikmr0j6c3n18n4djttkqmgzb46dd5wogzrfe2pq12s2',
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

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string | ✅       | The queue name.                                                                                                                                                                                                                                     |
| queueJobId       | string | ✅       | The job identifier. This is automatically generated and assigned when the job is created.                                                                                                                                                           |

**Return Type**

`QueueJob`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueueJob('zm-jv', 'tq26', 'je5dpzbgsk8gvp', 'queue_job_id');

  console.log(data);
})();
```

## deleteQueueJob

Cancels a job in a queue

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}`

**Parameters**

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName      | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| queueName        | string | ✅       | The queue name.                                                                                                                                                                                                                                     |
| queueJobId       | string | ✅       | The job identifier. This is automatically generated and assigned when the job is created.                                                                                                                                                           |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueueJob('zm-jv', 'tq26', 'je5dpzbgsk8gvp', 'queue_job_id');

  console.log(data);
})();
```
