```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroupInstances(
    'x9apf4t0-uai3sdl150pq-zx5u-9-j',
    'bz4mp1vscg2wjxeuemfxcv-ue7tm-bp-8n1hvh8fnv7mx285iuup332rpaf',
    'shaiuchf2q8kkg3dsgwkty0ap7uq2b1ex4akekgljza8i9375vs22d352n',
  );

  console.log(data);
})();
```
