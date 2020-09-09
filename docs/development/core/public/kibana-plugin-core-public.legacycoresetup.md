<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-public](./kibana-plugin-core-public.md) &gt; [LegacyCoreSetup](./kibana-plugin-core-public.legacycoresetup.md)

## LegacyCoreSetup interface

> Warning: This API is now obsolete.
> 
> 

Setup interface exposed to the legacy platform via the `ui/new_platform` module.

<b>Signature:</b>

```typescript
export interface LegacyCoreSetup extends CoreSetup<any, any> 
```

## Remarks

Some methods are not supported in the legacy platform and while present to make this type compatibile with [CoreSetup](./kibana-plugin-core-public.coresetup.md)<!-- -->, unsupported methods will throw exceptions when called.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [injectedMetadata](./kibana-plugin-core-public.legacycoresetup.injectedmetadata.md) | <code>InjectedMetadataSetup</code> |  |
