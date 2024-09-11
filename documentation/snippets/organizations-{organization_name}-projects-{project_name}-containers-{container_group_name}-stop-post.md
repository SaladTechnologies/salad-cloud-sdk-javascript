```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'akn0y-5uryou3umpp3jva-wgcda23a08440n-ew1-q',
    'im',
    'd9iq2qrkhhpqc1ii57w5xgt26suu70u1qechp',
  );

  console.log(data);
})();
```
