# ContainerGroupScalingAction

Represents a scaling action configuration for a container group

**Properties**

| Name     | Type   | Required | Description                                                           |
| :------- | :----- | :------- | :-------------------------------------------------------------------- |
| replicas | number | ✅       | The number of replicas to scale to during the scheduled period        |
| schedule | string | ✅       | The cron-style schedule string defining when the scaling should occur |
