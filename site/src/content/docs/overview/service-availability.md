---
title: Service Availability
sidebar:
  order: 2
---

Azure Extended Zones facilitate the deployment of key Azure services. The control plane operates in the primary region, while the data plane is deployed at the Extended Zone site.

## Available Azure Services

| Service Category | Available Services |
|:-----------------|:-------------------|
| **Compute** | Azure Kubernetes Service, Azure Virtual Desktop, Virtual Machine Scale Sets, Virtual Machines (general purpose: A, B, D, E, F series and GPU NVadsA10 v5 series) |
| **Networking** | Application Gateway\*², DDoS (Standard protection), ExpressRoute, Firewall\*¹, NAT Gateway\*², Private Link, Standard Load Balancer, Standard Public IP, Virtual Network, Virtual Network Peering, VPN Gateway\*² |
| **Storage** | Managed Disks, Premium Page Blobs, Premium Block Blobs, Premium Files, Data Lake Storage Gen2 (Hierarchical & Flat Namespace), Change Feed, Blob Features (SFTP, NFS) |
| **BCDR** | Azure Site Recovery, Azure Backup |
| **Arc-enabled Services** | Arc-enabled Data Services — PostgreSQL (Preview), Managed SQL (Preview), Arc-enabled Container Apps (Preview) |

\*¹ Available at GA
\*² Roadmap post GA

:::caution
If you plan to utilize the Extended Zone shortly after launch, evaluate the services and SKUs you intend to use to ensure their availability. Contact your Microsoft account team for guidance on timelines and alternatives.
:::

## Service Gaps — Mitigation Options

If a service or SKU is not currently available in the Perth Extended Zone, consider the following alternatives:

- **Deploying the service in the parent region** (e.g., Australia East) and connecting via virtual network peering, accepting the associated latency.
- **Deferring workloads** — Deploy production services to the Perth Extended Zone when they become available.
- **Using an alternative service or SKU** that is currently available, with a plan to later migrate to your preferred option.
