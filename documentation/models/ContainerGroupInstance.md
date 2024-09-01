# ContainerGroupInstance

Represents the details of a single container group instance

**Properties**

| Name       | Type    | Required | Description                                                                                                                                            |
| :--------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| instanceId | string  | ✅       | The unique instance ID                                                                                                                                 |
| machineId  | string  | ✅       | The machine ID                                                                                                                                         |
| state      | State   | ✅       | The state of the container group instance                                                                                                              |
| updateTime | string  | ✅       | The UTC date & time when the workload on this machine transitioned to the current state                                                                |
| version    | number  | ✅       | The version of the running container group                                                                                                             |
| ready      | boolean | ❌       | Specifies whether the container group instance is currently passing its readiness check. If no readiness probe is defined, is true once fully started. |
| started    | boolean | ❌       | Specifies whether the container group instance passed its startup probe. Is always true when no startup probe is defined.                              |

# State

The state of the container group instance

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| ALLOCATING  | string | ✅       | "allocating"  |
| DOWNLOADING | string | ✅       | "downloading" |
| CREATING    | string | ✅       | "creating"    |
| RUNNING     | string | ✅       | "running"     |
| STOPPING    | string | ✅       | "stopping"    |
