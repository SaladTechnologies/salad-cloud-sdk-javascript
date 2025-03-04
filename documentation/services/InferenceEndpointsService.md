# InferenceEndpointsService

A list of all methods in the `InferenceEndpointsService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                           |
| :-------------------------------------------------------- | :------------------------------------ |
| [listInferenceEndpoints](#listinferenceendpoints)         | Lists inference endpoints.            |
| [getInferenceEndpoint](#getinferenceendpoint)             | Gets an inference endpoint.           |
| [listInferenceEndpointJobs](#listinferenceendpointjobs)   | Lists inference endpoint jobs.        |
| [createInferenceEndpointJob](#createinferenceendpointjob) | Creates a new inference endpoint job. |
| [getInferenceEndpointJob](#getinferenceendpointjob)       | Gets an inference endpoint job.       |
| [cancelInferenceEndpointJob](#cancelinferenceendpointjob) | Cancels an inference endpoint job.    |

## listInferenceEndpoints

Lists inference endpoints.

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints`

**Parameters**

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| page             | number | ❌       | The page number.                                                                                                                                                                                                                                    |
| pageSize         | number | ❌       | The maximum number of items per page.                                                                                                                                                                                                               |

**Return Type**

`InferenceEndpointList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints('acme-corp', {
    page: 1,
    pageSize: 1,
  });

  console.log(data);
})();
```

## getInferenceEndpoint

Gets an inference endpoint.

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}`

**Parameters**

| Name                  | Type   | Required | Description                                                                                                                                                                                                                                         |
| :-------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName      | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName | string | ✅       | The inference endpoint name.                                                                                                                                                                                                                        |

**Return Type**

`InferenceEndpoint`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpoint('acme-corp', 'transcribe');

  console.log(data);
})();
```

## listInferenceEndpointJobs

Lists inference endpoint jobs.

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs`

**Parameters**

| Name                  | Type   | Required | Description                                                                                                                                                                                                                                         |
| :-------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName      | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName | string | ✅       | The inference endpoint name.                                                                                                                                                                                                                        |
| page                  | number | ❌       | The page number.                                                                                                                                                                                                                                    |
| pageSize              | number | ❌       | The maximum number of items per page.                                                                                                                                                                                                               |

**Return Type**

`InferenceEndpointJobList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpointJobs('acme-corp', 'transcribe', {
    page: 1,
    pageSize: 1,
  });

  console.log(data);
})();
```

## createInferenceEndpointJob

Creates a new inference endpoint job.

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs`

**Parameters**

| Name                  | Type                                                                    | Required | Description                                                                                                                                                                                                                                         |
| :-------------------- | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body                  | [CreateInferenceEndpointJob1](../models/CreateInferenceEndpointJob1.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName      | string                                                                  | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName | string                                                                  | ✅       | The inference endpoint name.                                                                                                                                                                                                                        |

**Return Type**

`InferenceEndpointJob`

**Example Usage Code Snippet**

```typescript
import { CreateInferenceEndpointJob1, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createInferenceEndpointJob1: CreateInferenceEndpointJob1 = {
    input: [],
    metadata: {},
    webhookUrl: 'webhook_url',
  };

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob(
    'acme-corp',
    'transcribe',
    createInferenceEndpointJob1,
  );

  console.log(data);
})();
```

## getInferenceEndpointJob

Gets an inference endpoint job.

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}`

**Parameters**

| Name                   | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName       | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName  | string | ✅       | The inference endpoint name.                                                                                                                                                                                                                        |
| inferenceEndpointJobId | string | ✅       | The inference endpoint job identifier.                                                                                                                                                                                                              |

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
    'acme-corp',
    'transcribe',
    '2fc459a1-1c09-4a34-ade7-54d03fc51d6a',
  );

  console.log(data);
})();
```

## cancelInferenceEndpointJob

Cancels an inference endpoint job.

- HTTP Method: `DELETE`
- Endpoint: `/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}`

**Parameters**

| Name                   | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName       | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| inferenceEndpointName  | string | ✅       | The inference endpoint name.                                                                                                                                                                                                                        |
| inferenceEndpointJobId | string | ✅       | The inference endpoint job identifier.                                                                                                                                                                                                              |

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.cancelInferenceEndpointJob(
    'acme-corp',
    'transcribe',
    '2fc459a1-1c09-4a34-ade7-54d03fc51d6a',
  );

  console.log(data);
})();
```
