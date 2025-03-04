# InferenceEndpoint

Represents an inference endpoint

**Properties**

| Name             | Type   | Required | Description                                                                 |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------- |
| id               | string | ✅       | The inference endpoint identifier.                                          |
| name             | string | ✅       | The inference endpoint name.                                                |
| organizationName | string | ✅       | The organization name.                                                      |
| displayName      | string | ✅       | The display-friendly name of the resource.                                  |
| description      | string | ✅       | The detailed description of the resource.                                   |
| readme           | string | ✅       | A markdown file containing a detailed description of the inference endpoint |
| priceDescription | string | ✅       | A description of the price                                                  |
| iconUrl          | string | ✅       | The URL of the icon image                                                   |
| inputSchema      | string | ✅       | The input schema                                                            |
| outputSchema     | string | ✅       | The output schema                                                           |
