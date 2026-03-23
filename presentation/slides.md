---
theme: seriph
background: https://images.unsplash.com/photo-1609017909889-d7b586137083?w=1920
title: Perth Extended Zone — Customer Playbook
info: |
  ## Perth Extended Zone Customer Playbook
  Technical guidance for deploying workloads to the Azure Perth Extended Zone.

  Version 1.2 — May 2025
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Perth Extended Zone

## Customer Playbook — SpecDev Overview

**Version 1.2 | May 2025**

<div class="abs-br m-6 flex gap-2">
  <a href="https://DonFarCreative.github.io/Perth-Extended-Zone/" target="_blank" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    📖 Full Playbook
  </a>
</div>

<!--
Welcome to the Perth Extended Zone SpecDev presentation.
This playbook provides technical guidance for deploying workloads to the Azure Perth Extended Zone.
-->

---
transition: fade-out
---

# Agenda

<v-clicks>

1. [🌏 What are Azure Extended Zones?](/3)
2. [📍 Perth Extended Zone Overview](/5)
3. [🏗️ Deployment Scenarios](/6)
4. [⚙️ Service Availability](/7)
5. [🌐 Networking & Connectivity](/10)
6. [🔄 Business Continuity & DR](/12)
7. [🔒 Security & Compliance](/13)
8. [📋 Design Decisions & Recommendations](/14)
9. [🚀 Next Steps](/16)

</v-clicks>

---
transition: slide-up
layout: two-cols
layoutClass: gap-16
---

# What are Azure Extended Zones?

<v-clicks>

- **Small-footprint extensions** of an Azure region
- Located in metropolitan areas & industry hubs
- Support VMs, containers, storage, select services
- **Control plane** → parent region
- **Data plane** → Extended Zone site
- Integrated into **Microsoft global network**

</v-clicks>

::right::

<div v-click class="mt-12">

## Two Key Scenarios

| Scenario | Description |
|:---------|:------------|
| **Latency** | Run resources close to end users |
| **Data Residency** | Keep data within a specific geography |

</div>

---
layout: center
class: text-center
---

# Perth Extended Zone

## Why It Matters

---
transition: slide-left
---

# Perth Extended Zone — Why It Matters

<div class="grid grid-cols-2 gap-8">

<div v-click>

### 🎯 Key Benefits

- Fulfil **data residency** and compliance obligations
- Minimise **workload latency** for Perth-based users
- Achieve **sustainability goals**

</div>

<div v-click>

### 📍 Key Facts

- **Parent Region:** Australia East (Sydney)
- **Single-zone location**
- **Compliance:** ISO 27001 · SOC 2 Type II · PCI DSS

</div>

</div>

<div v-click class="mt-8 p-4 bg-blue-500/10 rounded-lg">

> 💡 Store and process data **within Western Australia** — fulfilling data residency obligations while leveraging Azure's global platform.

</div>

---
transition: slide-up
---

# Deployment Scenarios

<div class="grid grid-cols-2 gap-12">

<div v-click>

## Scenario 1: Standalone

Deploy workloads **without connecting** to a parent region landing zone.

```mermaid {scale: 0.7}
graph TD
    A[On-Premises Perth] -->|ExpressRoute| B[Perth Extended Zone]
    C[Internet] -->|Standard LB| B
```

</div>

<div v-click>

## Scenario 2: Extension

**Extend an existing landing zone** to include the Perth Extended Zone.

```mermaid {scale: 0.7}
graph TD
    A[On-Premises] -->|ExpressRoute| B[Perth Extended Zone]
    B -->|vNet Peering| C[Australia East]
    D[Internet] -->|Standard LB| B
```

</div>

</div>

<div v-click class="mt-4 text-sm opacity-75">

**Connectivity Options:** ExpressRoute (NextDC P1) · Site-to-Site VPN (ISV) · Standard Load Balancer

</div>

---
transition: fade
---

# Service Availability

<div class="overflow-auto">

