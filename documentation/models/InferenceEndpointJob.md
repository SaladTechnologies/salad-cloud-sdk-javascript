# InferenceEndpointJob

Represents a inference endpoint job

**Properties**

| Name                  | Type                        | Required | Description                                    |
| :-------------------- | :-------------------------- | :------- | :--------------------------------------------- |
| id                    | string                      | ✅       | The unique identifier.                         |
| input                 | any                         | ✅       | The job input. May be any valid JSON.          |
| inferenceEndpointName | string                      | ✅       | The inference endpoint name.                   |
| status                | InferenceEndpointJobStatus  | ✅       | The current status.                            |
| events                | InferenceEndpointJobEvent[] | ✅       | The list of events.                            |
| organizationName      | string                      | ✅       | The organization name.                         |
| createTime            | string                      | ✅       | The time the job was created.                  |
| updateTime            | string                      | ✅       | The time the job was last updated.             |
| metadata              | any                         | ❌       | The job metadata. May be any valid JSON.       |
| webhook               | string                      | ❌       | The webhook URL called when the job completes. |
| output                | any                         | ❌       | The job output. May be any valid JSON.         |

# InferenceEndpointJobStatus

The current status.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PENDING   | string | ✅       | "pending"   |
| RUNNING   | string | ✅       | "running"   |
| SUCCEEDED | string | ✅       | "succeeded" |
| CANCELLED | string | ✅       | "cancelled" |
| FAILED    | string | ✅       | "failed"    |
