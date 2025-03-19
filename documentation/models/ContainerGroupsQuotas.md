# ContainerGroupsQuotas

Represents the organization quotas for container groups

**Properties**

| Name                                    | Type   | Required | Description                                                              |
| :-------------------------------------- | :----- | :------- | :----------------------------------------------------------------------- |
| maxCreatedContainerGroups               | number | ❌       | The maximum number of container groups that can be created               |
| containerInstanceQuota                  | number | ❌       | The maximum number of replicas that can be created for a container group |
| containerReplicaQuota                   | number | ❌       | The maximum number of replicas that can be created for a container group |
| containerReplicasUsed                   | number | ❌       | The number of replicas that are currently in use                         |
| maxContainerGroupReallocationsPerMinute | number | ❌       | The maximum number of container group reallocations per minute           |
| maxContainerGroupRecreatesPerMinute     | number | ❌       | The maximum number of container group recreates per minute               |
| maxContainerGroupRestartsPerMinute      | number | ❌       | The maximum number of container group restarts per minute                |
