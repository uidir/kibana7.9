<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [OpsProcessMetrics](./kibana-plugin-core-server.opsprocessmetrics.md)

## OpsProcessMetrics interface

Process related metrics

<b>Signature:</b>

```typescript
export interface OpsProcessMetrics 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [event\_loop\_delay](./kibana-plugin-core-server.opsprocessmetrics.event_loop_delay.md) | <code>number</code> | node event loop delay |
|  [memory](./kibana-plugin-core-server.opsprocessmetrics.memory.md) | <code>{</code><br/><code>        heap: {</code><br/><code>            total_in_bytes: number;</code><br/><code>            used_in_bytes: number;</code><br/><code>            size_limit: number;</code><br/><code>        };</code><br/><code>        resident_set_size_in_bytes: number;</code><br/><code>    }</code> | process memory usage |
|  [pid](./kibana-plugin-core-server.opsprocessmetrics.pid.md) | <code>number</code> | pid of the kibana process |
|  [uptime\_in\_millis](./kibana-plugin-core-server.opsprocessmetrics.uptime_in_millis.md) | <code>number</code> | uptime of the kibana process |
