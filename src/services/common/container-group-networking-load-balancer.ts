import { z } from 'zod';

export enum ContainerGroupNetworkingLoadBalancer {
  ROUND_ROBIN = 'round_robin',
  LEAST_NUMBER_OF_CONNECTIONS = 'least_number_of_connections',
}
