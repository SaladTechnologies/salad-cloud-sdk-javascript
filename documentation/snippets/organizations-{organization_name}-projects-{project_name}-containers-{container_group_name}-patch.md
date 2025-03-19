```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupPatch,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  CountryCode,
  QueueBasedAutoscalerConfiguration,
  SaladCloudSdk,
  UpdateContainer,
  UpdateContainerGroupNetworking,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const axiomLoggingConfiguration: AxiomLoggingConfiguration = {
    host: 'host',
    apiToken: 'api_token',
    dataset: 'dataset',
  };

  const datadogTagForContainerLogging: DatadogTagForContainerLogging = {
    name: 'name',
    value: 'value',
  };

  const datadogLoggingConfiguration: DatadogLoggingConfiguration = {
    host: 'host',
    apiKey: 'api_key',
    tags: [datadogTagForContainerLogging],
  };

  const format = Format.JSON;

  const containerLoggingHttpHeader: ContainerLoggingHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const compression = Compression.NONE;

  const containerHttpLoggingConfiguration: ContainerHttpLoggingConfiguration = {
    host: 'host',
    port: 43509,
    user: 'user',
    password: 'password',
    path: 'path',
    format: format,
    headers: [containerLoggingHttpHeader],
    compression: compression,
  };

  const newRelicLoggingConfiguration: NewRelicLoggingConfiguration = {
    host: 'host',
    ingestionKey: 'ingestion_key',
  };

  const containerLoggingSplunkConfiguration: ContainerLoggingSplunkConfiguration = {
    host: 'host',
    token: 'token',
  };

  const tcpLoggingConfiguration: TcpLoggingConfiguration = {
    host: 'host',
    port: 35405,
  };

  const containerLoggingConfiguration: ContainerLoggingConfiguration = {
    axiom: axiomLoggingConfiguration,
    datadog: datadogLoggingConfiguration,
    http: containerHttpLoggingConfiguration,
    newRelic: newRelicLoggingConfiguration,
    splunk: containerLoggingSplunkConfiguration,
    tcp: tcpLoggingConfiguration,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const containerRegistryAuthenticationAwsEcr: ContainerRegistryAuthenticationAwsEcr = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const containerRegistryAuthenticationBasic: ContainerRegistryAuthenticationBasic = {
    username: 'username',
    password: 'password',
  };

  const containerRegistryAuthenticationDockerHub: ContainerRegistryAuthenticationDockerHub = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const containerRegistryAuthenticationGcpGar: ContainerRegistryAuthenticationGcpGar = {
    serviceKey: 'service_key',
  };

  const containerRegistryAuthenticationGcpGcr: ContainerRegistryAuthenticationGcpGcr = {
    serviceKey: 'service_key',
  };

  const containerRegistryAuthentication: ContainerRegistryAuthentication = {
    awsEcr: containerRegistryAuthenticationAwsEcr,
    basic: containerRegistryAuthenticationBasic,
    dockerHub: containerRegistryAuthenticationDockerHub,
    gcpGar: containerRegistryAuthenticationGcpGar,
    gcpGcr: containerRegistryAuthenticationGcpGcr,
  };

  const containerResourceUpdateSchema: ContainerResourceUpdateSchema = {
    cpu: 4,
    memory: 50175,
    gpuClasses: ['gpu_classes'],
    storageAmount: 27536827537,
  };

  const updateContainer: UpdateContainer = {
    command: ['command'],
    environmentVariables: [],
    image: 'image',
    imageCaching: true,
    logging: containerLoggingConfiguration,
    priority: containerGroupPriority,
    registryAuthentication: containerRegistryAuthentication,
    resources: containerResourceUpdateSchema,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 27606,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupGRpcProbe: ContainerGroupGRpcProbe = {
    port: 4792,
    service: 'service',
  };

  const containerGroupProbeHttpHeader: ContainerGroupProbeHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const httpScheme = HttpScheme.HTTP;

  const containerGroupHttpProbeConfiguration: ContainerGroupHttpProbeConfiguration = {
    headers: [containerGroupProbeHttpHeader],
    path: 'path',
    port: 18942,
    scheme: httpScheme,
  };

  const containerGroupTcpProbe: ContainerGroupTcpProbe = {
    port: 47377,
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 987,
    periodSeconds: 10,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 30,
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 479,
    periodSeconds: 1,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 1,
  };

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 15,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 563,
    tcp: containerGroupTcpProbe,
    periodSeconds: 3,
    successThreshold: 2,
    timeoutSeconds: 10,
  };

  const queueBasedAutoscalerConfiguration: QueueBasedAutoscalerConfiguration = {
    desiredQueueLength: 2,
    maxReplicas: 219,
    maxDownscalePerMinute: 5,
    maxUpscalePerMinute: 16,
    minReplicas: 88,
    pollingPeriod: 680,
  };

  const containerGroupPatch: ContainerGroupPatch = {
    displayName: 'rukYe',
    container: updateContainer,
    replicas: 476,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueAutoscaler: queueBasedAutoscalerConfiguration,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    containerGroupPatch,
  );

  console.log(data);
})();
```
