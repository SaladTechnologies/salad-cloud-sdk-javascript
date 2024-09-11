```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'gq7z7dvdopv2czgde1zrufxgiv5tp-kncd4gfzda9ik-lw',
    'xd-if9b1yvozs9trd4v0bll7qwslfehyhnfadnjp2w52gwrmz',
    'ojjj5b9hbe2fr6f5t7j1htjaws1zx3r',
  );

  console.log(data);
})();
```
