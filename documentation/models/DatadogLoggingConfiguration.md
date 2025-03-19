# DatadogLoggingConfiguration

Configuration for forwarding container logs to Datadog monitoring service.

**Properties**

| Name   | Type                            | Required | Description                                                                           |
| :----- | :------------------------------ | :------- | :------------------------------------------------------------------------------------ |
| host   | string                          | ✅       | The Datadog intake server host URL where logs will be sent.                           |
| apiKey | string                          | ✅       | The Datadog API key used for authentication when sending logs.                        |
| tags   | DatadogTagForContainerLogging[] | ✅       | Optional metadata tags to attach to logs for filtering and categorization in Datadog. |
