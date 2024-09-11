# InferenceEndpointJob

Represents a inference endpoint job

**Properties**

| Name                  | Type                          | Required | Description                            |
| :-------------------- | :---------------------------- | :------- | :------------------------------------- |
| id                    | `string`                      | ✅       |                                        |
| input                 | `any`                         | ✅       | The job input. May be any valid JSON.  |
| inferenceEndpointName | `string`                      | ✅       | The inference endpoint name            |
| status                | `InferenceEndpointJobStatus`  | ✅       |                                        |
| events                | `InferenceEndpointJobEvent[]` | ✅       |                                        |
| organizationName      | `string`                      | ✅       | The organization name                  |
| createTime            | `string`                      | ✅       |                                        |
| updateTime            | `string`                      | ✅       |                                        |
| metadata              | `any`                         | ❌       |                                        |
| webhook               | `string`                      | ❌       |                                        |
| output                | `any`                         | ❌       | The job output. May be any valid JSON. |

# InferenceEndpointJobStatus

**Properties**

| Name      | Type     | Required | Description |
| :-------- | :------- | :------- | :---------- |
| PENDING   | `string` | ✅       | "pending"   |
| RUNNING   | `string` | ✅       | "running"   |
| SUCCEEDED | `string` | ✅       | "succeeded" |
| CANCELLED | `string` | ✅       | "cancelled" |
| FAILED    | `string` | ✅       | "failed"    |
