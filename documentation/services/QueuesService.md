# QueuesService

A list of all methods in the `QueuesService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                    |
| :-------------------------------- | :----------------------------- |
| [listQueues](#listqueues)         | Gets the list of queues        |
| [createQueue](#createqueue)       | Creates a new queue            |
| [getQueue](#getqueue)             | Gets a queue                   |
| [updateQueue](#updatequeue)       | Updates a queue                |
| [deleteQueue](#deletequeue)       | Deletes a queue                |
| [listQueueJobs](#listqueuejobs)   | Retrieves a list of queue jobs |
| [createQueueJob](#createqueuejob) | Creates a new job              |
| [getQueueJob](#getqueuejob)       | Retrieves a job in a queue     |
| [deleteQueueJob](#deletequeuejob) | Deletes a queue job            |

## listQueues

Gets the list of queues

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |

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
    'lwt38wqx9ycbbwq7cz7enua',
    'i5ohrcyvt0ap8jxyjtw5spbfh7ukelysoi13iija9co',
  );

  console.log(data);
})();
```

## createQueue

Creates a new queue

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues`

**Parameters**

| Name             | Type                                    | Required | Description                  |
| :--------------- | :-------------------------------------- | :------- | :--------------------------- |
| body             | [CreateQueue](../models/CreateQueue.md) | ✅       | The request body.            |
| organizationName | string                                  | ✅       | The unique organization name |
| projectName      | string                                  | ✅       | The unique project name      |

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
    name: 'ykm2ls08p3lv',
    displayName: 'Av8HrM6.',
    description: 'nulla enim',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'lwt38wqx9ycbbwq7cz7enua',
    'i5ohrcyvt0ap8jxyjtw5spbfh7ukelysoi13iija9co',
    input,
  );

  console.log(data);
})();
```

## getQueue

Gets a queue

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |
| queueName        | string | ✅       | The unique queue name        |

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
    'voe5nrfsnef63doc193sgdihl8bgcxw201b7qbn',
    'xlauk07eld4q4sm9jdgi4bgl1flz0elvw26099ougowft9j-kjp6bahz155',
    'gsomvfqk5h4gbc8o3p4id29bdadte3m51it2hfzxfmyjtvnd0b',
  );

  console.log(data);
})();
```

## updateQueue

Updates a queue

- HTTP Method: `PATCH`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type                                    | Required | Description                  |
| :--------------- | :-------------------------------------- | :------- | :--------------------------- |
| body             | [UpdateQueue](../models/UpdateQueue.md) | ✅       | The request body.            |
| organizationName | string                                  | ✅       | The unique organization name |
| projectName      | string                                  | ✅       | The unique project name      |
| queueName        | string                                  | ✅       | The unique queue name        |

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
    displayName: 'X3iu1Xk',
    description: 'ullamco consequat voluptate',
  };

  const { data } = await saladCloudSdk.queues.updateQueue(
    'voe5nrfsnef63doc193sgdihl8bgcxw201b7qbn',
    'xlauk07eld4q4sm9jdgi4bgl1flz0elvw26099ougowft9j-kjp6bahz155',
    'gsomvfqk5h4gbc8o3p4id29bdadte3m51it2hfzxfmyjtvnd0b',
    input,
  );

  console.log(data);
})();
```

## deleteQueue

Deletes a queue

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |
| queueName        | string | ✅       | The unique queue name        |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueue(
    'voe5nrfsnef63doc193sgdihl8bgcxw201b7qbn',
    'xlauk07eld4q4sm9jdgi4bgl1flz0elvw26099ougowft9j-kjp6bahz155',
    'gsomvfqk5h4gbc8o3p4id29bdadte3m51it2hfzxfmyjtvnd0b',
  );

  console.log(data);
})();
```

## listQueueJobs

Retrieves a list of queue jobs

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |
| queueName        | string | ✅       | The unique queue name        |
| page             | number | ❌       | The page number              |
| pageSize         | number | ❌       | The number of items per page |

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
    'qiqiazzthr12lsqkk1iq35-ix3pzbff9-f8x8ls569n71',
    'ht3-tiei7j9ye5yzdixjzbx5ywjbd',
    'xp465rhqkyqstwpk8kd3jy5kakai4lollggq7i7xz97',
    {
      page: 1955049824,
      pageSize: 95,
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

| Name             | Type                                          | Required | Description                  |
| :--------------- | :-------------------------------------------- | :------- | :--------------------------- |
| body             | [CreateQueueJob](../models/CreateQueueJob.md) | ✅       | The request body.            |
| organizationName | string                                        | ✅       | The unique organization name |
| projectName      | string                                        | ✅       | The unique project name      |
| queueName        | string                                        | ✅       | The unique queue name        |

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
    'qiqiazzthr12lsqkk1iq35-ix3pzbff9-f8x8ls569n71',
    'ht3-tiei7j9ye5yzdixjzbx5ywjbd',
    'xp465rhqkyqstwpk8kd3jy5kakai4lollggq7i7xz97',
    input,
  );

  console.log(data);
})();
```

## getQueueJob

Retrieves a job in a queue

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |
| queueName        | string | ✅       | The unique queue name        |
| queueJobId       | string | ✅       | The unique job id            |

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
    'erx15rey11qozndq25fyep9cx1pky-znnuxifqcep9-zc',
    'x9-4z-1rr438ze1lo349hdscooit-lme54jb98rdf4itla-wc6aace',
    'e-tvw-8ybw4mj2a',
    'queue_job_id',
  );

  console.log(data);
})();
```

## deleteQueueJob

Deletes a queue job

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| projectName      | string | ✅       | The unique project name      |
| queueName        | string | ✅       | The unique queue name        |
| queueJobId       | string | ✅       | The unique job id            |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueueJob(
    'erx15rey11qozndq25fyep9cx1pky-znnuxifqcep9-zc',
    'x9-4z-1rr438ze1lo349hdscooit-lme54jb98rdf4itla-wc6aace',
    'e-tvw-8ybw4mj2a',
    'queue_job_id',
  );

  console.log(data);
})();
```
