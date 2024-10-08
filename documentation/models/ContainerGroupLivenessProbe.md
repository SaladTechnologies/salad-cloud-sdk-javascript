# ContainerGroupLivenessProbe

Represents the container group liveness probe

**Properties**

| Name                | Type                    | Required | Description |
| :------------------ | :---------------------- | :------- | :---------- |
| initialDelaySeconds | number                  | ✅       |             |
| periodSeconds       | number                  | ✅       |             |
| timeoutSeconds      | number                  | ✅       |             |
| successThreshold    | number                  | ✅       |             |
| failureThreshold    | number                  | ✅       |             |
| tcp                 | ContainerGroupProbeTcp  | ❌       |             |
| http                | ContainerGroupProbeHttp | ❌       |             |
| grpc                | ContainerGroupProbeGrpc | ❌       |             |
| exec                | ContainerGroupProbeExec | ❌       |             |
