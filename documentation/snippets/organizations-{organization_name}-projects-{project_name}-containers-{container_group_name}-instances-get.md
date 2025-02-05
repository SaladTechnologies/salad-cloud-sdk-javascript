```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroupInstances(
    'y7y892q4m5rifzmevenpg1u',
    'k8xgbal184sloim-c7555huym18dia9d-gb',
    'opn2qgtohqud110sou2jqi50g1umdxtc9fte8n',
  );

  console.log(data);
})();
```
