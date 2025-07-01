# GpuClass

Represents a GPU Class

**Properties**

| Name         | Type            | Required | Description                                          |
| :----------- | :-------------- | :------- | :--------------------------------------------------- |
| id           | string          | ✅       | The unique identifier                                |
| name         | string          | ✅       | The GPU class name                                   |
| prices       | GpuClassPrice[] | ✅       | The list of prices for each container group priority |
| isHighDemand | boolean         | ❌       | Whether the GPU class is in high demand              |
| gpuClassType | GpuClassType    | ❌       | The type of GPU class                                |
| minVcpu      | number          | ❌       | The minimum vCPU count                               |
| maxVcpu      | number          | ❌       | The maximum vCPU count                               |
| minRam       | number          | ❌       | The minimum RAM amount in GB                         |
| maxRam       | number          | ❌       | The maximum RAM amount in GB                         |
| minStorage   | number          | ❌       | The minimum storage amount in GB                     |
| maxStorage   | number          | ❌       | The maximum storage amount in GB                     |

# GpuClassType

The type of GPU class

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| COMMUNITY | string | ✅       | "community" |
| SECURE    | string | ✅       | "secure"    |
