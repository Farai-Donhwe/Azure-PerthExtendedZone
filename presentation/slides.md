---
theme: ./theme
title: Perth Extended Zone — Customer Playbook
info: |
  ## Perth Extended Zone Customer Playbook
  Technical guidance for deploying workloads to the Azure Perth Extended Zone.
  Version 1.2 — May 2025
drawings:
  persist: false
transition: slide-left
mdc: true
---

<style>
/* Per-presentation overrides if needed */
</style>

---
layout: cover
---

# Perth Extended Zone

## Customer Playbook

<div class="azure-badge mt-4">Version 1.2 — May 2025</div>

<p class="mt-6" style="color: #6e6e6e; font-size: 0.9em;">
Accelerate cloud adoption in Western Australia with low-latency, data-resident Azure services.
</p>

<!--
Welcome to the Perth Extended Zone SpecDev presentation.
This playbook provides technical guidance for deploying workloads to the Azure Perth Extended Zone.
-->

---
transition: fade-out
---

# Agenda

<div class="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">

<div v-click class="feature-card">
<h4>🌏 <a href="/4">What are Azure Extended Zones?</a></h4>
<p>Small-footprint extensions of Azure regions</p>
</div>

<div v-click class="feature-card">
<h4>📍 <a href="/6">Perth Extended Zone Overview</a></h4>
<p>Why it matters for Western Australia</p>
</div>

<div v-click class="feature-card">
<h4>🏗️ <a href="/7">Deployment Scenarios</a></h4>
<p>Standalone and Extension patterns</p>
</div>

<div v-click class="feature-card">
<h4>⚙️ <a href="/8">Service Availability</a></h4>
<p>Available services, SLAs, and ISVs</p>
</div>

<div v-click class="feature-card">
<h4>🌐 <a href="/11">Networking & Connectivity</a></h4>
<p>Topologies, ExpressRoute, internet access</p>
</div>

<div v-click class="feature-card">
<h4>🔄 <a href="/13">Business Continuity & DR</a></h4>
<p>Availability, backup, and recovery</p>
</div>

<div v-click class="feature-card">
<h4>🔒 <a href="/14">Security & Compliance</a></h4>
<p>Security services and data residency</p>
</div>

<div v-click class="feature-card">
<h4>📋 <a href="/15">Design Decisions</a></h4>
<p>Key recommendations and pricing</p>
</div>

</div>

---
layout: section
---

# What are Azure Extended Zones?

## Small-footprint extensions of Azure — close to your users

---
layout: two-cols
transition: slide-up
---

# Azure Extended Zones

<v-clicks>

<div class="feature-card mb-3">
<h4>☁️ Small-Footprint Extensions</h4>
<p>Strategically located in metropolitan areas, industry hubs, or specific jurisdictions</p>
</div>

<div class="feature-card mb-3">
<h4>🏗️ Architecture</h4>
<p><strong>Control plane</strong> remains in parent region · <strong>Data plane</strong> deployed at Extended Zone site</p>
</div>

<div class="feature-card mb-3">
<h4>🌐 Global Network</h4>
<p>Integrated into Microsoft's global network for secure, reliable, high-bandwidth connectivity</p>
</div>

</v-clicks>

::right::

<div v-click class="mt-6">

### Two Key Scenarios

<div class="feature-card mb-3" style="border-left-color: #00b7c3;">
<h4>⚡ Latency</h4>
<p>Run resources close to end users with minimal latency</p>
</div>

<div class="feature-card" style="border-left-color: #8764b8;">
<h4>📍 Data Residency</h4>
<p>Keep application data within a specific geography for privacy, regulatory, and compliance reasons</p>
</div>

<div class="section-banner mt-4">
Supports VMs · Containers · Storage · Select Azure Services
</div>

</div>

---
layout: section
---

# Perth Extended Zone

## Why It Matters for Western Australia

---

# Perth Extended Zone — Why It Matters

<div class="grid grid-cols-2 gap-8 mt-2">

<div>

<div v-click class="feature-card mb-3">
<h4>🏛️ Data Residency</h4>
<p>Fulfil data residency and compliance obligations by storing and processing data <strong>within Western Australia</strong></p>
</div>

<div v-click class="feature-card mb-3">
<h4>⚡ Low Latency</h4>
<p>Minimise workload latency for <strong>Perth-based users</strong> and applications</p>
</div>

<div v-click class="feature-card mb-3">
<h4>🌱 Sustainability</h4>
<p>Achieve sustainability goals with local infrastructure</p>
</div>

</div>

<div>

<div v-click class="azure-card mt-2">

### 📍 Key Facts

