```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'bsf7v',
    'ulau11f5g2zdmdpxhrfzhv7x3dhck87lv8-z-v',
    'efzk8ea2roe6yryt0-t1885dp762ut0igkfak4jbmum3tb50ov',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
