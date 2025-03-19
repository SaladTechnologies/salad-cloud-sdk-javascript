# ContainerGroupNetworkingConfiguration

Network configuration for container groups that defines connectivity, routing, and access control settings

**Properties**

| Name                  | Type                                    | Required | Description                                                                                                                                                       |
| :-------------------- | :-------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth                  | boolean                                 | ✅       | Whether authentication is required for network access to the container group                                                                                      |
| dns                   | string                                  | ✅       | Domain name or URL endpoint for the container group's network interface                                                                                           |
| loadBalancer          | TheContainerGroupNetworkingLoadBalancer | ✅       | The container group networking load balancer.                                                                                                                     |
| port                  | number                                  | ✅       | The container group networking port.                                                                                                                              |
| protocol              | ContainerNetworkingProtocol             | ✅       | Defines the communication protocol used for network traffic between containers or external systems. Currently supports HTTP protocol for web-based communication. |
| clientRequestTimeout  | number                                  | ❌       | The container group networking client request timeout.                                                                                                            |
| serverResponseTimeout | number                                  | ❌       | The container group networking server response timeout.                                                                                                           |
| singleConnectionLimit | boolean                                 | ❌       | The container group networking single connection limit flag.                                                                                                      |