| Detail | Value |
|:-------|:------|
| **Parent Region** | Australia East (Sydney) |
| **Zone Type** | Single-zone location |
| **ISO 27001** | <span class="status-complete">✅ Compliant</span> |
| **SOC 2 Type II** | <span class="status-complete">✅ Compliant</span> |
| **PCI DSS** | <span class="status-complete">✅ Compliant</span> |

</div>

</div>

</div>

---
transition: slide-up
---

# Deployment Scenarios

<div class="grid grid-cols-2 gap-8 mt-2">

<div v-click>

<div class="section-banner">Scenario 1: Standalone</div>

<div class="azure-card">

Deploy workloads **without connecting** to a parent region landing zone.

```mermaid {scale: 0.6, theme: 'neutral'}
graph TD
    A[🏢 On-Premises Perth] -->|ExpressRoute| B[☁️ Perth Extended Zone]
    C[🌐 Internet] -->|Standard LB| B
    style B fill:#deecf9,stroke:#0078d4,stroke-width:2px
    style A fill:#f5f5f5,stroke:#6e6e6e
    style C fill:#f5f5f5,stroke:#6e6e6e
```

</div>

</div>

<div v-click>

<div class="section-banner">Scenario 2: Extension</div>

<div class="azure-card">

**Extend an existing landing zone** via vNet peering over the Microsoft backbone.

```mermaid {scale: 0.6, theme: 'neutral'}
graph TD
    A[🏢 On-Premises] -->|ExpressRoute| B[☁️ Perth Extended Zone]
    B -->|vNet Peering| C[☁️ Australia East]
    D[🌐 Internet] -->|Standard LB| B
    style B fill:#deecf9,stroke:#0078d4,stroke-width:2px
    style C fill:#e8f4e8,stroke:#107c10,stroke-width:2px
    style A fill:#f5f5f5,stroke:#6e6e6e
    style D fill:#f5f5f5,stroke:#6e6e6e
```

</div>

</div>

</div>

---
transition: fade
---

# Service Availability

<div class="mt-2">

| Category | Available Services | Status |
|:---------|:-------------------|:-------|
| **Compute** | AKS, AVD, VMSS, VMs (A/B/D/E/F + GPU NVadsA10 v5) | <span class="status-complete">✅ GA</span> |
| **Networking** | ExpressRoute, DDoS, Private Link, Standard LB, vNet, vNet Peering | <span class="status-complete">✅ GA</span> |
| **Storage** | Managed Disks, Premium Blobs/Files, ADLS Gen2, SFTP, NFS | <span class="status-complete">✅ GA</span> |
| **BCDR** | Azure Site Recovery, Azure Backup | <span class="status-complete">✅ GA</span> |
| **Arc-enabled** | PostgreSQL, Managed SQL, Container Apps | <span class="status-progress">🔄 Preview</span> |

</div>

<v-click>

<div class="mt-4">
<div class="section-banner">🔮 Roadmap (Post-GA)</div>

<div class="process-flow mt-2">
<div class="process-step">
<h4>Application Gateway</h4>
</div>
<div class="process-step">
<h4>VPN Gateway</h4>
</div>
<div class="process-step">
<h4>NAT Gateway</h4>
</div>
<div class="process-step">
<h4>Azure Firewall</h4>
</div>
</div>
</div>

</v-click>

---
transition: slide-left
---

# SLA & ISV Solutions

<div class="grid grid-cols-2 gap-8 mt-2">

<div v-click>

### Service Level Agreements

<div class="azure-card">

| Area | Service | SLA |
|:-----|:--------|:----|
| **Compute** | VM / VMSS | 99.9% |
| **Storage** | Premium Files/Blobs | Per SLA |
| **Network** | Availability | Per SLA |

<p style="font-size: 0.75em; color: #6e6e6e; margin-top: 0.5em;">
⚠️ Single-zone location — SLAs reflect this.
</p>

</div>

</div>

<div v-click>

### ISV Validation

<div class="azure-card">

| Vendor | Status |
|:-------|:-------|
| **Aviatrix** | <span class="status-complete">✅ Complete</span> |
| **Fortinet** | <span class="status-complete">✅ Complete</span> |
| **Checkpoint** | <span class="status-progress">🔄 Validating</span> |
| **Citrix** | <span class="status-progress">🔄 Validating</span> |
| **F5 Network** | <span class="status-progress">🔄 Validating</span> |
| **Palo Alto** | <span class="status-progress">🔄 Validating</span> |
| **Red Hat** | <span class="status-progress">🔄 Validating</span> |

</div>

</div>

</div>

---
layout: section
---

# Networking & Connectivity

## Topologies, ExpressRoute, and Internet Access

---
layout: two-cols
transition: slide-left
---

# Network Topology

<v-clicks>

<div class="feature-card mb-3">
<h4>Standalone — Traditional</h4>
<p>Hub-and-Spoke or single vNet <span class="status-complete">✅</span></p>
</div>

