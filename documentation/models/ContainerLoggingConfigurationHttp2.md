# ContainerLoggingConfigurationHttp2

Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.

**Properties**

| Name        | Type                                          | Required | Description                                                    |
| :---------- | :-------------------------------------------- | :------- | :------------------------------------------------------------- |
| host        | string                                        | ✅       | The hostname or IP address of the HTTP logging endpoint        |
| port        | number                                        | ✅       | The port number of the HTTP logging endpoint (1-65535)         |
| format      | ContainerHttpLoggingConfigurationFormat2      | ✅       | The format in which logs will be delivered                     |
| compression | ContainerHttpLoggingConfigurationCompression2 | ✅       | The compression algorithm to apply to logs before transmission |
| user        | string                                        | ❌       | Optional username for HTTP authentication                      |
| password    | string                                        | ❌       | Optional password for HTTP authentication                      |
| path        | string                                        | ❌       | Optional URL path for the HTTP endpoint                        |
| headers     | ContainerLoggingHttpHeader[]                  | ❌       | Optional HTTP headers to include in log transmission requests  |

# ContainerHttpLoggingConfigurationFormat2

The format in which logs will be delivered

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| JSON       | string | ✅       | "json"       |
| JSON_LINES | string | ✅       | "json_lines" |

# ContainerHttpLoggingConfigurationCompression2

The compression algorithm to apply to logs before transmission

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| NONE | string | ✅       | "none"      |
| GZIP | string | ✅       | "gzip"      |
