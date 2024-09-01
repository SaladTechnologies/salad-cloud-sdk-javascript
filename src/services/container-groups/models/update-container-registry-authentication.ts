import { z } from 'zod';
import {
  registryAuthenticationBasic2,
  registryAuthenticationBasic2Request,
  registryAuthenticationBasic2Response,
} from './registry-authentication-basic-2';
import {
  registryAuthenticationGcpGcr2,
  registryAuthenticationGcpGcr2Request,
  registryAuthenticationGcpGcr2Response,
} from './registry-authentication-gcp-gcr-2';
import {
  registryAuthenticationAwsEcr2,
  registryAuthenticationAwsEcr2Request,
  registryAuthenticationAwsEcr2Response,
} from './registry-authentication-aws-ecr-2';
import {
  registryAuthenticationDockerHub2,
  registryAuthenticationDockerHub2Request,
  registryAuthenticationDockerHub2Response,
} from './registry-authentication-docker-hub-2';
import {
  registryAuthenticationGcpGar2,
  registryAuthenticationGcpGar2Request,
  registryAuthenticationGcpGar2Response,
} from './registry-authentication-gcp-gar-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateContainerRegistryAuthentication = z.lazy(() => {
  return z.object({
    basic: registryAuthenticationBasic2.optional().nullable(),
    gcpGcr: registryAuthenticationGcpGcr2.optional().nullable(),
    awsEcr: registryAuthenticationAwsEcr2.optional().nullable(),
    dockerHub: registryAuthenticationDockerHub2.optional().nullable(),
    gcpGar: registryAuthenticationGcpGar2.optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateContainerRegistryAuthentication} updateContainerRegistryAuthentication
 * @property {RegistryAuthenticationBasic2}
 * @property {RegistryAuthenticationGcpGcr2}
 * @property {RegistryAuthenticationAwsEcr2}
 * @property {RegistryAuthenticationDockerHub2}
 * @property {RegistryAuthenticationGcpGar2}
 */
export type UpdateContainerRegistryAuthentication = z.infer<typeof updateContainerRegistryAuthentication>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerRegistryAuthenticationResponse = z.lazy(() => {
  return z
    .object({
      basic: registryAuthenticationBasic2Response.optional().nullable(),
      gcp_gcr: registryAuthenticationGcpGcr2Response.optional().nullable(),
      aws_ecr: registryAuthenticationAwsEcr2Response.optional().nullable(),
      docker_hub: registryAuthenticationDockerHub2Response.optional().nullable(),
      gcp_gar: registryAuthenticationGcpGar2Response.optional().nullable(),
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
export const updateContainerRegistryAuthenticationRequest = z.lazy(() => {
  return z
    .object({
      basic: registryAuthenticationBasic2Request.nullish(),
      gcpGcr: registryAuthenticationGcpGcr2Request.nullish(),
      awsEcr: registryAuthenticationAwsEcr2Request.nullish(),
      dockerHub: registryAuthenticationDockerHub2Request.nullish(),
      gcpGar: registryAuthenticationGcpGar2Request.nullish(),
    })
    .transform((data) => ({
      basic: data['basic'],
      gcp_gcr: data['gcpGcr'],
      aws_ecr: data['awsEcr'],
      docker_hub: data['dockerHub'],
      gcp_gar: data['gcpGar'],
    }));
});
