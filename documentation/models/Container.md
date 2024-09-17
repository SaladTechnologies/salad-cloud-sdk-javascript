# Container

Represents a container

**Properties**

| Name                 | Type                          | Required | Description                                  |
| :------------------- | :---------------------------- | :------- | :------------------------------------------- |
| image                | string                        | ✅       |                                              |
| resources            | ContainerResourceRequirements | ✅       | Represents a container resource requirements |
| command              | string[]                      | ✅       |                                              |
| priority             | ContainerGroupPriority        | ❌       |                                              |
| size                 | number                        | ❌       |                                              |
| hash                 | string                        | ❌       |                                              |
| environmentVariables | any                           | ❌       |                                              |
| logging              | ContainerLogging              | ❌       |                                              |

# ContainerLogging

**Properties**

| Name     | Type             | Required | Description |
| :------- | :--------------- | :------- | :---------- |
| axiom    | LoggingAxiom1    | ❌       |             |
| datadog  | LoggingDatadog1  | ❌       |             |
| newRelic | LoggingNewRelic1 | ❌       |             |
| splunk   | LoggingSplunk1   | ❌       |             |
| tcp      | LoggingTcp1      | ❌       |             |
| http     | LoggingHttp1     | ❌       |             |

# LoggingAxiom1

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| host     | string | ✅       |             |
| apiToken | string | ✅       |             |
| dataset  | string | ✅       |             |

# LoggingDatadog1

**Properties**

| Name   | Type           | Required | Description |
| :----- | :------------- | :------- | :---------- |
| host   | string         | ✅       |             |
| apiKey | string         | ✅       |             |
| tags   | DatadogTags1[] | ❌       |             |

# DatadogTags1

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| name  | string | ✅       |             |
| value | string | ✅       |             |

# LoggingNewRelic1

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| host         | string | ✅       |             |
| ingestionKey | string | ✅       |             |

# LoggingSplunk1

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| host  | string | ✅       |             |
| token | string | ✅       |             |

# LoggingTcp1

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| host | string | ✅       |             |
| port | number | ✅       |             |

# LoggingHttp1

**Properties**

| Name        | Type             | Required | Description |
| :---------- | :--------------- | :------- | :---------- |
| host        | string           | ✅       |             |
| port        | number           | ✅       |             |
| format      | HttpFormat1      | ✅       |             |
| compression | HttpCompression1 | ✅       |             |
| user        | string           | ❌       |             |
| password    | string           | ❌       |             |
| path        | string           | ❌       |             |
| headers     | HttpHeaders1[]   | ❌       |             |

# HttpFormat1

**Properties**

| Name      | Type   | Required | Description  |
| :-------- | :----- | :------- | :----------- |
| JSON      | string | ✅       | "json"       |
| JSONLINES | string | ✅       | "json_lines" |

# HttpCompression1

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| NONE | string | ✅       | "none"      |
| GZIP | string | ✅       | "gzip"      |

# HttpHeaders1

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| name  | string | ✅       |             |
| value | string | ✅       |             |
