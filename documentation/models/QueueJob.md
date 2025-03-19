# QueueJob

Represents a queue job

**Properties**

| Name       | Type            | Required | Description                                      |
| :--------- | :-------------- | :------- | :----------------------------------------------- |
| id         | string          | ✅       | The job identifier                               |
| input      | any             | ✅       | The job input. May be any valid JSON.            |
| status     | QueueJobStatus  | ✅       | The job status                                   |
| events     | QueueJobEvent[] | ✅       | The job events                                   |
| createTime | string          | ✅       | The job creation time                            |
| updateTime | string          | ✅       | The job update time                              |
| metadata   | any             | ❌       | Additional metadata for the job                  |
| webhook    | string          | ❌       | The webhook URL to notify when the job completes |
| output     | any             | ❌       | The job output. May be any valid JSON.           |

# QueueJobStatus

The job status

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PENDING   | string | ✅       | "pending"   |
| RUNNING   | string | ✅       | "running"   |
| SUCCEEDED | string | ✅       | "succeeded" |
| CANCELLED | string | ✅       | "cancelled" |
| FAILED    | string | ✅       | "failed"    |
