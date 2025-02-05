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

| Name                        | Type   | Required | Description                   |
| :-------------------------- | :----- | :------- | :---------------------------- |
| ROUND_ROBIN                 | string | ✅       | "round_robin"                 |
| LEAST_NUMBER_OF_CONNECTIONS | string | ✅       | "least_number_of_connections" |
