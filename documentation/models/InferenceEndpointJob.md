# InferenceEndpointJob

Represents a inference endpoint job

**Properties**

| Name                  | Type                                                        | Required | Description                                    |
| :-------------------- | :---------------------------------------------------------- | :------- | :--------------------------------------------- |
| id                    | string                                                      | ✅       | The inference endpoint job identifier.         |
| inferenceEndpointName | string                                                      | ✅       | The inference endpoint name.                   |
| organizationName      | string                                                      | ✅       | The organization name.                         |
| input                 | any                                                         | ✅       | The job input. May be any valid JSON.          |
| status                | [Status](Status.md)                                         | ✅       | The current status.                            |
| events                | [InferenceEndpointJobEvent](InferenceEndpointJobEvent.md)[] | ✅       | The list of events.                            |
| createTime            | string                                                      | ✅       | The time the job was created.                  |
| updateTime            | string                                                      | ✅       | The time the job was last updated.             |
| metadata              | any                                                         | ❌       | The job metadata. May be any valid JSON.       |
| webhook               | string                                                      | ❌       | The webhook URL called when the job completes. |
| webhookUrl            | string                                                      | ❌       | The webhook URL called when the job completes. |
| output                | any                                                         | ❌       | The job output. May be any valid JSON.         |
