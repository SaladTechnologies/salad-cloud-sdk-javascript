```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'e1831z2sf2i9bk6n01-l4p5c2u',
    'h86701y3xcmm3m3c1oqx1cbz9zmgggid8ddvtm74etd0oedpgesup',
    'zpw3lnw7ag07-nla57',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
