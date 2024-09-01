# InferenceEndpointsService

A list of all methods in the `InferenceEndpointsService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                                    |
| :-------------------------------------------------------- | :--------------------------------------------- |
| [listInferenceEndpoints](#listinferenceendpoints)         | Gets the list of all inference endpoints       |
| [getInferenceEndpoint](#getinferenceendpoint)             | Gets an inference endpoint                     |
| [getInferenceEndpointJobs](#getinferenceendpointjobs)     | Retrieves a list of an inference endpoint jobs |
| [createInferenceEndpointJob](#createinferenceendpointjob) | Creates a new job                              |
| [getInferenceEndpointJob](#getinferenceendpointjob)       | Retrieves a job in an inference endpoint       |
| [deleteInferenceEndpointJob](#deleteinferenceendpointjob) | Deletes an inference endpoint job              |

## listInferenceEndpoints

Gets the list of all inference endpoints

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |
| page             | number | ❌       | The page number              |
| pageSize         | number | ❌       | The number of items per page |

**Return Type**

`InferenceEndpointsList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints('sqctlusaj22ygymnjifxur', {
    page: 585200996,
    pageSize: 35,
  });

  console.log(data);
})();
```

## getInferenceEndpoint

Gets an inference endpoint

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}`

**Parameters**

| Name                  | Type   | Required | Description                        |
| :-------------------- | :----- | :------- | :--------------------------------- |
| organizationName      | string | ✅       | The unique organization name       |
| inferenceEndpointName | string | ✅       | The unique inference endpoint name |

**Return Type**

`InferenceEndpoint`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpoint('rvbmdh-8zxih', 'id nulla');

  console.log(data);
})();
```

## getInferenceEndpointJobs

Retrieves a list of an inference endpoint jobs

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs`

**Parameters**

| Name                  | Type   | Required | Description                        |
| :-------------------- | :----- | :------- | :--------------------------------- |
| organizationName      | string | ✅       | The unique organization name       |
| inferenceEndpointName | string | ✅       | The unique inference endpoint name |
| page                  | number | ❌       | The page number                    |
| pageSize              | number | ❌       | The number of items per page       |

**Return Type**

`InferenceEndpointJobList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs('et0wus4xea-xt7p0xv', 'minim Ut s', {
    page: 408174252,
    pageSize: 59,
  });

  console.log(data);
})();
```

## createInferenceEndpointJob

Creates a new job

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs`

**Parameters**

| Name                  | Type                                                                  | Required | Description                        |
| :-------------------- | :-------------------------------------------------------------------- | :------- | :--------------------------------- |
| body                  | [CreateInferenceEndpointJob](../models/CreateInferenceEndpointJob.md) | ✅       | The request body.                  |
| organizationName      | string                                                                | ✅       | The unique organization name       |
| inferenceEndpointName | string                                                                | ✅       | The unique inference endpoint name |

**Return Type**

`InferenceEndpointJob`

**Example Usage Code Snippet**

```typescript
import { CreateInferenceEndpointJob, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createInferenceEndpointJob: CreateInferenceEndpointJob = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob(
    'et0wus4xea-xt7p0xv',
    'minim Ut s',
    input,
  );

  console.log(data);
})();
```

## getInferenceEndpointJob

Retrieves a job in an inference endpoint

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}`

**Parameters**

| Name                   | Type   | Required | Description                        |
| :--------------------- | :----- | :------- | :--------------------------------- |
| organizationName       | string | ✅       | The unique organization name       |
| inferenceEndpointName  | string | ✅       | The unique inference endpoint name |
| inferenceEndpointJobId | string | ✅       | The unique job id                  |

**Return Type**

`InferenceEndpointJob`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJob(
    'wm7sq978nq8j748qskk0hr2eg4sl7t97a39br872',
    'ullamco',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```

## deleteInferenceEndpointJob

Deletes an inference endpoint job

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}`

**Parameters**

| Name                   | Type   | Required | Description                        |
| :--------------------- | :----- | :------- | :--------------------------------- |
| organizationName       | string | ✅       | The unique organization name       |
| inferenceEndpointName  | string | ✅       | The unique inference endpoint name |
| inferenceEndpointJobId | string | ✅       | The unique job id                  |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.deleteInferenceEndpointJob(
    'wm7sq978nq8j748qskk0hr2eg4sl7t97a39br872',
    'ullamco',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
