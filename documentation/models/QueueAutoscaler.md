# QueueAutoscaler

Represents the autoscaling rules for a queue

**Properties**

| Name                  | Type   | Required | Description                                                     |
| :-------------------- | :----- | :------- | :-------------------------------------------------------------- |
| minReplicas           | number | ✅       | The minimum number of instances the container can scale down to |
| maxReplicas           | number | ✅       | The maximum number of instances the container can scale up to   |
| desiredQueueLength    | number | ✅       |                                                                 |
| pollingPeriod         | number | ❌       | The period (in seconds) in which the queue checks the formula   |
| maxUpscalePerMinute   | number | ❌       | The maximum number of instances that can be added per minute    |
| maxDownscalePerMinute | number | ❌       | The maximum number of instances that can be removed per minute  |
