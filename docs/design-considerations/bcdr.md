---
title: Business Continuity & DR
parent: Design Considerations
nav_order: 6
---

# Business Continuity, Disaster Recovery and Migration

Business Continuity and Disaster Recovery (BCDR) are essential components of a comprehensive cloud strategy, ensuring that applications and data remain accessible and recoverable during disruptions.

## Availability

### Compute

#### Availability Sets

{: .warning }
> Availability sets **will not be supported** in Azure Extended Zones. For compute resilience, use **Virtual Machine Scale Sets**.

#### Azure Virtual Machine Scale Sets

Virtual Machine Scale Sets allow for the creation and management of a group of load-balanced VMs. Key benefits:

- Streamlined creation and management of multiple VMs
- Enhanced high availability by distributing VMs across fault domains
- Automatic scaling in response to demand
- Capability to operate at large scale

### Network

#### Azure Load Balancer

Azure Load Balancer enhances application resilience through:

- **Fault Tolerance** — Traffic automatically redirects to healthy instances on failure
- **Scalability** — Add instances to handle increased traffic
- **Health Probes** — Monitors instance status and stops traffic to unhealthy instances
- **Low Latency and High Throughput** — Maintains performance in high-traffic scenarios

#### Application Gateway

{: .roadmap }
> Application Gateway is on the Azure Extended Zone roadmap.

### Storage

#### Locally Redundant Storage (LRS)

LRS is supported, offering data replication **three times within the Extended Zone**. While this does not safeguard against zone failures, it provides protection against hardware issues.

Additional data resiliency features:

- **Soft Delete** — Retains deleted blobs/containers for a specified period for recovery
- **Versioning** — Automatically maintains previous blob versions for rollback

---

## Recovery

### Data Protection — Azure Backup

Azure Backup is supported within Azure Extended Zones for protecting VMs, Azure Files, Azure Disks, and Azure Blobs.

{: .important }
> Recovery Services Vaults can **only be created in an Azure Region**, not within Extended Zones. Replicate backup data to another Azure region for robust protection.

| Scenario | Supported |
|:---------|:----------|
| Azure Extended Zone → Parent region | ✅ Yes |
| On-premises → Azure Extended Zone | ❌ No |

### Disaster Recovery — Azure Site Recovery (ASR)

ASR replicates workloads from a primary site to a secondary location. In the event of an outage, failover to the secondary location ensures continuous access.

| Scenario | Supported |
|:---------|:----------|
| Azure Extended Zone → Parent region | ✅ Yes |
| Azure Extended Zone → Non-parent region | ❌ No |
| Azure Extended Zone → Azure Extended Zone | ❌ No |
| On-premises → Azure Extended Zone | ❌ No |
| On-premises → Azure Extended Zone (Storage for Cache) → Region | ❌ No |

---

## Migration

{: .roadmap }
> **Azure Migrate** does not support migration of workloads to Azure Extended Zones.

If you are considering migrating workloads from on-premises to an Azure Extended Zone, **consult with your Microsoft account team** for tailored recommendations and guidance.
