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
