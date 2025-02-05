```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupQueueConnection,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  ContainerRestartPolicy,
  CountryCode,
  CreateContainer,
  CreateContainerGroup,
  CreateContainerGroupNetworking,
  QueueAutoscaler,
  SaladCloudSdk,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const containerResourceRequirements: ContainerResourceRequirements = {
    cpu: 10,
    memory: 9057,
    gpuClasses: ['gpu_classes'],
    storageAmount: 34911830561,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom2: LoggingAxiom2 = {
    host: 'host',
    apiToken: 'api_token',
    dataset: 'dataset',
  };

  const datadogTags2: DatadogTags2 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog2: LoggingDatadog2 = {
    host: 'host',
    apiKey: 'api_key',
    tags: [datadogTags2],
  };

  const loggingNewRelic2: LoggingNewRelic2 = {
    host: 'host',
    ingestionKey: 'ingestion_key',
  };

  const loggingSplunk2: LoggingSplunk2 = {
    host: 'host',
    token: 'token',
  };

  const loggingTcp2: LoggingTcp2 = {
    host: 'host',
    port: 32723,
  };

  const httpFormat2 = HttpFormat2.JSON;

  const httpHeaders3: HttpHeaders3 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression2 = HttpCompression2.NONE;

  const loggingHttp2: LoggingHttp2 = {
    host: 'host',
    port: 51830,
    user: 'user',
    password: 'password',
    path: 'path',
    format: httpFormat2,
    headers: [httpHeaders3],
    compression: httpCompression2,
  };

  const createContainerLogging: CreateContainerLogging = {
    axiom: loggingAxiom2,
    datadog: loggingDatadog2,
    newRelic: loggingNewRelic2,
    splunk: loggingSplunk2,
    tcp: loggingTcp2,
    http: loggingHttp2,
  };

  const registryAuthenticationBasic1: RegistryAuthenticationBasic1 = {
    username: 'username',
    password: 'password',
  };

  const registryAuthenticationGcpGcr1: RegistryAuthenticationGcpGcr1 = {
    serviceKey: 'service_key',
  };

  const registryAuthenticationAwsEcr1: RegistryAuthenticationAwsEcr1 = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const registryAuthenticationDockerHub1: RegistryAuthenticationDockerHub1 = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const registryAuthenticationGcpGar1: RegistryAuthenticationGcpGar1 = {
    serviceKey: 'service_key',
  };

  const createContainerRegistryAuthentication: CreateContainerRegistryAuthentication = {
    basic: registryAuthenticationBasic1,
    gcpGcr: registryAuthenticationGcpGcr1,
    awsEcr: registryAuthenticationAwsEcr1,
    dockerHub: registryAuthenticationDockerHub1,
    gcpGar: registryAuthenticationGcpGar1,
  };

  const createContainer: CreateContainer = {
    image: 'image',
    resources: containerResourceRequirements,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: createContainerLogging,
    registryAuthentication: createContainerRegistryAuthentication,
  };

  const containerRestartPolicy = ContainerRestartPolicy.ALWAYS;

  const countryCode = CountryCode.AF;

  const containerNetworkingProtocol = ContainerNetworkingProtocol.HTTP;

  const createContainerGroupNetworkingLoadBalancer = CreateContainerGroupNetworkingLoadBalancer.ROUND_ROBIN;

  const createContainerGroupNetworking: CreateContainerGroupNetworking = {
    protocol: containerNetworkingProtocol,
    port: 4465,
    auth: true,
    loadBalancer: createContainerGroupNetworkingLoadBalancer,
    singleConnectionLimit: true,
    clientRequestTimeout: 100000,
    serverResponseTimeout: 100000,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 993,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 64175,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 8441,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 8,
    periodSeconds: 10,
    timeoutSeconds: 30,
    successThreshold: 1,
    failureThreshold: 3,
  };

  const containerGroupReadinessProbe: ContainerGroupReadinessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 10,
    periodSeconds: 1,
    timeoutSeconds: 1,
    successThreshold: 1,
    failureThreshold: 3,
  };

  const containerGroupStartupProbe: ContainerGroupStartupProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 7,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'path',
    port: 43154,
    queueName: 'oujbls0vsz6xilo12xl52y9c178cmdya6ykpby-hunb0b6s7s2mppfvzd5f4e',
  };

  const queueAutoscaler: QueueAutoscaler = {
    minReplicas: 41,
    maxReplicas: 135,
    desiredQueueLength: 51,
    pollingPeriod: 188,
    maxUpscalePerMinute: 30,
    maxDownscalePerMinute: 42,
  };

  const createContainerGroup: CreateContainerGroup = {
    name: 'name',
    displayName: 'hfR',
    container: createContainer,
    autostartPolicy: true,
    restartPolicy: containerRestartPolicy,
    replicas: 169,
    countryCodes: [countryCode],
    networking: createContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueConnection: containerGroupQueueConnection,
    queueAutoscaler: queueAutoscaler,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'o9lnd3c1w-4b',
    'c9jr',
    createContainerGroup,
  );

  console.log(data);
})();
```
