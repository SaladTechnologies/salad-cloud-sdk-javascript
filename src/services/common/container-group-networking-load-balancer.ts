import { z } from 'zod';

export enum ContainerGroupNetworkingLoadBalancer {
  ROUNDROBIN = 'round_robin',
  LEASTNUMBEROFCONNECTIONS = 'least_number_of_connections',
}
