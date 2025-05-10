```typescript
import {
  ContainerConfiguration,
  ContainerGroupCreationRequest,
  ContainerGroupLivenessProbe,
  ContainerGroupQueueConnection,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  ContainerRestartPolicy,
  CountryCode,
  CreateContainerGroupNetworking,
  QueueBasedAutoscalerConfiguration,
  SaladCloudSdk,
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

  const containerLoggingConfigurationHttp2: ContainerLoggingConfigurationHttp2 = {
    host: 'host',
    port: 5418,
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
    port: 44539,
  };

  const containerConfigurationLogging: ContainerConfigurationLogging = {
    axiom: axiomLoggingConfiguration,
    datadog: datadogLoggingConfiguration,
    http: containerLoggingConfigurationHttp2,
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

  const createContainerResourceRequirements: CreateContainerResourceRequirements = {
    cpu: 7,
    memory: 55380,
    gpuClasses: ['gpu_classes'],
    storageAmount: 172087948244,
  };

  const containerConfiguration: ContainerConfiguration = {
    command: ['command'],
    environmentVariables: [],
    image: 'acme/:latest',
    imageCaching: true,
    logging: containerConfigurationLogging,
    priority: containerGroupPriority,
    registryAuthentication: containerRegistryAuthentication,
    resources: createContainerResourceRequirements,
  };

  const countryCode = CountryCode.AF;

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupGRpcProbe: ContainerGroupGRpcProbe = {
    port: 20211,
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
    port: 36714,
    scheme: httpScheme,
  };

  const containerGroupTcpProbe: ContainerGroupTcpProbe = {
    port: 7155,
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 150,
    periodSeconds: 10,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 30,
  };

  const theContainerGroupNetworkingLoadBalancer = TheContainerGroupNetworkingLoadBalancer.ROUND_ROBIN;

  const containerNetworkingProtocol = ContainerNetworkingProtocol.HTTP;

  const createContainerGroupNetworking: CreateContainerGroupNetworking = {
    auth: true,
    clientRequestTimeout: 100000,
    loadBalancer: theContainerGroupNetworkingLoadBalancer,
    port: 60000,
    protocol: containerNetworkingProtocol,
    serverResponseTimeout: 100000,
    singleConnectionLimit: true,
  };

  const queueBasedAutoscalerConfiguration: QueueBasedAutoscalerConfiguration = {
    desiredQueueLength: 11,
    maxReplicas: 285,
    maxDownscalePerMinute: 33,
    maxUpscalePerMinute: 24,
    minReplicas: 123,
    pollingPeriod: 1562,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'path',
    port: 44195,
    queueName: 'rjeo3wk1tliaumsx88h6r2rtp3ugpq8z1j9rfjywt4fl19-rpsziiz',
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 3,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 1001,
    periodSeconds: 1,
    successThreshold: 1,
    tcp: containerGroupTcpProbe,
    timeoutSeconds: 1,
  };

  const containerRestartPolicy = ContainerRestartPolicy.ALWAYS;

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    exec: containerGroupProbeExec,
    failureThreshold: 15,
    grpc: containerGroupGRpcProbe,
    http: containerGroupHttpProbeConfiguration,
    initialDelaySeconds: 979,
    tcp: containerGroupTcpProbe,
    periodSeconds: 3,
    successThreshold: 2,
    timeoutSeconds: 10,
  };

  const containerGroupCreationRequest: ContainerGroupCreationRequest = {
    autostartPolicy: true,
    container: containerConfiguration,
    countryCodes: [countryCode],
    displayName: 'Vm1TWq',
    livenessProbe: containerGroupLivenessProbe,
    name: 'name',
    networking: createContainerGroupNetworking,
    queueAutoscaler: queueBasedAutoscalerConfiguration,
    queueConnection: containerGroupQueueConnection,
    readinessProbe: containerGroupReadinessProbe,
    replicas: 121,
    restartPolicy: containerRestartPolicy,
    startupProbe: containerGroupStartupProbe,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'acme-corp',
    'dev-env',
    containerGroupCreationRequest,
  );

  console.log(data);
})();
```
