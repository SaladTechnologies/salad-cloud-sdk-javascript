# UpdateContainer

Represents an update container object

**Properties**

| Name                   | Type                                  | Required | Description                                                                                      |
| :--------------------- | :------------------------------------ | :------- | :----------------------------------------------------------------------------------------------- |
| image                  | string                                | ❌       |                                                                                                  |
| resources              | Resources                             | ❌       |                                                                                                  |
| command                | string[]                              | ❌       | Pass a command (and optional arguments) to override the ENTRYPOINT and CMD of a container image. |
| priority               | ContainerGroupPriority                | ❌       |                                                                                                  |
| environmentVariables   | any                                   | ❌       |                                                                                                  |
| logging                | UpdateContainerLogging                | ❌       |                                                                                                  |
| registryAuthentication | UpdateContainerRegistryAuthentication | ❌       |                                                                                                  |

# Resources

**Properties**

| Name          | Type     | Required | Description |
| :------------ | :------- | :------- | :---------- |
| cpu           | number   | ❌       |             |
| memory        | number   | ❌       |             |
| gpuClasses    | string[] | ❌       |             |
| storageAmount | number   | ❌       |             |

# UpdateContainerLogging

**Properties**

| Name     | Type             | Required | Description |
| :------- | :--------------- | :------- | :---------- |
| axiom    | LoggingAxiom3    | ❌       |             |
| datadog  | LoggingDatadog3  | ❌       |             |
| newRelic | LoggingNewRelic3 | ❌       |             |
| splunk   | LoggingSplunk3   | ❌       |             |
| tcp      | LoggingTcp3      | ❌       |             |
| http     | LoggingHttp3     | ❌       |             |

# LoggingAxiom3

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| host     | string | ✅       |             |
| apiToken | string | ✅       |             |
| dataset  | string | ✅       |             |

# LoggingDatadog3

**Properties**

| Name   | Type           | Required | Description |
| :----- | :------------- | :------- | :---------- |
| host   | string         | ✅       |             |
| apiKey | string         | ✅       |             |
| tags   | DatadogTags3[] | ❌       |             |

# DatadogTags3

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| name  | string | ✅       |             |
| value | string | ✅       |             |

# LoggingNewRelic3

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| host         | string | ✅       |             |
| ingestionKey | string | ✅       |             |

# LoggingSplunk3

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| host  | string | ✅       |             |
| token | string | ✅       |             |

# LoggingTcp3

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| host | string | ✅       |             |
| port | number | ✅       |             |

# LoggingHttp3

**Properties**

| Name        | Type             | Required | Description |
| :---------- | :--------------- | :------- | :---------- |
| host        | string           | ✅       |             |
| port        | number           | ✅       |             |
| format      | HttpFormat3      | ✅       |             |
| compression | HttpCompression3 | ✅       |             |
| user        | string           | ❌       |             |
| password    | string           | ❌       |             |
| path        | string           | ❌       |             |
| headers     | HttpHeaders4[]   | ❌       |             |

# HttpFormat3

**Properties**

| Name      | Type   | Required | Description  |
| :-------- | :----- | :------- | :----------- |
| JSON      | string | ✅       | "json"       |
| JSONLINES | string | ✅       | "json_lines" |

# HttpCompression3

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| NONE | string | ✅       | "none"      |
| GZIP | string | ✅       | "gzip"      |

# HttpHeaders4

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| name  | string | ✅       |             |
| value | string | ✅       |             |

# UpdateContainerRegistryAuthentication

**Properties**

| Name      | Type                             | Required | Description |
| :-------- | :------------------------------- | :------- | :---------- |
| basic     | RegistryAuthenticationBasic2     | ❌       |             |
| gcpGcr    | RegistryAuthenticationGcpGcr2    | ❌       |             |
| awsEcr    | RegistryAuthenticationAwsEcr2    | ❌       |             |
| dockerHub | RegistryAuthenticationDockerHub2 | ❌       |             |
| gcpGar    | RegistryAuthenticationGcpGar2    | ❌       |             |

# RegistryAuthenticationBasic2

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| username | string | ✅       |             |
| password | string | ✅       |             |

# RegistryAuthenticationGcpGcr2

**Properties**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| serviceKey | string | ✅       |             |

# RegistryAuthenticationAwsEcr2

**Properties**

| Name            | Type   | Required | Description |
| :-------------- | :----- | :------- | :---------- |
| accessKeyId     | string | ✅       |             |
| secretAccessKey | string | ✅       |             |

# RegistryAuthenticationDockerHub2

**Properties**

| Name                | Type   | Required | Description |
| :------------------ | :----- | :------- | :---------- |
| username            | string | ✅       |             |
| personalAccessToken | string | ✅       |             |

# RegistryAuthenticationGcpGar2

**Properties**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| serviceKey | string | ✅       |             |
