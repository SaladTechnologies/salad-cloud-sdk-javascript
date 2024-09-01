import { z } from 'zod';
import {
  registryAuthenticationBasic1,
  registryAuthenticationBasic1Request,
  registryAuthenticationBasic1Response,
} from './registry-authentication-basic-1';
import {
  registryAuthenticationGcpGcr1,
  registryAuthenticationGcpGcr1Request,
  registryAuthenticationGcpGcr1Response,
} from './registry-authentication-gcp-gcr-1';
import {
  registryAuthenticationAwsEcr1,
  registryAuthenticationAwsEcr1Request,
  registryAuthenticationAwsEcr1Response,
} from './registry-authentication-aws-ecr-1';
import {
  registryAuthenticationDockerHub1,
  registryAuthenticationDockerHub1Request,
  registryAuthenticationDockerHub1Response,
} from './registry-authentication-docker-hub-1';
import {
  registryAuthenticationGcpGar1,
  registryAuthenticationGcpGar1Request,
  registryAuthenticationGcpGar1Response,
} from './registry-authentication-gcp-gar-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerRegistryAuthentication = z.lazy(() => {
  return z.object({
    basic: registryAuthenticationBasic1.optional().nullable(),
    gcpGcr: registryAuthenticationGcpGcr1.optional().nullable(),
    awsEcr: registryAuthenticationAwsEcr1.optional().nullable(),
    dockerHub: registryAuthenticationDockerHub1.optional().nullable(),
    gcpGar: registryAuthenticationGcpGar1.optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateContainerRegistryAuthentication} createContainerRegistryAuthentication
 * @property {RegistryAuthenticationBasic1}
 * @property {RegistryAuthenticationGcpGcr1}
 * @property {RegistryAuthenticationAwsEcr1}
 * @property {RegistryAuthenticationDockerHub1}
 * @property {RegistryAuthenticationGcpGar1}
 */
export type CreateContainerRegistryAuthentication = z.infer<typeof createContainerRegistryAuthentication>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerRegistryAuthenticationResponse = z.lazy(() => {
  return z
    .object({
      basic: registryAuthenticationBasic1Response.optional().nullable(),
      gcp_gcr: registryAuthenticationGcpGcr1Response.optional().nullable(),
      aws_ecr: registryAuthenticationAwsEcr1Response.optional().nullable(),
      docker_hub: registryAuthenticationDockerHub1Response.optional().nullable(),
      gcp_gar: registryAuthenticationGcpGar1Response.optional().nullable(),
    })
    .transform((data) => ({
      basic: data['basic'],
      gcpGcr: data['gcp_gcr'],
      awsEcr: data['aws_ecr'],
      dockerHub: data['docker_hub'],
      gcpGar: data['gcp_gar'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerRegistryAuthenticationRequest = z.lazy(() => {
  return z
    .object({
      basic: registryAuthenticationBasic1Request.nullish(),
      gcpGcr: registryAuthenticationGcpGcr1Request.nullish(),
      awsEcr: registryAuthenticationAwsEcr1Request.nullish(),
      dockerHub: registryAuthenticationDockerHub1Request.nullish(),
      gcpGar: registryAuthenticationGcpGar1Request.nullish(),
    })
    .transform((data) => ({
      basic: data['basic'],
      gcp_gcr: data['gcpGcr'],
      aws_ecr: data['awsEcr'],
      docker_hub: data['dockerHub'],
      gcp_gar: data['gcpGar'],
    }));
});
