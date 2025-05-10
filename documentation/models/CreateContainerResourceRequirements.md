# CreateContainerResourceRequirements

Specifies the resource requirements for creating a container.

**Properties**

| Name          | Type     | Required | Description                                                                                                                          |
| :------------ | :------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| cpu           | number   | ✅       | The number of CPU cores required by the container. Must be between 1 and 16.                                                         |
| memory        | number   | ✅       | The amount of memory (in MB) required by the container. Must be between 1024 MB and 61440 MB.                                        |
| gpuClasses    | string[] | ❌       | A list of GPU class UUIDs required by the container. Can be null if no GPU is required.                                              |
| storageAmount | number   | ❌       | The amount of storage (in bytes) required by the container. Must be between 1 GB (1073741824 bytes) and 250 GB (268435456000 bytes). |
