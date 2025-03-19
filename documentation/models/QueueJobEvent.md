# QueueJobEvent

Represents an event for queue job

**Properties**

| Name   | Type   | Required | Description                                    |
| :----- | :----- | :------- | :--------------------------------------------- |
| action | Action | ✅       | The action that was taken on the queue job     |
| time   | string | ✅       | The time the action was taken on the queue job |

# Action

The action that was taken on the queue job

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| CREATED   | string | ✅       | "created"   |
| STARTED   | string | ✅       | "started"   |
| SUCCEEDED | string | ✅       | "succeeded" |
| CANCELLED | string | ✅       | "cancelled" |
| FAILED    | string | ✅       | "failed"    |
