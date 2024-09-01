# WebhookSecretKeyService

A list of all methods in the `WebhookSecretKeyService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                    |
| :------------------------------------------------ | :----------------------------- |
| [getWebhookSecretKey](#getwebhooksecretkey)       | Gets the webhook secret key    |
| [updateWebhookSecretKey](#updatewebhooksecretkey) | Updates the webhook secret key |

## getWebhookSecretKey

Gets the webhook secret key

- HTTP Method: `GET`
- Endpoint: `/organizations/{organization_name}/webhook-secret-key`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |

**Return Type**

`WebhookSecretKey`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.getWebhookSecretKey(
    'hn9h7px3wro2wjja0yeu6kcgk0nggtveqmh45ilbsw4b2dcch55e1sj',
  );

  console.log(data);
})();
```

## updateWebhookSecretKey

Updates the webhook secret key

- HTTP Method: `POST`
- Endpoint: `/organizations/{organization_name}/webhook-secret-key`

**Parameters**

| Name             | Type   | Required | Description                  |
| :--------------- | :----- | :------- | :--------------------------- |
| organizationName | string | ✅       | The unique organization name |

**Return Type**

`WebhookSecretKey`

**Example Usage Code Snippet**

```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.updateWebhookSecretKey(
    'hn9h7px3wro2wjja0yeu6kcgk0nggtveqmh45ilbsw4b2dcch55e1sj',
  );

  console.log(data);
})();
```
