# ContainerGroupNetworking

Represents container group networking parameters

**Properties**

| Name                  | Type                                 | Required | Description |
| :-------------------- | :----------------------------------- | :------- | :---------- |
| protocol              | ContainerNetworkingProtocol          | ✅       |             |
| port                  | number                               | ✅       |             |
| auth                  | boolean                              | ✅       |             |
| dns                   | string                               | ✅       |             |
| loadBalancer          | ContainerGroupNetworkingLoadBalancer | ❌       |             |
| singleConnectionLimit | boolean                              | ❌       |             |
| clientRequestTimeout  | number                               | ❌       |             |
| serverResponseTimeout | number                               | ❌       |             |

# ContainerGroupNetworkingLoadBalancer

**Properties**

| Name                        | Type   | Required | Description                   |
| :-------------------------- | :----- | :------- | :---------------------------- |
| ROUND_ROBIN                 | string | ✅       | "round_robin"                 |
| LEAST_NUMBER_OF_CONNECTIONS | string | ✅       | "least_number_of_connections" |
