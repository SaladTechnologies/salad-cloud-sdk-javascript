```typescript
import { CountryCode, GpuAvailabilityPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const countryCode = CountryCode.AF;

  const gpuAvailabilityPrototype: GpuAvailabilityPrototype = {
    gpuClasses: ['gpu_classes'],
    cpu: 4,
    memory: 8192,
    storageAmount: 1000000000,
    countryCodes: [countryCode],
  };

  const { data } = await saladCloudSdk.organizationData.getGpuAvailability('acme-corp', gpuAvailabilityPrototype);

  console.log(data);
})();
```
