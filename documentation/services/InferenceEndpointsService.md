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

| Name             | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| page             | `number` | ❌       | The page number                                                                                                                                                                                                                                     |
| pageSize         | `number` | ❌       | The number of items per page                                                                                                                                                                                                                        |

**Return Type**

`InferenceEndpointsList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints(
    'w5k7xmi1ci3kyzzon0m2iedxbj3f1dok1gz',
    {
      page: 744143038,
      pageSize: 88,
    },
  );

  console.log(data);
})();
```

## getInferenceEndpoint

Gets an inference endpoint

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}`

**Parameters**

| Name                  | Type     | Required | Description                                                                                                                                                                                                                                         |
| :-------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName      | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName | `string` | ✅       | The unique inference endpoint name                                                                                                                                                                                                                  |

**Return Type**

`InferenceEndpoint`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpoint(
    'v7b03k36nalu2j2kv',
    'culpa dolor anim ve',
  );

  console.log(data);
})();
```

## getInferenceEndpointJobs

Retrieves a list of an inference endpoint jobs

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs`

**Parameters**

| Name                  | Type     | Required | Description                                                                                                                                                                                                                                         |
| :-------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName      | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName | `string` | ✅       | The unique inference endpoint name                                                                                                                                                                                                                  |
| page                  | `number` | ❌       | The page number                                                                                                                                                                                                                                     |
| pageSize              | `number` | ❌       | The number of items per page                                                                                                                                                                                                                        |

**Return Type**

`InferenceEndpointJobList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs('yafds', 'ex mollit', {
    page: 212695935,
    pageSize: 80,
  });

  console.log(data);
})();
```

## createInferenceEndpointJob

Creates a new job

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs`

**Parameters**

| Name                  | Type                                                                    | Required | Description                                                                                                                                                                                                                                         |
| :-------------------- | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body                  | `[CreateInferenceEndpointJob](../models/CreateInferenceEndpointJob.md)` | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName      | `string`                                                                | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName | `string`                                                                | ✅       | The unique inference endpoint name                                                                                                                                                                                                                  |

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

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob('yafds', 'ex mollit', input);

  console.log(data);
})();
```

## getInferenceEndpointJob

Retrieves a job in an inference endpoint

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}`

**Parameters**

| Name                   | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName       | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName  | `string` | ✅       | The unique inference endpoint name                                                                                                                                                                                                                  |
| inferenceEndpointJobId | `string` | ✅       | The unique job id                                                                                                                                                                                                                                   |

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
    'nlwrxd',
    'dolor nisi',
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

| Name                   | Type     | Required | Description                                                                                                                                                                                                                                         |
| :--------------------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName       | `string` | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName  | `string` | ✅       | The unique inference endpoint name                                                                                                                                                                                                                  |
| inferenceEndpointJobId | `string` | ✅       | The unique job id                                                                                                                                                                                                                                   |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.deleteInferenceEndpointJob(
    'nlwrxd',
    'dolor nisi',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
