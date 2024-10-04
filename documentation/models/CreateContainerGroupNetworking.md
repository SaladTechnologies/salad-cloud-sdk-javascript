# CreateContainerGroupNetworking

Represents container group networking parameters

**Properties**

| Name                  | Type                                       | Required | Description |
| :-------------------- | :----------------------------------------- | :------- | :---------- |
| protocol              | ContainerNetworkingProtocol                | ✅       |             |
| port                  | number                                     | ✅       |             |
| auth                  | boolean                                    | ✅       |             |
| loadBalancer          | CreateContainerGroupNetworkingLoadBalancer | ❌       |             |
| singleConnectionLimit | boolean                                    | ❌       |             |
| clientRequestTimeout  | number                                     | ❌       |             |
| serverResponseTimeout | number                                     | ❌       |             |

# CreateContainerGroupNetworkingLoadBalancer

**Properties**

| Name                     | Type   | Required | Description                   |
| :----------------------- | :----- | :------- | :---------------------------- |
| ROUNDROBIN               | string | ✅       | "round_robin"                 |
| LEASTNUMBEROFCONNECTIONS | string | ✅       | "least_number_of_connections" |
