```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'sm3eup0iqixen33w3mp1ln15pix00azjaxgfnuon5rnc',
    'kyp6oi0404lk6h',
    'ucuerglkiabi4sbb23l56oq87j1v654hdchyg-8n5glaql3-539c',
  );

  console.log(data);
})();
```
