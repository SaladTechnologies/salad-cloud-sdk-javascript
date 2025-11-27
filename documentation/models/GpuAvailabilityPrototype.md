# GpuAvailabilityPrototype

**Properties**

| Name          | Type                            | Required | Description                                               |
| :------------ | :------------------------------ | :------- | :-------------------------------------------------------- |
| gpuClasses    | string[]                        | ✅       | A list of available GPU class names                       |
| cpu           | number                          | ❌       | The number of available CPU cores                         |
| memory        | number                          | ❌       | The amount of available memory in MB                      |
| storageAmount | number                          | ❌       | The amount of available storage in bytes                  |
| countryCodes  | [CountryCode](CountryCode.md)[] | ❌       | A list of country codes where the resources are available |
