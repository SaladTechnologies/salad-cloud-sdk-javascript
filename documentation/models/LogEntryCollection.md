# LogEntryCollection

Represents a page of organization logs

**Properties**

| Name             | Type       | Required | Description                                                                      |
| :--------------- | :--------- | :------- | :------------------------------------------------------------------------------- |
| items            | LogEntry[] | ✅       | A collection of log entries                                                      |
| organizationName | string     | ✅       | The organization name.                                                           |
| pageMaxTime      | string     | ✅       | The maximum time page boundary. This may be used when getting paginated results. |
| pageMinTime      | string     | ✅       | The minimum time page boundary. This may be used when getting paginated results. |
