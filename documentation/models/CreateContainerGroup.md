# CreateContainerGroup

Represents a request to create a container group

**Properties**

| Name            | Type                             | Required | Description                                                                                     |
| :-------------- | :------------------------------- | :------- | :---------------------------------------------------------------------------------------------- |
| name            | `string`                         | ✅       |                                                                                                 |
| container       | `CreateContainer`                | ✅       | Represents a container                                                                          |
| autostartPolicy | `boolean`                        | ✅       |                                                                                                 |
| restartPolicy   | `ContainerRestartPolicy`         | ✅       |                                                                                                 |
| replicas        | `number`                         | ✅       |                                                                                                 |
| displayName     | `string`                         | ❌       |                                                                                                 |
| countryCodes    | `CountryCode[]`                  | ❌       | List of countries nodes must be located in. Remove this field to permit nodes from any country. |
| networking      | `CreateContainerGroupNetworking` | ❌       | Represents container group networking parameters                                                |
| livenessProbe   | `ContainerGroupLivenessProbe`    | ❌       | Represents the container group liveness probe                                                   |
| readinessProbe  | `ContainerGroupReadinessProbe`   | ❌       | Represents the container group readiness probe                                                  |
| startupProbe    | `ContainerGroupStartupProbe`     | ❌       | Represents the container group startup probe                                                    |
| queueConnection | `ContainerGroupQueueConnection`  | ❌       | Represents container group queue connection                                                     |
| queueAutoscaler | `QueueAutoscaler`                | ❌       | Represents the autoscaling rules for a queue                                                    |
