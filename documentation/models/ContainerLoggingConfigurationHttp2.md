# ContainerLoggingConfigurationHttp2

Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.

**Properties**

| Name        | Type                                                                  | Required | Description                                                    |
| :---------- | :-------------------------------------------------------------------- | :------- | :------------------------------------------------------------- |
| compression | [ContainerLoggingHttpCompression](ContainerLoggingHttpCompression.md) | ✅       | The compression algorithm to apply to logs before transmission |
| format      | [ContainerLoggingHttpFormat](ContainerLoggingHttpFormat.md)           | ✅       | The format in which logs will be delivered                     |
| host        | string                                                                | ✅       | The hostname or IP address of the HTTP logging endpoint        |
| port        | number                                                                | ✅       | The port number of the HTTP logging endpoint (1-65535)         |
| headers     | [ContainerLoggingHttpHeader](ContainerLoggingHttpHeader.md)[]         | ❌       | Optional HTTP headers to include in log transmission requests  |
| password    | string                                                                | ❌       | Optional password for HTTP authentication                      |
| path        | string                                                                | ❌       | Optional URL path for the HTTP endpoint                        |
| user        | string                                                                | ❌       | Optional username for HTTP authentication                      |
