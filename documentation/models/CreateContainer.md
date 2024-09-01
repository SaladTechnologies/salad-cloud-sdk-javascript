# CreateContainer

Represents a container

**Properties**

| Name                   | Type                                  | Required | Description                                                                                      |
| :--------------------- | :------------------------------------ | :------- | :----------------------------------------------------------------------------------------------- |
| image                  | string                                | ✅       |                                                                                                  |
| resources              | ContainerResourceRequirements         | ✅       | Represents a container resource requirements                                                     |
| command                | string[]                              | ❌       | Pass a command (and optional arguments) to override the ENTRYPOINT and CMD of a container image. |
| priority               | ContainerGroupPriority                | ❌       |                                                                                                  |
| environmentVariables   | any                                   | ❌       |                                                                                                  |
| logging                | CreateContainerLogging                | ❌       |                                                                                                  |
| registryAuthentication | CreateContainerRegistryAuthentication | ❌       |                                                                                                  |

# CreateContainerLogging

**Properties**

| Name     | Type             | Required | Description |
| :------- | :--------------- | :------- | :---------- |
| axiom    | LoggingAxiom2    | ❌       |             |
| datadog  | LoggingDatadog2  | ❌       |             |
| newRelic | LoggingNewRelic2 | ❌       |             |
| splunk   | LoggingSplunk2   | ❌       |             |
| tcp      | LoggingTcp2      | ❌       |             |
| http     | LoggingHttp2     | ❌       |             |

# LoggingAxiom2

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| host     | string | ✅       |             |
| apiToken | string | ✅       |             |
| dataset  | string | ✅       |             |

# LoggingDatadog2

**Properties**

| Name   | Type           | Required | Description |
| :----- | :------------- | :------- | :---------- |
| host   | string         | ✅       |             |
| apiKey | string         | ✅       |             |
| tags   | DatadogTags2[] | ❌       |             |

# DatadogTags2

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| name  | string | ✅       |             |
| value | string | ✅       |             |

# LoggingNewRelic2

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| host         | string | ✅       |             |
| ingestionKey | string | ✅       |             |

# LoggingSplunk2

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| host  | string | ✅       |             |
| token | string | ✅       |             |

# LoggingTcp2

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| host | string | ✅       |             |
| port | number | ✅       |             |

# LoggingHttp2

**Properties**

| Name        | Type             | Required | Description |
| :---------- | :--------------- | :------- | :---------- |
| host        | string           | ✅       |             |
| port        | number           | ✅       |             |
| format      | HttpFormat2      | ✅       |             |
| compression | HttpCompression2 | ✅       |             |
| user        | string           | ❌       |             |
| password    | string           | ❌       |             |
| path        | string           | ❌       |             |
| headers     | HttpHeaders3[]   | ❌       |             |

# HttpFormat2

**Properties**

| Name      | Type   | Required | Description  |
| :-------- | :----- | :------- | :----------- |
| JSON      | string | ✅       | "json"       |
| JSONLINES | string | ✅       | "json_lines" |

# HttpCompression2

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| NONE | string | ✅       | "none"      |
| GZIP | string | ✅       | "gzip"      |

# HttpHeaders3

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| name  | string | ✅       |             |
| value | string | ✅       |             |

# CreateContainerRegistryAuthentication

**Properties**

| Name      | Type                             | Required | Description |
| :-------- | :------------------------------- | :------- | :---------- |
| basic     | RegistryAuthenticationBasic1     | ❌       |             |
| gcpGcr    | RegistryAuthenticationGcpGcr1    | ❌       |             |
| awsEcr    | RegistryAuthenticationAwsEcr1    | ❌       |             |
| dockerHub | RegistryAuthenticationDockerHub1 | ❌       |             |
| gcpGar    | RegistryAuthenticationGcpGar1    | ❌       |             |

# RegistryAuthenticationBasic1

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| username | string | ✅       |             |
| password | string | ✅       |             |

# RegistryAuthenticationGcpGcr1

**Properties**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| serviceKey | string | ✅       |             |

# RegistryAuthenticationAwsEcr1

**Properties**

| Name            | Type   | Required | Description |
| :-------------- | :----- | :------- | :---------- |
| accessKeyId     | string | ✅       |             |
| secretAccessKey | string | ✅       |             |

# RegistryAuthenticationDockerHub1

**Properties**

| Name                | Type   | Required | Description |
| :------------------ | :----- | :------- | :---------- |
| username            | string | ✅       |             |
| personalAccessToken | string | ✅       |             |

# RegistryAuthenticationGcpGar1

**Properties**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| serviceKey | string | ✅       |             |
