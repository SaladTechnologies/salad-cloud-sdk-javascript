# OrganizationDataService

A list of all methods in the `OrganizationDataService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                          |
| :---------------------------------------- | :--------------------------------------------------- |
| [listGpuClasses](#listgpuclasses)         | List the GPU Classes                                 |
| [getCpuAvailability](#getcpuavailability) | Gets the CPU availability for the given organization |
| [getGpuAvailability](#getgpuavailability) | Gets the GPU availability for the given organization |

## listGpuClasses

List the GPU Classes

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/gpu-classes`

**Parameters**

| Name             | Type   | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |

**Return Type**

`GpuClassesList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.organizationData.listGpuClasses('acme-corp');

  console.log(data);
})();
```

## getCpuAvailability

Gets the CPU availability for the given organization

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/availability/sce-cpu-availability`

**Parameters**

| Name             | Type                                                              | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [CpuAvailabilityPrototype](../models/CpuAvailabilityPrototype.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                                            | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |

**Return Type**

`CpuAvailability`

**Example Usage Code Snippet**

```typescript
import { CountryCode, CpuAvailabilityPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const countryCode = CountryCode.AF;

  const cpuAvailabilityPrototype: CpuAvailabilityPrototype = {
    cpu: 4,
    memory: 8192,
    storageAmount: 1000000000,
    countryCodes: [countryCode],
  };

  const { data } = await saladCloudSdk.organizationData.getCpuAvailability('acme-corp', cpuAvailabilityPrototype);

  console.log(data);
})();
```

## getGpuAvailability

Gets the GPU availability for the given organization

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/availability/sce-gpu-availability`

**Parameters**

| Name             | Type                                                              | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [GpuAvailabilityPrototype](../models/GpuAvailabilityPrototype.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                                            | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |

**Return Type**

`GpuAvailability`

**Example Usage Code Snippet**

```typescript
import { CountryCode, GpuAvailabilityPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const countryCode = CountryCode.AF;

  const gpuAvailabilityPrototype: GpuAvailabilityPrototype = {
    gpuClasses: ['gpu_classes'],
    cpu: 4,
    memory: 8192,
    storageAmount: 1000000000,
    countryCodes: [countryCode],
  };

  const { data } = await saladCloudSdk.organizationData.getGpuAvailability('acme-corp', gpuAvailabilityPrototype);

  console.log(data);
})();
```
