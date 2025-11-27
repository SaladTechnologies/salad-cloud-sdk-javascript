```typescript
import {
  AxiomLoggingConfiguration,
  ContainerGroupGRpcProbe,
  ContainerGroupHttpProbeConfiguration,
  ContainerGroupLivenessProbe,
  ContainerGroupPatch,
  ContainerGroupPriority,
  ContainerGroupProbeExec,
  ContainerGroupProbeHttpHeader,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  ContainerGroupTcpProbe,
  ContainerLoggingConfigurationHttp1,
  ContainerLoggingHttpCompression,
  ContainerLoggingHttpFormat,
  ContainerLoggingHttpHeader,
  ContainerLoggingSplunkConfiguration,
  ContainerRegistryAuthentication,
  ContainerRegistryAuthenticationAwsEcr,
  ContainerRegistryAuthenticationBasic,
  ContainerRegistryAuthenticationDockerHub,
  ContainerRegistryAuthenticationGcpGar,
  ContainerRegistryAuthenticationGcpGcr,
  ContainerResourceUpdateSchema,
  CountryCode,
  DatadogLoggingConfiguration,
  DatadogTagForContainerLogging,
  HttpScheme,
  NewRelicLoggingConfiguration,
  QueueBasedAutoscalerConfiguration,
  SaladCloudSdk,
  TcpLoggingConfiguration,
  UpdateContainer,
  UpdateContainerGroupNetworking,
  UpdateContainerLogging,
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

  const containerLoggingHttpFormat = ContainerLoggingHttpFormat.JSON;

  const containerLoggingHttpHeader: ContainerLoggingHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const containerLoggingHttpCompression = ContainerLoggingHttpCompression.NONE;

  const containerLoggingConfigurationHttp1: ContainerLoggingConfigurationHttp1 = {
    host: 'host',
    port: 55354,
    user: 'user',
    password: 'password',
    path: 'path',
    format: containerLoggingHttpFormat,
    headers: [containerLoggingHttpHeader],
    compression: containerLoggingHttpCompression,
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
    port: 44671,
  };

  const updateContainerLogging: UpdateContainerLogging = {
    axiom: axiomLoggingConfiguration,
    datadog: datadogLoggingConfiguration,
    http: containerLoggingConfigurationHttp1,
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
    cpu: 1013,
    memory: 352043675,
    gpuClasses: ['gpu_classes'],
    storageAmount: 1032076497908566.1,
    shmSize: 64,
  };

  const updateContainer: UpdateContainer = {
    command: ['command'],
    environmentVariables: [],
    image: 'image',
    imageCaching: true,
    logging: updateContainerLogging,
    priority: containerGroupPriority,
    registryAuthentication: containerRegistryAuthentication,
    resources: containerResourceUpdateSchema,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 13142,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupGRpcProbe: ContainerGroupGRpcProbe = {
    port: 37648,
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
    port: 29069,
    scheme: httpScheme,
  };

  const containerGroupTcpProbe: ContainerGroupTcpProbe = {
    port: 13817,
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 670,
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
    initialDelaySeconds: 262,
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
    initialDelaySeconds: 1106,
    tcp: containerGroupTcpProbe,
    periodSeconds: 3,
    successThreshold: 2,
    timeoutSeconds: 10,
  };

  const queueBasedAutoscalerConfiguration: QueueBasedAutoscalerConfiguration = {
    desiredQueueLength: 53,
    maxReplicas: 291,
    maxDownscalePerMinute: 65,
    maxUpscalePerMinute: 100,
    minReplicas: 54,
    pollingPeriod: 140,
  };

  const containerGroupPatch: ContainerGroupPatch = {
    displayName: 'ZJjdnvu',
    container: updateContainer,
    replicas: 56,
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
