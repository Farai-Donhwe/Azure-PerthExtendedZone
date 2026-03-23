---
marp: true
theme: default
paginate: true
size: 16:9
header: "Perth Extended Zone — Customer Playbook v1.2"
footer: "Microsoft Confidential — May 2025"
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  section.lead h1 {
    font-size: 2.5em;
    color: #0078d4;
  }
  section.lead h2 {
    font-size: 1.4em;
    color: #505050;
  }
  table {
    font-size: 0.75em;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
---

<!-- _class: lead -->

# Perth Extended Zone
## Customer Playbook — SpecDev Overview

**Version 1.2 | May 2025**

---

# Agenda

1. What are Azure Extended Zones?
2. Perth Extended Zone Overview
3. Deployment Scenarios
4. Service Availability
5. Networking & Connectivity
6. Business Continuity & DR
7. Security & Compliance
8. Design Decisions & Recommendations
9. Next Steps

---

# What are Azure Extended Zones?

- **Small-footprint extensions** of an Azure region in metropolitan areas
- Support VMs, containers, storage, and select Azure services
- **Control plane** remains in the parent region; **data plane** at the Extended Zone site
- Integrated into the **Microsoft global network**

### Two Key Scenarios

| Scenario | Description |
|:---------|:------------|
| **Latency** | Run resources close to end users with minimal latency |
| **Data Residency** | Keep application data within a specific geography |

---

# Perth Extended Zone — Why It Matters

**Store and process data within Western Australia:**

- Fulfil **data residency** and compliance obligations
- Minimise **workload latency** for Perth-based users
- Achieve **sustainability goals**
- **Parent Region:** Australia East (Sydney)

### Compliance Standards
ISO 27001 | SOC 2 Type II | PCI DSS

---

# Deployment Scenarios

## Scenario 1: Standalone

Deploy workloads within the Perth Extended Zone **without connecting to a parent region landing zone**.

## Scenario 2: Extension

Extend an **existing landing zone** to include the Perth Extended Zone, connecting via vNet peering over the Microsoft backbone.

### Connectivity Options
- ExpressRoute (NextDC P1)
- Site-to-Site VPN (ISV solutions)
- Standard Load Balancer (public)

---

# Service Availability

| Category | Services |
|:---------|:---------|
| **Compute** | AKS, AVD, VMSS, VMs (A/B/D/E/F + GPU NVadsA10 v5) |
| **Networking** | ExpressRoute, DDoS, Private Link, Standard LB, vNet, vNet Peering |
| **Storage** | Managed Disks, Premium Blobs/Files, ADLS Gen2, SFTP, NFS |
| **BCDR** | Azure Site Recovery, Azure Backup |
| **Arc-enabled** | PostgreSQL, Managed SQL, Container Apps (Preview) |

### Roadmap (Post-GA)
Application Gateway, VPN Gateway, NAT Gateway, Azure Firewall

---

# SLA Summary

| Area | Service | Uptime SLA |
|:-----|:--------|:-----------|
| Compute | VM / VMSS | < 99.9% → 10% credit |
| Storage | Premium Files / Blobs | Per SLA page |
| Networking | Network Availability | Per SLA page |

> Extended Zones are **single-zone locations** — SLAs reflect this.

---

# ISV Solutions

| Vendor | Product | Status |
|:-------|:--------|:-------|
| Aviatrix | Secure Networking Platform | ✅ Completed |
| Fortinet | FortiGate NGFW | ✅ Completed |
| Checkpoint | CloudGuard Network Security | 🔄 Validating |
| Citrix | DaaS | 🔄 Validating |
| F5 Network | Big IP BYOL | 🔄 Validating |
| Palo Alto | VM-Series NGFW | 🔄 Validating |
| Red Hat | RHEL | 🔄 Validating |

---

# Networking — Topology Options

### Standalone
- Traditional Hub-and-Spoke or single vNet
- Virtual WAN Hub ❌ (not supported)

### Extension (back to parent region)
- Traditional network with **vNet peering** to parent region
- vNet peering to parent region **Virtual WAN** (hybrid)

---

# Networking — Connectivity

### ExpressRoute (Preferred)
- **Peering location:** NextDC P1 (single location in Perth)
- **Partners:** Equinix, Megaport, NextDC, ExpressRoute Direct
- **SKUs:** Standard (Oceania), Premium (Global) — *Local not supported*
- **SLA:** 99.95% uptime

### DR for ExpressRoute
1. Second circuit to parent region PoP (e.g., Sydney)
2. Site-to-site VPN as fallback

### Outbound Internet (no default route!)
NVA | Load Balancer SNAT | Public IP | *Firewall & NAT GW (roadmap)*

---

# Business Continuity & DR

### Availability
- ❌ Availability Sets — **not supported**
- ✅ Virtual Machine Scale Sets — use for compute resilience
- ✅ Azure Load Balancer — distribute traffic for fault tolerance
- ✅ LRS Storage — 3x replication within Extended Zone

### Recovery

| Scenario | Backup | Site Recovery |
|:---------|:-------|:--------------|
| Extended Zone → Parent Region | ✅ | ✅ |
| On-premises → Extended Zone | ❌ | ❌ |
| Extended Zone → Extended Zone | — | ❌ |

> Recovery Services Vaults must be created in an Azure Region.

---

# Security & Compliance

### Security Services Available
- **Network Security Groups** — Auto-created in parent region
- **Azure Private Link** — Private endpoint access to PaaS
- **DDoS Protection** — Plan in parent region, protects Extended Zone
- **Microsoft Defender for Cloud** — CSPM recommended
- **Microsoft Sentinel** — SIEM/SOAR recommended

### Data Residency
- Data processed within Western Australia
- Some limited scenarios may store data outside selected geography

### Compliance
**ISO 27001 | SOC 2 Type II | PCI DSS**

---

# Key Design Decisions

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

---

# Pricing Highlights

- Priced **separately** from Azure Regions at a **premium**
- **EA discounts** apply; **CSP agreements** supported
- **Reserved Instances / Savings Plans** — not currently supported
- **Network transfers** — categorised as Inter-Region
- **ExpressRoute** — Zone 2 pricing
- **vNet Peering** (Perth ↔ Australia East) — treated as same region

> Contact your Microsoft account team for detailed pricing.

---

<!-- _class: lead -->

# Next Steps

1. **Register subscriptions** for Extended Zone access
2. **Engage your Microsoft account team** for pricing and timelines
3. **Assess service requirements** against availability
4. **Plan network topology** — choose Standalone or Extension
5. **Design BCDR strategy** around supported ASR/Backup scenarios
6. **Review the full playbook** at your GitHub Pages site

---

<!-- _class: lead -->

# Thank You

**Perth Extended Zone Customer Playbook**
Version 1.2 — May 2025

[Full Playbook →](https://DonFarCreative.github.io/Perth-Extended-Zone/)

© Microsoft Corporation. All rights reserved.
