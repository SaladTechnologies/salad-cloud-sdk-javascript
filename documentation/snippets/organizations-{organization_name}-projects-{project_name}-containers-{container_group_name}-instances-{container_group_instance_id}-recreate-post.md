```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'm-gfjsmt',
    'qljdg4',
    'nzzyoj4pl2kuh4c67m3ae7qwlwipkdye-ad90-cq0up7kyr6',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
