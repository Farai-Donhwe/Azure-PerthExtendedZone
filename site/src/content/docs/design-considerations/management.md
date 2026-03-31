---
title: Management
sidebar:
  order: 2
---

Azure offers a comprehensive suite of tools and services designed for effective cloud resource management. Key areas include:

- **Connecting to Virtual Machines** — Secure remote management and troubleshooting
- **Well-Architected Recommendations** — Best practices for reliable, secure, efficient systems
- **Governance** — Policies and controls for compliance
- **Monitoring** — Performance, health, and availability tracking
- **Update Management** — Patches and updates for security and performance

## Connecting to Virtual Machines

### Azure Bastion

:::caution
The Azure Extended Zones **do not support** the Azure Bastion Basic, Standard, and Premium SKUs.
:::

Azure Bastion is a fully managed PaaS offering that enables secure connectivity to virtual machines using private IP addresses. It facilitates secure RDP/SSH access directly over TLS from the Azure portal, as well as through native SSH or RDP clients.

**Recommended approach:** Deploy Azure Bastion to the **parent region** and leverage Azure Bastion's support for **global virtual network peering**. The Basic, Standard, and Premium SKUs support connecting to VMs in peered virtual networks; however, the Developer SKU does not.

For additional information, refer to [About Azure Bastion](https://learn.microsoft.com/en-us/azure/bastion/bastion-overview) on Microsoft Learn.

## Well-Architected Recommendations

### Azure Advisor

Azure Advisor is a **non-regional service** that provides recommendations applicable to resources deployed in an Azure Extended Zone.

## Azure Compute Gallery Images

Azure Compute Gallery images serve as a valuable resource for building virtual machines within Azure Extended Zones. However, this functionality is **not yet accessible through the Azure Portal (UX)**.

Gallery images hosted in a primary Azure region can be replicated to Azure Extended Zones using the CLI:

```bash
az sig image-version update \
  --resource-group MyResourceGroup \
  --gallery-name MyGallery \
  --gallery-image-definition PlaceholderImage \
  --gallery-image-version 0.0.1 \
  --target-edge-zones australiaeast=perth=1=standardssd_lrs
```

:::note
`premium_lrs` is also supported as a storage type for image versions in the Perth Azure Extended Zone.
:::

:::danger
If you receive an error about "Subscription is not enrolled for Edge Zone access", contact Microsoft Support with your subscription ID so access can be granted. Alternatively, create a managed identity with access to an Azure compute gallery via an API operation.
:::
