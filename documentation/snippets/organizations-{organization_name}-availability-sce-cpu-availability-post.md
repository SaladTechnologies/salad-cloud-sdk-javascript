```typescript
import { CountryCode, CpuAvailabilityPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const countryCode = CountryCode.AF;

  const cpuAvailabilityPrototype: CpuAvailabilityPrototype = {
    countryCodes: [countryCode],
    cpu: 4,
    memory: 8192,
    storageAmount: 1000000000,
  };

  const { data } = await saladCloudSdk.organizations.getCpuAvailability('acme-corp', cpuAvailabilityPrototype);

  console.log(data);
})();
```
