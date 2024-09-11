```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroup(
    'xpjrui87jps52s0iy',
    'hd-g9wqh8bjget2tyh4q9ni9h81tilnlnf5i-r38a8vv5h4lnt5rb91fzs2',
    'naw4grzs1ulr8elj96ymws1tye0',
  );

  console.log(data);
})();
```
