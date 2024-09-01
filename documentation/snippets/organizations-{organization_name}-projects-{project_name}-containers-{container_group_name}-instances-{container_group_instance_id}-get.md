```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'b0up7kyr7vabeivb96iwcvlvvm1n',
    'ngljb',
    'xtp82b9jzwqov1insghigvfq0donadhrrdqx-2redu46g7e',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
