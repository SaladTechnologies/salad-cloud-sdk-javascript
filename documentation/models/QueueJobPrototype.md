# QueueJobPrototype

Represents a request to create a queue job

**Properties**

| Name     | Type   | Required | Description                                |
| :------- | :----- | :------- | :----------------------------------------- |
| input    | any    | ✅       | The job input. May be any valid JSON.      |
| metadata | any    | ❌       | Additional metadata for the job            |
| webhook  | string | ❌       | The webhook to call when the job completes |
