```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.systemLogs.getSystemLogs(
    'fmcz5cnnkfiyt3k5ke3wy-5gl1809s8sotrp88klv3q4l4ni7uszkt0ht2',
    'jpum7p7dqeb0o9xu',
    'nlzoet3pfl3xit2pe40saanre16q8ug0u13rmnwb7eyumc1',
  );

  console.log(data);
})();
```
