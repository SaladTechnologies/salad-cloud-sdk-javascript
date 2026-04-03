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
  ContainerGroupScalingAction,
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
    apiToken: 'api_token',
    dataset: 'dataset',
    host: 'host',
  };

  const datadogTagForContainerLogging: DatadogTagForContainerLogging = {
    name: 'name',
    value: 'value',
  };

  const datadogLoggingConfiguration: DatadogLoggingConfiguration = {
    apiKey: 'api_key',
    host: 'host',
    tags: [datadogTagForContainerLogging],
  };

  const containerLoggingHttpCompression = ContainerLoggingHttpCompression.NONE;

  const containerLoggingHttpFormat = ContainerLoggingHttpFormat.JSON;

  const containerLoggingHttpHeader: ContainerLoggingHttpHeader = {
    name: 'name',
    value: 'value',
  };

  const containerLoggingConfigurationHttp1: ContainerLoggingConfigurationHttp1 = {
    compression: containerLoggingHttpCompression,
    format: containerLoggingHttpFormat,
    headers: [containerLoggingHttpHeader],
    host: 'host',
    password: 'password',
    path: 'path',
    port: 55354,
    user: 'user',
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
    password: 'password',
    username: 'username',
  };

  const containerRegistryAuthenticationDockerHub: ContainerRegistryAuthenticationDockerHub = {
    personalAccessToken: 'personal_access_token',
    username: 'username',
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
    cpu: 191,
    gpuClasses: ['gpu_classes'],
    memory: 909130690,
    shmSize: 64,
    storageAmount: 699558298076245,
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

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 17025,
  };

  const queueBasedAutoscalerConfiguration: QueueBasedAutoscalerConfiguration = {
    desiredQueueLength: 53,
    maxDownscalePerMinute: 59,
    maxReplicas: 321,
    maxUpscalePerMinute: 100,
    minReplicas: 54,
    pollingPeriod: 140,
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

  const containerGroupScalingAction: ContainerGroupScalingAction = {
    replicas: 461,
    schedule: '7kwC/T8C   da       x6Ci   bM-rgGYn     bDY6,vT',
  };

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 15,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 503,
    periodSeconds: 3,
    successThreshold: 2,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 10,
  };

  const containerGroupPatch: ContainerGroupPatch = {
    container: updateContainer,
    countryCodes: [countryCode],
    displayName: 'ykW8yoj HBQ',
    livenessProbe: containerGroupLivenessProbe,
    networking: updateContainerGroupNetworking,
    queueAutoscaler: queueBasedAutoscalerConfiguration,
    readinessProbe: containerGroupReadinessProbe,
    replicas: 102,
    scalingActions: [containerGroupScalingAction],
    scheduledScalingEnabled: true,
    startupProbe: containerGroupStartupProbe,
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
