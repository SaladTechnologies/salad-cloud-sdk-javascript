# LogEntryQuery

Represents a query for logs

**Properties**

| Name      | Type                   | Required | Description                                                                                                                                                 |
| :-------- | :--------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endTime   | string                 | ✅       | The end time of the time range                                                                                                                              |
| query     | string                 | ✅       | The query string for filtering logs                                                                                                                         |
| startTime | string                 | ✅       | The start time of the time range                                                                                                                            |
| pageSize  | number                 | ❌       | The maximum number of items per page.                                                                                                                       |
| sortOrder | LogEntryQuerySortOrder | ❌       | The sort order of the log entries. `asc` will sort the log entries in chronological order. `desc` will sort the log entries in reverse chronological order. |