<div class="feature-card mb-3">
<h4>Standalone — Virtual WAN</h4>
<p>vWAN Hub not supported <span class="status-no">❌</span></p>
</div>

<div class="feature-card mb-3">
<h4>Extension — Traditional</h4>
<p>vNet peering to parent region <span class="status-complete">✅</span></p>
</div>

<div class="feature-card mb-3">
<h4>Extension — Hybrid vWAN</h4>
<p>vNet peering to parent vWAN <span class="status-complete">✅</span></p>
</div>

</v-clicks>

::right::

<div v-click class="mt-2">

### ExpressRoute Details

<div class="azure-card">

| Detail | Value |
|:-------|:------|
| **Peering Location** | NextDC P1 |
| **Partners** | Equinix, Megaport, NextDC |
| **Direct** | ExpressRoute Direct |
| **Standard SKU** | Oceania region |
| **Premium SKU** | Global connectivity |
| **Local SKU** | <span class="status-no">❌ Not supported</span> |
| **SLA** | 99.95% uptime |

</div>

<div class="mt-3" style="font-size: 0.8em;">

> 💡 **DR tip:** Deploy a second circuit to parent region PoP (e.g., Sydney) or use site-to-site VPN as fallback.

</div>

</div>

---
transition: fade
---

# Internet Access

<div class="grid grid-cols-2 gap-8 mt-2">

<div>

### ⬆️ Outbound Options

<div v-click class="feature-card mb-2">
<h4>Network Virtual Appliance</h4>
<p>ISV NVAs (F5, Palo Alto, Cisco) <span class="status-complete">✅</span></p>
</div>

<div v-click class="feature-card mb-2">
<h4>Load Balancer (SNAT)</h4>
<p>Standard LB with public IP <span class="status-complete">✅</span></p>
</div>

<div v-click class="feature-card mb-2">
<h4>Instance-Level Public IP</h4>
<p>Direct VM internet access <span class="status-complete">✅</span></p>
</div>

<div v-click class="feature-card mb-2" style="border-left-color: #8764b8;">
<h4>Azure Firewall & NAT GW</h4>
<p>On the roadmap <span class="status-roadmap">🔮</span></p>
</div>

</div>

<div>

### ⬇️ Inbound Options

<div v-click class="feature-card mb-2">
<h4>Azure Standard Load Balancer</h4>
<p>Standard SKU, Regional tier only <span class="status-complete">✅</span></p>
</div>

<div v-click class="feature-card mb-2">
<h4>Network Virtual Appliance</h4>
<p>ISV ingress inspection <span class="status-complete">✅</span></p>
</div>

<div v-click class="feature-card mb-2" style="border-left-color: #8764b8;">
<h4>Application Gateway</h4>
<p>On the roadmap <span class="status-roadmap">🔮</span></p>
</div>

<blockquote v-click style="font-size: 0.8em; margin-top: 0.5em;">
⚠️ <strong>No default outbound route</strong> — phased out across all Azure regions by Sept 2025.
</blockquote>

</div>

</div>

---
transition: slide-up
---

# Business Continuity & DR

<div class="grid grid-cols-3 gap-4 mt-2">

<div v-click>
<div class="section-banner">Availability</div>
<div class="azure-card">

<div class="feature-card mb-2">
<h4>VMSS</h4>
<p>Compute resilience <span class="status-complete">✅</span></p>
</div>

<div class="feature-card mb-2">
<h4>Load Balancer</h4>
<p>Fault tolerance <span class="status-complete">✅</span></p>
</div>

<div class="feature-card mb-2">
<h4>LRS Storage</h4>
<p>3x replication in zone <span class="status-complete">✅</span></p>
</div>

<div class="feature-card" style="border-left-color: #d13438;">
<h4>Availability Sets</h4>
<p>Not supported <span class="status-no">❌</span></p>
</div>

</div>
</div>

<div v-click>
<div class="section-banner">Recovery</div>
<div class="azure-card">

| Scenario | Backup | ASR |
|:---------|:-------|:----|
| EZ → Parent | ✅ | ✅ |
| On-prem → EZ | ❌ | ❌ |
| EZ → EZ | — | ❌ |

<p style="font-size: 0.75em; color: #6e6e6e; margin-top: 0.5em;">
Recovery Vaults: parent region only
</p>

</div>
</div>

<div v-click>
<div class="section-banner">Migration</div>
<div class="azure-card">

<div class="feature-card" style="border-left-color: #8764b8;">
<h4>Azure Migrate</h4>
<p>Not supported for Extended Zones <span class="status-roadmap">🔮</span></p>
</div>

<p style="font-size: 0.8em; color: #6e6e6e; margin-top: 1em;">
Consult your Microsoft account team for migration guidance.
</p>

