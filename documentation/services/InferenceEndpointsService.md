# InferenceEndpointsService

A list of all methods in the `InferenceEndpointsService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                                    |
| :-------------------------------------------------------- | :--------------------------------------------- |
| [listInferenceEndpoints](#listinferenceendpoints)         | Gets the list of inference endpoints           |
| [getInferenceEndpoint](#getinferenceendpoint)             | Gets an inference endpoint                     |
| [getInferenceEndpointJobs](#getinferenceendpointjobs)     | Retrieves a list of an inference endpoint jobs |
| [createInferenceEndpointJob](#createinferenceendpointjob) | Creates a new job                              |
| [getInferenceEndpointJob](#getinferenceendpointjob)       | Retrieves a job in an inference endpoint       |
| [deleteInferenceEndpointJob](#deleteinferenceendpointjob) | Deletes an inference endpoint job              |

## listInferenceEndpoints

Gets the list of inference endpoints

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
    'wg1umdxtc9fte8osib-e-5ux2vsmrhjjt13u7q3pryxxnm',
    {
      page: 756148233,
      pageSize: 66,
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
    'uzp1dyfm2yp4-lxa27tl0fwms3fu3myo74a99jr6ouv4w8',
    'aute Ut reprehenderit occaecat sed',
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

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs(
    'trzfoq1p77wk9jgwxjp56dzbnwtbgowklqt1wsbe00',
    'ut officia ut',
    {
      page: 1653138765,
      pageSize: 76,
    },
  );

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

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob(
    'trzfoq1p77wk9jgwxjp56dzbnwtbgowklqt1wsbe00',
    'ut officia ut',
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
    'b7tj9',
    'sed eu labore',
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
    'b7tj9',
    'sed eu labore',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
