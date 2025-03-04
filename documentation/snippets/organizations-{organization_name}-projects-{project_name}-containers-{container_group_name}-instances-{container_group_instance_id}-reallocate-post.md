```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mpje-v4-ccp8q-329szw31h4fee237cnffybnugpd7nbngs47jne2vq5j0d1',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
