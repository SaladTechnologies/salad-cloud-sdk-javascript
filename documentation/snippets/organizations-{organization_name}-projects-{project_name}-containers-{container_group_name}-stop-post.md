```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'tytntnk7-le269faihpgelqal6jc7327027puoxjag6lmdgb0c3qeelc',
    's1m84-o8x59',
    't96e3mcxix0izfrbhlu3evx',
  );

  console.log(data);
})();
```
