# QueueAutoscaler

Represents the autoscaling rules for a queue

**Properties**

| Name                  | Type   | Required | Description |
| :-------------------- | :----- | :------- | :---------- |
| minReplicas           | number | ✅       |             |
| maxReplicas           | number | ✅       |             |
| desiredQueueLength    | number | ✅       |             |
| pollingPeriod         | number | ❌       |             |
| maxUpscalePerMinute   | number | ❌       |             |
| maxDownscalePerMinute | number | ❌       |             |
