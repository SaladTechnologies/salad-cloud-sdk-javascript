# InferenceEndpointJobEvent

Represents an event for inference endpoint job

**Properties**

| Name   | Type                              | Required | Description |
| :----- | :-------------------------------- | :------- | :---------- |
| action | `InferenceEndpointJobEventAction` | ✅       |             |
| time   | `string`                          | ✅       |             |

# InferenceEndpointJobEventAction

**Properties**

| Name      | Type     | Required | Description |
| :-------- | :------- | :------- | :---------- |
| CREATED   | `string` | ✅       | "created"   |
| STARTED   | `string` | ✅       | "started"   |
| SUCCEEDED | `string` | ✅       | "succeeded" |
| CANCELLED | `string` | ✅       | "cancelled" |
| FAILED    | `string` | ✅       | "failed"    |
