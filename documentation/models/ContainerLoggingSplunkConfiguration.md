# ContainerLoggingSplunkConfiguration

Configuration settings for forwarding container logs to a Splunk instance.

**Properties**

| Name  | Type   | Required | Description                                                                |
| :---- | :----- | :------- | :------------------------------------------------------------------------- |
| host  | string | ✅       | The URL of the Splunk HTTP Event Collector (HEC) endpoint.                 |
| token | string | ✅       | The authentication token required to send data to the Splunk HEC endpoint. |
