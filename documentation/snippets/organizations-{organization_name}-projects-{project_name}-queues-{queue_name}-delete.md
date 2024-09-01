```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueue(
    'voe5nrfsnef63doc193sgdihl8bgcxw201b7qbn',
    'xlauk07eld4q4sm9jdgi4bgl1flz0elvw26099ougowft9j-kjp6bahz155',
    'gsomvfqk5h4gbc8o3p4id29bdadte3m51it2hfzxfmyjtvnd0b',
  );

  console.log(data);
})();
```
