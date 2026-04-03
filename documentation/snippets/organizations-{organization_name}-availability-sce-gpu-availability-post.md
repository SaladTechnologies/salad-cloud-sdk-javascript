```typescript
import { CountryCode, GpuAvailabilityPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const countryCode = CountryCode.AF;

  const gpuAvailabilityPrototype: GpuAvailabilityPrototype = {
    countryCodes: [countryCode],
    cpu: 4,
    gpuClasses: ['gpu_classes'],
    memory: 8192,
    storageAmount: 1000000000,
  };

  const { data } = await saladCloudSdk.organizations.getGpuAvailability('acme-corp', gpuAvailabilityPrototype);

  console.log(data);
})();
```
