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
    memory: 17858,
    gpuClasses: ['gpu_classes'],
    storageAmount: 32391110488,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom2: LoggingAxiom2 = {
    host: 'Ut con',
    apiToken: 'nostrud irure dolore',
    dataset: 'mollit irure et Duis dolore',
  };

  const datadogTags2: DatadogTags2 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog2: LoggingDatadog2 = {
    host: 'pariatur',
    apiKey: 'non ut',
    tags: [datadogTags2],
  };

  const loggingNewRelic2: LoggingNewRelic2 = {
    host: 'cupidatat cillum est sit minim',
    ingestionKey: 'dolore laboris fugiat Duis',
  };

  const loggingSplunk2: LoggingSplunk2 = {
    host: 'aliquip velit culpa',
    token: 'ex',
  };

  const loggingTcp2: LoggingTcp2 = {
    host: 'aliqua',
    port: 17249,
  };

  const httpFormat2 = HttpFormat2.JSON;

  const httpHeaders3: HttpHeaders3 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression2 = HttpCompression2.NONE;

  const loggingHttp2: LoggingHttp2 = {
    host: 'magna',
    port: 62049,
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
    image: 'voluptate officia adipisicing',
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

  const createContainerGroupNetworking: CreateContainerGroupNetworking = {
    protocol: containerNetworkingProtocol,
    port: 9813,
    auth: true,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 23269,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 61900,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 58759,
  };

  const containerGroupProbeExec: ContainerGroupProbeExec = {
    command: ['command'],
  };

  const containerGroupLivenessProbe: ContainerGroupLivenessProbe = {
    tcp: containerGroupProbeTcp,
    http: containerGroupProbeHttp,
    grpc: containerGroupProbeGrpc,
    exec: containerGroupProbeExec,
    initialDelaySeconds: 5,
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
    initialDelaySeconds: 6,
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
    initialDelaySeconds: 4,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const containerGroupQueueConnection: ContainerGroupQueueConnection = {
    path: 'ullamco magna est nulla aliqua',
    port: 49952,
    queueName: 'nnz26lyemw7nednorlqjlsihb42092pn8d',
  };

  const queueAutoscaler: QueueAutoscaler = {
    minReplicas: 57,
    maxReplicas: 24,
    desiredQueueLength: 20,
    pollingPeriod: 1406,
    maxUpscalePerMinute: 35,
    maxDownscalePerMinute: 42,
  };

  const createContainerGroup: CreateContainerGroup = {
    name: 'qfojt-6ccoil4t55-ccoyybgw92dermtsdfn3t2xmag',
    displayName: 'O0hSlJUW',
    container: createContainer,
    autostartPolicy: true,
    restartPolicy: containerRestartPolicy,
    replicas: 114,
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
