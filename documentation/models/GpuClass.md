# GpuClass

Represents a GPU Class

**Properties**

| Name         | Type            | Required | Description                                          |
| :----------- | :-------------- | :------- | :--------------------------------------------------- |
| id           | string          | ✅       | The unique identifier                                |
| name         | string          | ✅       | The GPU class name                                   |
| prices       | GpuClassPrice[] | ✅       | The list of prices for each container group priority |
| isHighDemand | boolean         | ❌       | Whether the GPU class is in high demand              |
