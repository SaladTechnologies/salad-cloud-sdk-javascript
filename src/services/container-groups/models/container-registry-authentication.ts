import { z } from 'zod';
import {
  ContainerRegistryAuthenticationAwsEcr,
  containerRegistryAuthenticationAwsEcr,
  containerRegistryAuthenticationAwsEcrRequest,
  containerRegistryAuthenticationAwsEcrResponse,
} from './container-registry-authentication-aws-ecr';
import {
  ContainerRegistryAuthenticationBasic,
  containerRegistryAuthenticationBasic,
  containerRegistryAuthenticationBasicRequest,
  containerRegistryAuthenticationBasicResponse,
} from './container-registry-authentication-basic';
import {
  ContainerRegistryAuthenticationDockerHub,
  containerRegistryAuthenticationDockerHub,
  containerRegistryAuthenticationDockerHubRequest,
  containerRegistryAuthenticationDockerHubResponse,
} from './container-registry-authentication-docker-hub';
import {
  ContainerRegistryAuthenticationGcpGar,
  containerRegistryAuthenticationGcpGar,
  containerRegistryAuthenticationGcpGarRequest,
  containerRegistryAuthenticationGcpGarResponse,
} from './container-registry-authentication-gcp-gar';
import {
  ContainerRegistryAuthenticationGcpGcr,
  containerRegistryAuthenticationGcpGcr,
  containerRegistryAuthenticationGcpGcrRequest,
  containerRegistryAuthenticationGcpGcrResponse,
} from './container-registry-authentication-gcp-gcr';

/**
 * Zod schema for the ContainerRegistryAuthentication model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerRegistryAuthentication = z.lazy(() => {
  return z.object({
    awsEcr: containerRegistryAuthenticationAwsEcr.optional().nullable(),
    basic: containerRegistryAuthenticationBasic.optional(),
    dockerHub: containerRegistryAuthenticationDockerHub.optional(),
    gcpGar: containerRegistryAuthenticationGcpGar.optional(),
    gcpGcr: containerRegistryAuthenticationGcpGcr.optional(),
  });
});

/**
 * Authentication configuration for various container registry types, including AWS ECR, Docker Hub, GCP GAR, GCP GCR, and basic authentication.
 * @typedef  {ContainerRegistryAuthentication} containerRegistryAuthentication - Authentication configuration for various container registry types, including AWS ECR, Docker Hub, GCP GAR, GCP GCR, and basic authentication. - Authentication configuration for various container registry types, including AWS ECR, Docker Hub, GCP GAR, GCP GCR, and basic authentication.
 * @property {ContainerRegistryAuthenticationAwsEcr} - Authentication details for AWS Elastic Container Registry (ECR)
 * @property {ContainerRegistryAuthenticationBasic} - Basic username and password authentication for generic container registries
 * @property {ContainerRegistryAuthenticationDockerHub} - Authentication details for Docker Hub registry
 * @property {ContainerRegistryAuthenticationGcpGar} - Authentication details for Google Artifact Registry (GAR)
 * @property {ContainerRegistryAuthenticationGcpGcr} - Authentication details for Google Container Registry (GCR)
 */
export type ContainerRegistryAuthentication = z.infer<typeof containerRegistryAuthentication>;

/**
 * Zod schema for mapping API responses to the ContainerRegistryAuthentication application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationResponse = z.lazy(() => {
  return z
    .object({
      aws_ecr: containerRegistryAuthenticationAwsEcrResponse.optional().nullable(),
      basic: containerRegistryAuthenticationBasicResponse.optional(),
      docker_hub: containerRegistryAuthenticationDockerHubResponse.optional(),
      gcp_gar: containerRegistryAuthenticationGcpGarResponse.optional(),
      gcp_gcr: containerRegistryAuthenticationGcpGcrResponse.optional(),
    })
    .transform((data) => ({
      awsEcr: data['aws_ecr'],
      basic: data['basic'],
      dockerHub: data['docker_hub'],
      gcpGar: data['gcp_gar'],
      gcpGcr: data['gcp_gcr'],
    }));
});

/**
 * Zod schema for mapping the ContainerRegistryAuthentication application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationRequest = z.lazy(() => {
  return z
    .object({
      awsEcr: containerRegistryAuthenticationAwsEcrRequest.optional().nullable(),
      basic: containerRegistryAuthenticationBasicRequest.optional(),
      dockerHub: containerRegistryAuthenticationDockerHubRequest.optional(),
      gcpGar: containerRegistryAuthenticationGcpGarRequest.optional(),
      gcpGcr: containerRegistryAuthenticationGcpGcrRequest.optional(),
    })
    .transform((data) => ({
      aws_ecr: data['awsEcr'],
      basic: data['basic'],
      docker_hub: data['dockerHub'],
      gcp_gar: data['gcpGar'],
      gcp_gcr: data['gcpGcr'],
    }));
});
