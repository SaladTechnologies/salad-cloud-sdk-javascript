# SystemLogsService

A list of all methods in the `SystemLogsService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description          |
| :------------------------------ | :------------------- |
| [getSystemLogs](#getsystemlogs) | Gets the System Logs |

## getSystemLogs

Gets the System Logs

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/system-logs`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                                                                                                                                         |
| :----------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| organizationName   | string | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |
| projectName        | string | ✅       | Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.                                                                                                                  |
| containerGroupName | string | ✅       | The unique container group name                                                                                                                                                                                                                     |

**Return Type**

`SystemLogList`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.systemLogs.getSystemLogs(
    'fmcz5cnnkfiyt3k5ke3wy-5gl1809s8sotrp88klv3q4l4ni7uszkt0ht2',
    'jpum7p7dqeb0o9xu',
    'nlzoet3pfl3xit2pe40saanre16q8ug0u13rmnwb7eyumc1',
  );

  console.log(data);
})();
```