| Category | Services |
|:---------|:---------|
| **Compute** | AKS, AVD, VMSS, VMs (A/B/D/E/F + GPU NVadsA10 v5) |
| **Networking** | ExpressRoute, DDoS, Private Link, Standard LB, vNet, vNet Peering |
| **Storage** | Managed Disks, Premium Blobs/Files, ADLS Gen2, SFTP, NFS |
| **BCDR** | Azure Site Recovery, Azure Backup |
| **Arc-enabled** | PostgreSQL, Managed SQL, Container Apps (Preview) |

</div>

<v-click>

<div class="mt-6 p-3 bg-purple-500/10 rounded-lg">

### 🔮 Roadmap (Post-GA)
Application Gateway · VPN Gateway · NAT Gateway · Azure Firewall

</div>

</v-click>

---
transition: slide-left
---

# SLA Summary

<div v-click>

| Area | Service | Uptime SLA | Service Credit |
|:-----|:--------|:-----------|:---------------|
| **Compute** | VM / VMSS | < 99.9% | 10% |
| **Storage** | Premium Files / Blobs | Per SLA page | — |
| **Networking** | Network Availability | Per SLA page | — |

</div>

<v-click>

<div class="mt-8 p-4 bg-yellow-500/10 rounded-lg">

⚠️ Extended Zones are **single-zone locations** — SLAs reflect this constraint. For details, refer to the [Microsoft SLA page](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services).

</div>

</v-click>

---
transition: slide-up
---

# ISV Solutions

| Vendor | Product | Status |
|:-------|:--------|:-------|
| **Aviatrix** | Secure Networking Platform | <span class="text-green-400">✅ Completed</span> |
| **Fortinet** | FortiGate NGFW | <span class="text-green-400">✅ Completed</span> |
| **Checkpoint** | CloudGuard Network Security | <span class="text-yellow-400">🔄 Validating</span> |
| **Citrix** | DaaS | <span class="text-yellow-400">🔄 Validating</span> |
| **F5 Network** | Big IP BYOL | <span class="text-yellow-400">🔄 Validating</span> |
| **Palo Alto** | VM-Series NGFW | <span class="text-yellow-400">🔄 Validating</span> |
| **Red Hat** | RHEL | <span class="text-yellow-400">🔄 Validating</span> |

---
transition: slide-left
layout: two-cols
layoutClass: gap-16
---

# Networking — Topology

<v-clicks>

### Standalone
- Traditional Hub-and-Spoke ✅
- Single vNet ✅
- Virtual WAN Hub ❌

### Extension
- Traditional + **vNet peering** to parent ✅
- vNet peering to parent **Virtual WAN** ✅

</v-clicks>

::right::

<div v-click>

### ExpressRoute (Preferred)

| Detail | Value |
|:-------|:------|
| **Peering** | NextDC P1 |
| **Partners** | Equinix, Megaport, NextDC |
| **Standard** | Oceania region |
| **Premium** | Global connectivity |
| **Local** | ❌ Not supported |
| **SLA** | 99.95% uptime |

</div>

---
transition: fade
---

# Outbound & Inbound Internet

<div class="grid grid-cols-2 gap-8">

<div>

### ⬆️ Outbound Internet

<v-clicks>

- ❌ **No default outbound route**
- ✅ Network Virtual Appliance
- ✅ Load Balancer (SNAT)
- ✅ Instance-Level Public IP
- 🔮 Azure Firewall *(roadmap)*
- 🔮 NAT Gateway *(roadmap)*

</v-clicks>

</div>

<div>

### ⬇️ Inbound Internet

<v-clicks>

- ✅ Standard Load Balancer *(Standard SKU, Regional tier only)*
- ✅ Network Virtual Appliance
- 🔮 Application Gateway *(roadmap)*

</v-clicks>

</div>

</div>

<div v-click class="mt-6 p-3 bg-red-500/10 rounded-lg text-sm">

⚠️ The default outbound route is being phased out across all Azure regions by September 2025. Azure Extended Zones launch without it.

</div>

---
transition: slide-up
---

