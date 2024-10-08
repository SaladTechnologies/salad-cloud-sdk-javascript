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

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

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
    'x4hd7xmy53wgq8mpuy5k2wfbbzlhws5edt3sje',
    'hug6abtk-ewjq1594j27m6u1whmqikj9f18pd',
    'lq52i317o2r8pje-v4-ccp8q-329szw31h4fee236',
  );

  console.log(data);
})();
```
