```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'mk0yct7b8bo1g8tvl9',
    'ax4qyju9jcnr3fw8e9al8o-4oreg5ocaz2jbu5pfmpygxffsf4bh4e6',
    'dzh9lv6afpamv8cx0x6',
  );

  console.log(data);
})();
```
