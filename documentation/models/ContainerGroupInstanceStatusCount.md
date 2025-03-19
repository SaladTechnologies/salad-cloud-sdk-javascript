# ContainerGroupInstanceStatusCount

A summary of container group instances categorized by their current lifecycle status

**Properties**

| Name            | Type   | Required | Description                                                                    |
| :-------------- | :----- | :------- | :----------------------------------------------------------------------------- |
| allocatingCount | number | ✅       | The number of container instances that are currently being allocated resources |
| creatingCount   | number | ✅       | The number of container instances that are in the process of being created     |
| runningCount    | number | ✅       | The number of container instances that are currently running and operational   |
| stoppingCount   | number | ✅       | The number of container instances that are in the process of stopping          |
