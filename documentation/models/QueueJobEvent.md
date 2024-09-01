# QueueJobEvent

Represents an event for queue job

**Properties**

| Name   | Type                | Required | Description |
| :----- | :------------------ | :------- | :---------- |
| action | QueueJobEventAction | ✅       |             |
| time   | string              | ✅       |             |

# QueueJobEventAction

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| CREATED   | string | ✅       | "created"   |
| STARTED   | string | ✅       | "started"   |
| SUCCEEDED | string | ✅       | "succeeded" |
| CANCELLED | string | ✅       | "cancelled" |
| FAILED    | string | ✅       | "failed"    |