</div>
</div>

</div>

---
transition: slide-left
layout: two-cols
---

# Security & Compliance

<v-clicks>

<div class="feature-card mb-2">
<h4>🛡️ Network Security Groups</h4>
<p>Auto-created in parent region</p>
</div>

<div class="feature-card mb-2">
<h4>🔗 Azure Private Link</h4>
<p>Private endpoint access to PaaS</p>
</div>

<div class="feature-card mb-2">
<h4>🛑 DDoS Protection</h4>
<p>Plan in parent region, protects EZ</p>
</div>

<div class="feature-card mb-2">
<h4>🔍 Defender for Cloud</h4>
<p>CSPM recommended</p>
</div>

<div class="feature-card mb-2">
<h4>📡 Microsoft Sentinel</h4>
<p>SIEM & SOAR</p>
</div>

</v-clicks>

::right::

<div v-click class="mt-2">

### Compliance Standards

<div class="azure-card mb-4">

| Standard | Status |
|:---------|:-------|
| **ISO 27001** | <span class="status-complete">✅ Compliant</span> |
| **SOC 2 Type II** | <span class="status-complete">✅ Compliant</span> |
| **PCI DSS** | <span class="status-complete">✅ Compliant</span> |

</div>

### Data Residency

<div class="azure-card">

Data processed **within Western Australia**.

<p style="font-size: 0.8em; color: #6e6e6e; margin-top: 0.5em;">
Some limited scenarios may store data outside selected geography.
</p>

</div>

</div>

---
transition: fade
---

# Key Design Decisions

<div class="mt-2">

| Decision | Recommendation |
|:---------|:---------------|
| **Subscription** | Dedicate specific subscriptions for Extended Zone |
| **Resource Groups** | Create in parent region with clear naming convention |
| **Bastion** | Deploy in parent region, use global vNet peering |
| **Logs** | Log Analytics workspace in parent region |
| **Action Groups** | Create global action groups |
| **Quotas** | Managed via parent region |
| **Boot Diagnostics** | Managed only (no custom storage accounts) |
| **DNS** | Customer-managed DNS (Private DNS Resolver ❌) |

</div>

<v-click>

<blockquote class="mt-4">
💡 Resource groups <strong>cannot be created</strong> within an Extended Zone — establish them in the parent region with a naming convention that clearly identifies Extended Zone resources.
</blockquote>

</v-click>

---
transition: slide-up
---

# Pricing & Billing

<div class="grid grid-cols-2 gap-8 mt-2">

<div>

<div v-click class="feature-card mb-2">
<h4>💰 Premium Pricing</h4>
<p>Priced separately from Azure Regions at a premium</p>
</div>

<div v-click class="feature-card mb-2">
<h4>✅ EA & CSP</h4>
<p>Enterprise Agreement discounts and CSP agreements apply</p>
</div>

<div v-click class="feature-card mb-2" style="border-left-color: #d13438;">
<h4>❌ Savings Plans</h4>
<p>Reserved Instances and Cost Savings Plans not currently supported</p>
</div>

</div>

<div>

<div v-click class="azure-card">

### Network Pricing

| Transfer Type | Classification |
|:-------------|:---------------|
| **Data Centre** | Inter-Region |
| **ExpressRoute** | Zone 2 |
| **vNet Peering** (Perth ↔ AE) | Same region |

</div>

<div v-click class="mt-3">

> 📞 Contact your **Microsoft account team** for detailed pricing information.

</div>

</div>

</div>

---
layout: center
transition: fade
---

# Next Steps

<div class="process-flow mt-8">
<div class="process-step" v-click>
<div class="step-num">1</div>
<h4>Register</h4>
<p>Register subscriptions for Extended Zone access</p>
</div>
<div class="process-step" v-click>
<div class="step-num">2</div>
<h4>Engage</h4>
<p>Contact Microsoft account team for pricing & timelines</p>
</div>
<div class="process-step" v-click>
<div class="step-num">3</div>
<h4>Assess</h4>
<p>Evaluate service requirements against availability</p>
</div>
<div class="process-step" v-click>
<div class="step-num">4</div>
<h4>Design</h4>
<p>Plan network topology & BCDR strategy</p>
</div>
<div class="process-step" v-click>
<div class="step-num">5</div>
<h4>Deploy</h4>
<p>Deploy workloads to the Perth Extended Zone</p>
</div>
</div>

---
layout: end
---

# Thank You

## Perth Extended Zone Customer Playbook

Version 1.2 — May 2025

[📖 Full Playbook](https://DonFarCreative.github.io/Perth-Extended-Zone/) · [💻 GitHub Repo](https://github.com/DonFarCreative/Perth-Extended-Zone)

© Microsoft Corporation. All rights reserved.
