# LogsService

A list of all methods in the `LogsService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                                                                                               |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [queryLogEntries](#querylogentries) | Retrieve a collection of _log entries_ for the _organization_ identified by `{organization_name}` matching the log query. |

## queryLogEntries

Retrieve a collection of _log entries_ for the _organization_ identified by `{organization_name}` matching the log query.

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/log-entries`

**Parameters**

| Name             | Type                                        | Required | Description                                                                                                                                                                                                                                         |
| :--------------- | :------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body             | [LogEntryQuery](../models/LogEntryQuery.md) | ✅       | The request body.                                                                                                                                                                                                                                   |
| organizationName | string                                      | ✅       | Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization. |

**Return Type**

`LogEntryCollection`

**Example Usage Code Snippet**

```typescript
import { LogEntryQuery, LogEntryQuerySortOrder, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const logEntryQuerySortOrder = LogEntryQuerySortOrder.DESC;

  const logEntryQuery: LogEntryQuery = {
    endTime: 'end_time',
    pageSize: 1,
    query: 'query',
    sortOrder: logEntryQuerySortOrder,
    startTime: 'start_time',
  };

  const { data } = await saladCloudSdk.logs.queryLogEntries('acme-corp', logEntryQuery);

  console.log(data);
})();
```
