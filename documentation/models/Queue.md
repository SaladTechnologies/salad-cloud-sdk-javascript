# Queue

Represents a queue.

**Properties**

| Name            | Type               | Required | Description                                                                                   |
| :-------------- | :----------------- | :------- | :-------------------------------------------------------------------------------------------- |
| id              | `string`           | ✅       | The queue identifier. This is automatically generated and assigned when the queue is created. |
| name            | `string`           | ✅       | The queue name. This must be unique within the project.                                       |
| displayName     | `string`           | ✅       | The display name. This may be used as a more human-readable name.                             |
| containerGroups | `ContainerGroup[]` | ✅       |                                                                                               |
| createTime      | `string`           | ✅       | The date and time the queue was created.                                                      |
| updateTime      | `string`           | ✅       | The date and time the queue was last updated.                                                 |
| description     | `string`           | ❌       | The description. This may be used as a space for notes or other information about the queue.  |
