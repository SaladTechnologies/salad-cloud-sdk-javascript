```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'ph8bjget2tyh4q9ni9h81tilnlnf4',
    'fr38a8vv5h4lnt5rb91fzs3spaw4grzs1ulr8elj96ymws1tye1i8h22kawxrq',
    'xstvu-n3wkzvsf8j09617fgmalxezwfpc5tx4o5964ih0i5w146fxc3k0i',
  );

  console.log(data);
})();
```