# Business Continuity & DR

<div class="grid grid-cols-2 gap-8">

<div v-click>

### Availability

- ❌ Availability Sets — **not supported**
- ✅ **VMSS** — compute resilience
- ✅ **Load Balancer** — fault tolerance
- ✅ **LRS** — 3x replication within zone

</div>

<div v-click>

### Recovery

| Scenario | Backup | ASR |
|:---------|:-------|:----|
| EZ → Parent Region | ✅ | ✅ |
| On-prem → EZ | ❌ | ❌ |
| EZ → EZ | — | ❌ |

</div>

</div>

<v-click>

<div class="mt-6 p-3 bg-yellow-500/10 rounded-lg">

⚠️ Recovery Services Vaults must be created in an **Azure Region**, not within Extended Zones. Azure Migrate is **not supported** for Extended Zones.

</div>

</v-click>

---
transition: slide-left
---

# Security & Compliance

<div class="grid grid-cols-2 gap-8">

<div v-click>

### 🛡️ Security Services

- **NSGs** — auto-created in parent region
- **Private Link** — private endpoint access
- **DDoS Protection** — plan in parent region
- **Defender for Cloud** — CSPM recommended
- **Microsoft Sentinel** — SIEM/SOAR

</div>

<div v-click>

### 📋 Compliance

| Standard | Status |
|:---------|:-------|
| ISO 27001 | ✅ |
| SOC 2 Type II | ✅ |
| PCI DSS | ✅ |

### 📍 Data Residency
Data processed within **Western Australia**

</div>

</div>

<div v-click class="mt-4 text-sm opacity-75">

> Some limited scenarios may store data outside your selected geography. Consult the Azure Data Residency documentation.

</div>

---
transition: fade
---

# Key Design Decisions

<div class="overflow-auto text-sm">

| Decision | Recommendation |
|:---------|:---------------|
| **Subscription** | Dedicate specific subscriptions for Extended Zone |
| **Resource Groups** | Create in parent region with clear naming convention |
| **Bastion** | Deploy in parent region, use global vNet peering |
| **Logs** | Log Analytics workspace in parent region |
| **Action Groups** | Create global action groups |
| **Quotas** | Managed via parent region |
| **Boot Diagnostics** | Managed only (no custom storage accounts) |
| **DNS** | Customer-managed DNS server (Private DNS Resolver not supported) |

</div>

---
transition: slide-up
---

# Pricing Highlights

<v-clicks>

- 💰 Priced **separately** from Azure Regions at a **premium**
- ✅ **EA discounts** apply · **CSP agreements** supported
- ❌ **Reserved Instances / Savings Plans** — not currently supported
- 🔄 **Network transfers** — categorised as Inter-Region
- 🌐 **ExpressRoute** — Zone 2 pricing
- 🤝 **vNet Peering** (Perth ↔ Australia East) — treated as **same region**

</v-clicks>

<div v-click class="mt-8 p-4 bg-blue-500/10 rounded-lg">

> 📞 Contact your Microsoft account team for detailed pricing.

</div>

---
layout: center
class: text-center
transition: fade
---

# Next Steps

<v-clicks>

1. 📝 **Register subscriptions** for Extended Zone access
2. 📞 **Engage your Microsoft account team** for pricing and timelines
3. ⚙️ **Assess service requirements** against availability
4. 🌐 **Plan network topology** — Standalone or Extension
5. 🔄 **Design BCDR strategy** around supported scenarios
6. 📖 **Review the full playbook** on GitHub Pages

</v-clicks>

---
layout: center
class: text-center
---

# Thank You

**Perth Extended Zone Customer Playbook**

Version 1.2 — May 2025

<div class="mt-8">

[📖 Full Playbook](https://DonFarCreative.github.io/Perth-Extended-Zone/) · [💻 GitHub Repo](https://github.com/DonFarCreative/Perth-Extended-Zone)

</div>

<div class="mt-12 text-sm opacity-50">

© Microsoft Corporation. All rights reserved.

</div>
