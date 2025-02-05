# SystemLog

Represents a system log

**Properties**

| Name                  | Type   | Required | Description                                       |
| :-------------------- | :----- | :------- | :------------------------------------------------ |
| eventName             | string | ✅       | The name of the event                             |
| eventTime             | string | ✅       | The UTC date & time when the log item was created |
| version               | string | ✅       | The version instance ID                           |
| resourceCpu           | number | ✅       | The number of CPUs                                |
| resourceMemory        | number | ✅       | The memory amount in MB                           |
| resourceGpuClass      | string | ✅       | The GPU class name                                |
| resourceStorageAmount | number | ✅       | The storage amount in bytes                       |
| instanceId            | string | ❌       | The unique instance ID                            |
| machineId             | string | ❌       | The organization-specific machine ID              |
