# WorkloadError

Represents a workload error

**Properties**

| Name        | Type   | Required | Description                                                                             |
| :---------- | :----- | :------- | :-------------------------------------------------------------------------------------- |
| allocatedAt | string | ✅       | The timestamp when the workload was initially allocated to a machine                    |
| detail      | string | ✅       | A detailed error message describing the nature and cause of the workload failure        |
| failedAt    | string | ✅       | The timestamp when the workload failure was detected or reported                        |
| instanceId  | string | ✅       | The container group instance identifier.                                                |
| machineId   | string | ✅       | The container group machine identifier.                                                 |
| version     | number | ✅       | The schema version number for this error record, used for tracking error format changes |
| startedAt   | string | ❌       | The timestamp when the workload started execution, or null if it failed before starting |
