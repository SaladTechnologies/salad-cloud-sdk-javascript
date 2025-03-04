```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'if21ex5ozb1-4j-you0d7uftlpfgcaqa-2oc58y844m0nepqhlkk',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
