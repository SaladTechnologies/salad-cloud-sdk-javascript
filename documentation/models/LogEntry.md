# LogEntry

**Properties**

| Name         | Type                                    | Required | Description                                |
| :----------- | :-------------------------------------- | :------- | :----------------------------------------- |
| receiveTime  | string                                  | ✅       | The time when the log entry was received   |
| resource     | [LogEntryResource](LogEntryResource.md) | ✅       | The resource associated with the log entry |
| severity     | [LogEntrySeverity](LogEntrySeverity.md) | ✅       | The severity level of the log entry        |
| time         | string                                  | ✅       | The timestamp of the log entry             |
| jsonLog      | any                                     | ❌       | The log message in JSON format.            |
| parentSpanId | string                                  | ❌       | The parent span ID of the log entry        |
| spanId       | string                                  | ❌       | The span ID of the log entry               |
| textLog      | string                                  | ❌       | The log message in text format.            |
| traceId      | string                                  | ❌       | The trace ID of the log entry              |
