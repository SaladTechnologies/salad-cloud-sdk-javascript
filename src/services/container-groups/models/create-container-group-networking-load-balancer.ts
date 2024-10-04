import { z } from 'zod';

export enum CreateContainerGroupNetworkingLoadBalancer {
  ROUNDROBIN = 'round_robin',
  LEASTNUMBEROFCONNECTIONS = 'least_number_of_connections',
}
