# InferenceEndpointJobPrototype

Represents a request to create a inference endpoint job

**Properties**

| Name       | Type   | Required | Description                                              |
| :--------- | :----- | :------- | :------------------------------------------------------- |
| input      | any    | ✅       | The job input. May be any valid JSON.                    |
| metadata   | any    | ❌       | The job metadata. May be any valid JSON.                 |
| webhook    | string | ❌       | The webhook URL to which the job results will be POSTed. |
| webhookUrl | string | ❌       | The webhook URL to which the job results will be POSTed. |
