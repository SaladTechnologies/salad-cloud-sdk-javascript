```typescript
import {
  ContainerGroupLivenessProbe,
  ContainerGroupReadinessProbe,
  ContainerGroupStartupProbe,
  CountryCode,
  QueueAutoscaler,
  SaladCloudSdk,
  UpdateContainer,
  UpdateContainerGroup1,
  UpdateContainerGroupNetworking,
} from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const resources: Resources = {
    cpu: 15,
    memory: 18239,
    gpuClasses: ['gpu_classes'],
    storageAmount: 7225564458,
  };

  const containerGroupPriority = ContainerGroupPriority.HIGH;

  const loggingAxiom3: LoggingAxiom3 = {
    host: 'host',
    apiToken: 'api_token',
    dataset: 'dataset',
  };

  const datadogTags3: DatadogTags3 = {
    name: 'name',
    value: 'value',
  };

  const loggingDatadog3: LoggingDatadog3 = {
    host: 'host',
    apiKey: 'api_key',
    tags: [datadogTags3],
  };

  const loggingNewRelic3: LoggingNewRelic3 = {
    host: 'host',
    ingestionKey: 'ingestion_key',
  };

  const loggingSplunk3: LoggingSplunk3 = {
    host: 'host',
    token: 'token',
  };

  const loggingTcp3: LoggingTcp3 = {
    host: 'host',
    port: 33781,
  };

  const httpFormat3 = HttpFormat3.JSON;

  const httpHeaders4: HttpHeaders4 = {
    name: 'name',
    value: 'value',
  };

  const httpCompression3 = HttpCompression3.NONE;

  const loggingHttp3: LoggingHttp3 = {
    host: 'host',
    port: 51761,
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
    image: 'image',
    resources: resources,
    command: ['command'],
    priority: containerGroupPriority,
    environmentVariables: [],
    logging: updateContainerLogging,
    registryAuthentication: updateContainerRegistryAuthentication,
    imageCaching: true,
  };

  const countryCode = CountryCode.AF;

  const updateContainerGroupNetworking: UpdateContainerGroupNetworking = {
    port: 52138,
  };

  const containerGroupProbeTcp: ContainerGroupProbeTcp = {
    port: 46052,
  };

  const containerProbeHttpScheme = ContainerProbeHttpScheme.HTTP;

  const containerGroupProbeHttpHeaders2: ContainerGroupProbeHttpHeaders2 = {
    name: 'name',
    value: 'value',
  };

  const containerGroupProbeHttp: ContainerGroupProbeHttp = {
    path: 'path',
    port: 8979,
    scheme: containerProbeHttpScheme,
    headers: [containerGroupProbeHttpHeaders2],
  };

  const containerGroupProbeGrpc: ContainerGroupProbeGrpc = {
    service: 'service',
    port: 38888,
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
    initialDelaySeconds: 8,
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
    initialDelaySeconds: 1,
    periodSeconds: 3,
    timeoutSeconds: 10,
    successThreshold: 2,
    failureThreshold: 1200,
  };

  const queueAutoscaler: QueueAutoscaler = {
    minReplicas: 4,
    maxReplicas: 188,
    desiredQueueLength: 55,
    pollingPeriod: 1254,
    maxUpscalePerMinute: 49,
    maxDownscalePerMinute: 43,
  };

  const updateContainerGroup1: UpdateContainerGroup1 = {
    displayName: 'EN-BH,M',
    container: updateContainer,
    replicas: 395,
    countryCodes: [countryCode],
    networking: updateContainerGroupNetworking,
    livenessProbe: containerGroupLivenessProbe,
    readinessProbe: containerGroupReadinessProbe,
    startupProbe: containerGroupStartupProbe,
    queueAutoscaler: queueAutoscaler,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroup(
    'acme-corp',
    'dev-env',
    'ajab1nydcnlz73jmjvon',
    updateContainerGroup1,
  );

  console.log(data);
})();
```
