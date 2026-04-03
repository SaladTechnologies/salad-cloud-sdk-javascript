# GpuClass

Represents a GPU Class

**Properties**

| Name         | Type                                | Required | Description                                          |
| :----------- | :---------------------------------- | :------- | :--------------------------------------------------- |
| id           | string                              | ✅       | The unique identifier                                |
| name         | string                              | ✅       | The GPU class name                                   |
| prices       | [GpuClassPrice](GpuClassPrice.md)[] | ✅       | The list of prices for each container group priority |
| gpuClassType | GpuClassType                        | ❌       | The type of GPU class                                |
| gpuCount     | number                              | ❌       | The number of GPUs in the cluster                    |
| isHighDemand | boolean                             | ❌       | Whether the GPU class is in high demand              |
| maxRam       | number                              | ❌       | The maximum RAM amount in MB                         |
| maxStorage   | number                              | ❌       | The maximum storage amount in bytes                  |
| maxVcpu      | number                              | ❌       | The maximum vCPU count                               |
| minRam       | number                              | ❌       | The minimum RAM amount in MB                         |
| minStorage   | number                              | ❌       | The minimum storage amount in bytes                  |
| minVcpu      | number                              | ❌       | The minimum vCPU count                               |

# GpuClassType

The type of GPU class

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| COMMUNITY | string | ✅       | "community" |
| SECURE    | string | ✅       | "secure"    |
