# SystemLog

Represents a system log

**Properties**

| Name                  | Type   | Required | Description                                       |
| :-------------------- | :----- | :------- | :------------------------------------------------ |
| eventName             | string | ✅       | The name of the event                             |
| eventTime             | string | ✅       | The UTC date & time when the log item was created |
| resourceCpu           | number | ✅       | The number of CPUs                                |
| resourceGpuClass      | string | ✅       | The GPU class name                                |
| resourceMemory        | number | ✅       | The memory amount in MB                           |
| resourceStorageAmount | number | ✅       | The storage amount in bytes                       |
| version               | string | ✅       | The version instance ID                           |
| instanceId            | string | ❌       | The container group instance identifier.          |
| machineId             | string | ❌       | The container group machine identifier.           |
