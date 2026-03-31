---
title: Observability
sidebar:
  order: 4
---

## Alerts, Actions and Notifications

### Action Groups

:::caution
Action groups **cannot be created** in an Azure Extended Zone. Create a **global action group** for monitoring resources within such zones.
:::

Global action groups can process client requests from any region. If a specific region's service is unavailable, requests are automatically routed to and processed by services in other regions.

## Service Health

Azure Service Health comprises three integral services:

| Service | Description |
|:--------|:------------|
| **Azure Status** | Global view of the health of all Azure services across all regions |
| **Service Health** | Personalised view of the health of your Azure services and regions — optimal for outage and maintenance communications |
| **Resource Health** | Health information about individual cloud resources (e.g., specific VM instances) |

Service Health is **supported** for resources deployed to an Azure Extended Zone.

## Logs

:::caution
Log Analytics workspaces **cannot be established** within an Azure Extended Zone. Create them in a parent region of your choice.
:::

Be aware that additional network costs may be incurred depending on the region from which telemetry originates. Refer to the [Azure Bandwidth pricing](https://azure.microsoft.com/en-au/pricing/details/bandwidth/) documentation.

## Metrics

Azure Monitor Metrics aggregates numerical data from monitored resources into a time-series database. Metrics are collected at regular intervals and provide critical insights into system performance.

Azure Metrics is **compatible** with resources deployed within an Azure Extended Zone.

## Insights & Workbooks

Both Insights and Workbooks can be utilized with resources deployed within an Azure Extended Zone.

## Application Performance Monitoring

### Application Insights

Application Insights can be utilized with resources deployed in an Azure Extended Zone. For workspace-based Application Insights resources, refer to the Logs guidance above.

## Network Watcher

An Azure Network Watcher resource is **automatically created** when you create or update a virtual network in Azure. It provides:

- **Monitoring** — Visualise network topology and understand resource relationships
- **Diagnostics** — IP flow verification, NSG diagnostics, next hop analysis, connection troubleshooting, packet capture, VPN troubleshooting
- **Traffic Analysis** — Flow logs and traffic analytics for performance insights
- **Connection Monitoring** — End-to-end monitoring for Azure and hybrid endpoints

When a virtual network is created in an Azure Extended Zone, the Network Watcher resource is instantiated in the **parent region**.

### Connection Monitor

:::note
It is not possible to create a Connection Monitor resource in an Azure Extended Zone. However, you can select a parent region for the Connection Monitor.
:::

### Network Security Group Flow Logs

When creating a flow log for an NSG deployed in an Azure Extended Zone, the region will be locked to the **parent region**. The storage account used must also reside in the parent region.

**Key considerations:**
- Use a storage account in the same region as your NSG to minimise latency
- Storing flow logs in a different region may incur additional data transfer costs
- Ensure configuration adheres to any data residency requirements

:::danger
NSG flow logs in Azure Network Watcher will be **retired on 30 September 2027**. Migrate to **virtual network flow logs**, which offer enhanced capabilities.
:::

### Virtual Network Flow Logs

The region will be locked to the parent region when creating a virtual network flow log for a vNet deployed in an Azure Extended Zone. The storage account must also reside in the parent region.

Same considerations apply as for NSG flow logs: latency, data transfer costs, and compliance.

## Virtual Machine Boot Diagnostics

Boot diagnostics is supported for VMs deployed in an Azure Extended Zone. The portal experience will automatically create a storage account in the parent region.

:::note
Users cannot opt to use a custom storage account. **Managed boot diagnostics** are exclusively supported on Azure Extended Zones.
:::

## Quotas

Quotas for Azure Extended Zones are managed as part of the **parent region**. Monitoring or alerting on quota consumption specific to Azure Extended Zones is not supported.

To request a quota increase, follow the steps in the [Request a quota increase in the Azure portal](https://learn.microsoft.com/en-us/azure/quotas/quickstart-increase-quota-portal) document.

## Update Management

### Automatic VM Guest Patching

Automatic VM guest patching is **supported** for virtual machines deployed within an Azure Extended Zone.

### Azure Update Manager

Azure Update Manager provides a unified view for monitoring Windows and Linux update compliance with real-time or scheduled updates.

Integrating Azure Update Manager is **advisable** for virtual machines deployed in Azure Extended Zones.
