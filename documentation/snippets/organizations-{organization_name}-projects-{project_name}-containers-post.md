```typescript
import {
  AxiomLoggingConfiguration,
  ContainerConfiguration,
  ContainerConfigurationLogging,
  ContainerGroupCreationRequest,
  ContainerGroupGRpcProbe,
  ContainerGroupHttpProbeConfiguration,
  ContainerGroupLivenessProbe,
  ContainerGroupPriority,
  ContainerGroupProbeExec,
  ContainerGroupProbeHttpHeader,
  ContainerGroupQueueConnection,
  ContainerGroupReadinessProbe,
  ContainerGroupScalingAction,
  ContainerGroupStartupProbe,
  ContainerGroupTcpProbe,
  ContainerLoggingConfigurationHttp2,
  ContainerLoggingHttpCompression,
  ContainerLoggingHttpFormat,
  ContainerLoggingHttpHeader,
  ContainerLoggingSplunkConfiguration,
  ContainerNetworkingProtocol,
  ContainerRegistryAuthentication,
  ContainerRegistryAuthenticationAwsEcr,
  ContainerRegistryAuthenticationBasic,
  ContainerRegistryAuthenticationDockerHub,
  ContainerRegistryAuthenticationGcpGar,
  ContainerRegistryAuthenticationGcpGcr,
  ContainerRestartPolicy,
  CountryCode,
  CreateContainerGroupNetworking,
  CreateContainerResourceRequirements,
  DatadogLoggingConfiguration,
  DatadogTagForContainerLogging,
  HttpScheme,
  NewRelicLoggingConfiguration,
  QueueBasedAutoscalerConfiguration,
  SaladCloudSdk,
  TcpLoggingConfiguration,
  TheContainerGroupNetworkingLoadBalancer,
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

  const containerLoggingConfigurationHttp2: ContainerLoggingConfigurationHttp2 = {
    compression: containerLoggingHttpCompression,
    format: containerLoggingHttpFormat,
    headers: [containerLoggingHttpHeader],
    host: 'host',
    password: 'password',
    path: 'path',
    port: 42056,
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

  const createContainerResourceRequirements: CreateContainerResourceRequirements = {
    cpu: 827,
    gpuClasses: ['gpu_classes'],
    memory: 734164836,
    shmSize: 64,
    storageAmount: 761306530849177.9,
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
    desiredQueueLength: 53,
    maxDownscalePerMinute: 59,
    maxReplicas: 321,
    maxUpscalePerMinute: 100,
    minReplicas: 54,
    pollingPeriod: 140,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'path',
    port: 47568,
    queueName: 'z1h-3z01x9',
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

  const containerRestartPolicy = ContainerRestartPolicy.ALWAYS;

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

  const containerGroupCreationRequest: ContainerGroupCreationRequest = {
    autostartPolicy: true,
    container: containerConfiguration,
    countryCodes: [countryCode],
    displayName: 'KMg0KyVwpb',
    livenessProbe: containerGroupLivenessProbe,
    name: 'name',
    networking: createContainerGroupNetworking,
    queueAutoscaler: queueBasedAutoscalerConfiguration,
    queueConnection: containerGroupQueueConnection,
    readinessProbe: containerGroupReadinessProbe,
    replicas: 77,
    restartPolicy: containerRestartPolicy,
    scalingActions: [containerGroupScalingAction],
    scheduledScalingEnabled: true,
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
