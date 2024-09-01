# WorkloadErrorsService

A list of all methods in the `WorkloadErrorsService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description              |
| :-------------------------------------- | :----------------------- |
| [getWorkloadErrors](#getworkloaderrors) | Gets the workload errors |

## getWorkloadErrors

Gets the workload errors

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/errors`

**Parameters**

| Name               | Type   | Required | Description                     |
| :----------------- | :----- | :------- | :------------------------------ |
| organizationName   | string | ✅       | The unique organization name    |
| projectName        | string | ✅       | The unique project name         |
| containerGroupName | string | ✅       | The unique container group name |

**Return Type**

`WorkloadErrorList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'cg3m2ys7p7s0l7bztd09ndj7juif71slwjakka',
    'rcn12djtrq4osvz',
    'ha1vqw6i748x874akg4f74ap-5lo17i',
  );

  console.log(data);
})();
```
