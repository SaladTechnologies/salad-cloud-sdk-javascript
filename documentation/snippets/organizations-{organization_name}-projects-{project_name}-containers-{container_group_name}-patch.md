```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  CountryCode,
  QueueAutoscaler,
  SaladCloudSdk,
  UpdateContainer,
  UpdateContainerGroup,
  UpdateContainerGroupNetworking,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const resources: Resources = {
    cpu: 3,
    memory: 14678,
    gpuClasses: ['gpu_classes'],
    storageAmount: 47984533464,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom3: LoggingAxiom3 = {
    host: 'aute veniam exercitation eiusmod et',
    apiToken: 'mollit',
    dataset: 'nisi in Lorem',
  };

  const datadogTags3: DatadogTags3 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog3: LoggingDatadog3 = {
    host: 'velit officia consequat',
    apiKey: 'sit in veniam',
    tags: [datadogTags3],
  };

  const loggingNewRelic3: LoggingNewRelic3 = {
    host: 'consequat sed',
    ingestionKey: 'tempor exercitation',
  };

  const loggingSplunk3: LoggingSplunk3 = {
    host: 'qui enim Ut nostrud deserunt',
    token: 'cillum sint ullamco veniam occaecat',
  };

  const loggingTcp3: LoggingTcp3 = {
    host: 'Ut amet',
    port: 30110,
  };

  const httpFormat3 = HttpFormat3.JSON;

  const httpHeaders4: HttpHeaders4 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression3 = HttpCompression3.NONE;

  const loggingHttp3: LoggingHttp3 = {
    host: 'eiusmod labore proident sit ut',
    port: 17490,
    user: 'user',
    password: 'password',
    path: 'path',
    format: httpFormat3,
    headers: [httpHeaders4],
    compression: httpCompression3,
  };

  const updateContainerLogging: UpdateContainerLogging = {
    axiom: loggingAxiom3,
    datadog: loggingDatadog3,
    newRelic: loggingNewRelic3,
    splunk: loggingSplunk3,
    tcp: loggingTcp3,
    http: loggingHttp3,
  };

  const registryAuthenticationBasic2: RegistryAuthenticationBasic2 = {
    username: 'username',
    password: 'password',
  };

  const registryAuthenticationGcpGcr2: RegistryAuthenticationGcpGcr2 = {
    serviceKey: 'service_key',
  };

  const registryAuthenticationAwsEcr2: RegistryAuthenticationAwsEcr2 = {
    accessKeyId: 'access_key_id',
    secretAccessKey: 'secret_access_key',
  };

  const registryAuthenticationDockerHub2: RegistryAuthenticationDockerHub2 = {
    username: 'username',
    personalAccessToken: 'personal_access_token',
  };

  const registryAuthenticationGcpGar2: RegistryAuthenticationGcpGar2 = {
    serviceKey: 'service_key',
  };

  const updateContainerRegistryAuthentication: UpdateContainerRegistryAuthentication = {
    basic: registryAuthenticationBasic2,
    gcpGcr: registryAuthenticationGcpGcr2,
    awsEcr: registryAuthenticationAwsEcr2,
    dockerHub: registryAuthenticationDockerHub2,
    gcpGar: registryAuthenticationGcpGar2,
  };

  const updateContainer: UpdateContainer = {
    image: 'labore',
    resources: resources,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: updateContainerLogging,
    registryAuthentication: updateContainerRegistryAuthentication,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 35022,
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

  const queueAutoscaler: QueueAutoscaler = {
    minReplicas: 96,
    maxReplicas: 190,
    desiredQueueLength: 42,
    pollingPeriod: 684,
    maxUpscalePerMinute: 95,
    maxDownscalePerMinute: 10,
  };

  const updateContainerGroup: UpdateContainerGroup = {
    displayName: '01n75',
    container: updateContainer,
    replicas: 232,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueAutoscaler: queueAutoscaler,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'oji7lyvxb3ca5hc',
    'olb1uzytbhhukf1u0-ahl0b9oqfjj',
    's7z7dvdopv2czgde1zrufxgiv5tp-j',
    input,
  );

  console.log(data);
})();
```
