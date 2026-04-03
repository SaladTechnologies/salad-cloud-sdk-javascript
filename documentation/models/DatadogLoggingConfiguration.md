# DatadogLoggingConfiguration

Configuration for forwarding container logs to Datadog monitoring service.

**Properties**

| Name   | Type                                                                | Required | Description                                                                           |
| :----- | :------------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------------ |
| apiKey | string                                                              | ✅       | The Datadog API key used for authentication when sending logs.                        |
| host   | string                                                              | ✅       | The Datadog intake server host URL where logs will be sent.                           |
| tags   | [DatadogTagForContainerLogging](DatadogTagForContainerLogging.md)[] | ✅       | Optional metadata tags to attach to logs for filtering and categorization in Datadog. |
