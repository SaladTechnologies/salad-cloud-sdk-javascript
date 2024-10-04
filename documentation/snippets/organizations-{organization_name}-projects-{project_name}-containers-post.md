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
    memory: 35273,
    gpuClasses: ['gpu_classes'],
    storageAmount: 32391110488,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom2: LoggingAxiom2 = {
    host: 'irure ut eiusmod velit incididunt',
    apiToken: 'deserunt aute cillum dolor occaecat',
    dataset: 'exercitation sit',
  };

  const datadogTags2: DatadogTags2 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog2: LoggingDatadog2 = {
    host: 'sunt consequat irure fugiat',
    apiKey: 'magna',
    tags: [datadogTags2],
  };

  const loggingNewRelic2: LoggingNewRelic2 = {
    host: 'quis aute in id proident',
    ingestionKey: 'aliqua enim pariatur',
  };

  const loggingSplunk2: LoggingSplunk2 = {
    host: 'ad',
    token: 'irure velit labore nostrud elit',
  };

  const loggingTcp2: LoggingTcp2 = {
    host: 'fugiat do',
    port: 1272,
  };

  const httpFormat2 = HttpFormat2.JSON;

  const httpHeaders3: HttpHeaders3 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression2 = HttpCompression2.NONE;

  const loggingHttp2: LoggingHttp2 = {
    host: 'cillum',
    port: 21241,
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
    image: 'reprehenderit',
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

  const createContainerGroupNetworkingLoadBalancer = CreateContainerGroupNetworkingLoadBalancer.ROUNDROBIN;

  const createContainerGroupNetworking: CreateContainerGroupNetworking = {
    protocol: containerNetworkingProtocol,
    port: 43901,
    auth: true,
    loadBalancer: createContainerGroupNetworkingLoadBalancer,
    singleConnectionLimit: true,
    clientRequestTimeout: 100000,
    serverResponseTimeout: 100000,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 61900,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 58759,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 32748,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 6,
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
    initialDelaySeconds: 4,
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
    initialDelaySeconds: 10,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'pariatur Ut aliqua irure',
    port: 34903,
    queueName: 'nz26lyemw7nednorlqjlsihb3',
  };

  const queueAutoscaler: QueueAutoscaler = {
    minReplicas: 96,
    maxReplicas: 190,
    desiredQueueLength: 42,
    pollingPeriod: 684,
    maxUpscalePerMinute: 95,
    maxDownscalePerMinute: 10,
  };

  const createContainerGroup: CreateContainerGroup = {
    name: 'xvih',
    displayName: 'INce5LCTy',
    container: createContainer,
    autostartPolicy: true,
    restartPolicy: containerRestartPolicy,
    replicas: 12,
    countryCodes: [countryCode],
    networking: createContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueConnection: containerGroupQueueConnection,
    queueAutoscaler: queueAutoscaler,
  };

  const { data } = await saladCloudSdk.containerGroups.createContainerGroup(
    'v50imwzgi4em4q035',
    'm6yw3-xm60cb7tiev8rketqiiwjepibzf2ust1cvjx8oua8mepeueo5-1',
    input,
  );

  console.log(data);
})();
```
