# InferenceEndpointJob

Represents a inference endpoint job

**Properties**

| Name                  | Type                                                        | Required | Description                                    |
| :-------------------- | :---------------------------------------------------------- | :------- | :--------------------------------------------- |
| createTime            | string                                                      | ✅       | The time the job was created.                  |
| events                | [InferenceEndpointJobEvent](InferenceEndpointJobEvent.md)[] | ✅       | The list of events.                            |
| id                    | string                                                      | ✅       | The inference endpoint job identifier.         |
| inferenceEndpointName | string                                                      | ✅       | The inference endpoint name.                   |
| input                 | any                                                         | ✅       | The job input. May be any valid JSON.          |
| organizationName      | string                                                      | ✅       | The organization name.                         |
| status                | [Status](Status.md)                                         | ✅       | The current status.                            |
| updateTime            | string                                                      | ✅       | The time the job was last updated.             |
| metadata              | any                                                         | ❌       | The job metadata. May be any valid JSON.       |
| output                | any                                                         | ❌       | The job output. May be any valid JSON.         |
| webhook               | string                                                      | ❌       | The webhook URL called when the job completes. |
| webhookUrl            | string                                                      | ❌       | The webhook URL called when the job completes. |
