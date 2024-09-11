# ContainerGroupState

Represents a container group state

**Properties**

| Name                 | Type                                | Required | Description                                        |
| :------------------- | :---------------------------------- | :------- | :------------------------------------------------- |
| status               | `ContainerGroupStatus`              | ✅       |                                                    |
| startTime            | `string`                            | ✅       |                                                    |
| finishTime           | `string`                            | ✅       |                                                    |
| instanceStatusCounts | `ContainerGroupInstanceStatusCount` | ✅       | Represents a container group instance status count |
| description          | `string`                            | ❌       |                                                    |
