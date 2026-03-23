---
theme: ./theme
title: Perth Extended Zone — Customer Playbook
layout: cover
info: |
  ## Perth Extended Zone Customer Playbook
  Technical guidance for deploying workloads to the Azure Perth Extended Zone.
  Version 1.2 — May 2025
drawings:
  persist: false
transition: slide-left
mdc: true
favicon: /favicon.svg
---

# Perth Extended Zone

## Customer Playbook

<VersionBadge />

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

<div class="feature-card">
<h4>🌏 <a href="/3">What are Azure Extended Zones?</a></h4>
<p>Small-footprint extensions of Azure regions</p>
</div>

<div class="feature-card">
<h4>📍 <a href="/5">Perth Extended Zone Overview</a></h4>
<p>Why it matters for Western Australia</p>
</div>

<div class="feature-card">
<h4>🏗️ <a href="/6">Deployment Scenarios</a></h4>
<p>Standalone and Extension patterns</p>
</div>

<div class="feature-card">
<h4>⚙️ <a href="/7">Service Availability</a></h4>
<p>Available services, SLAs, and ISVs</p>
</div>

<div class="feature-card">
<h4>🌐 <a href="/10">Networking & Connectivity</a></h4>
<p>Topologies, ExpressRoute, internet access</p>
</div>

<div class="feature-card">
<h4>🔄 <a href="/12">Business Continuity & DR</a></h4>
<p>Availability, backup, and recovery</p>
</div>

<div class="feature-card">
<h4>🔒 <a href="/13">Security & Compliance</a></h4>
<p>Security services and data residency</p>
</div>

<div class="feature-card">
<h4>📋 <a href="/14">Design Decisions</a></h4>
<p>Key recommendations and pricing</p>
</div>

<div class="feature-card" style="grid-column: span 2;">
<h4>⚔️ <a href="/17">Competitive Positioning — Azure PEZ vs AWS</a></h4>
<p>Why Azure PEZ offers a stronger local cloud than AWS Local Zones</p>
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

<div class="azure-card" style="padding: 1em;">

Deploy workloads **without connecting** to a parent region landing zone.

<div class="flow-diagram">
  <div class="flow-node flow-onprem">🏢 On-Premises Perth</div>
  <div class="flow-arrow flow-arrow-down">
    <div class="arrow-line"><div class="arrow-pulse"></div></div>
    <span class="arrow-label">ExpressRoute</span>
  </div>
  <div class="flow-node flow-azure">☁️ Perth Extended Zone</div>
  <div class="flow-arrow flow-arrow-up">
    <div class="arrow-line"><div class="arrow-pulse arrow-pulse-up"></div></div>
    <span class="arrow-label">Standard LB</span>
  </div>
  <div class="flow-node flow-onprem">🌐 Internet</div>
</div>

</div>

</div>

<div v-click>

<div class="section-banner">Scenario 2: Extension</div>

<div class="azure-card" style="padding: 1em;">

**Extend an existing landing zone** via vNet peering over the Microsoft backbone.

<div class="flow-diagram">
  <div class="flow-node flow-onprem">🏢 On-Premises</div>
  <div class="flow-arrow flow-arrow-down">
    <div class="arrow-line"><div class="arrow-pulse"></div></div>
    <span class="arrow-label">ExpressRoute</span>
  </div>
  <div class="flow-node flow-azure">☁️ Perth Extended Zone</div>
  <div class="flow-branch">
    <div class="flow-arrow flow-arrow-right">
      <div class="arrow-line-h"><div class="arrow-pulse-h"></div></div>
      <span class="arrow-label">vNet Peering</span>
    </div>
    <div class="flow-node flow-azure-east">☁️ Australia East</div>
  </div>
  <div class="flow-arrow flow-arrow-up">
    <div class="arrow-line"><div class="arrow-pulse arrow-pulse-up"></div></div>
    <span class="arrow-label">Standard LB</span>
  </div>
  <div class="flow-node flow-onprem">🌐 Internet</div>
</div>

</div>

</div>

</div>

<style>
.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 0.6em;
  font-size: 0.75em;
}
.flow-node {
  padding: 0.5em 1.2em;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  min-width: 160px;
  z-index: 2;
}
.flow-onprem {
  background: var(--azure-gray-100, #f5f5f5);
  border: 2px solid var(--azure-gray-300, #d2d2d2);
  color: var(--azure-gray-700, #3b3b3b);
}
.flow-azure {
  background: var(--azure-blue-light, #deecf9);
  border: 2px solid var(--azure-blue, #0078d4);
  color: var(--azure-blue-dark, #005a9e);
}
.flow-azure-east {
  background: #e8f4e8;
  border: 2px solid #107c10;
  color: #0b5e0b;
}
.flow-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 36px;
  width: 4px;
}
.arrow-line {
  width: 3px;
  height: 100%;
  background: var(--azure-blue, #0078d4);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
.arrow-pulse {
  position: absolute;
  top: -8px;
  left: -2px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--azure-teal, #00b7c3);
  box-shadow: 0 0 6px var(--azure-teal, #00b7c3);
  animation: flowDown 1.5s ease-in-out infinite;
}
.arrow-pulse-up {
  animation: flowUp 1.5s ease-in-out infinite;
}
@keyframes flowDown {
  0% { top: -8px; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: 36px; opacity: 0; }
}
@keyframes flowUp {
  0% { top: 36px; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: -8px; opacity: 0; }
}
.arrow-label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
  color: var(--azure-gray-500, #6e6e6e);
  white-space: nowrap;
  font-weight: 500;
}
.flow-branch {
  display: flex;
  align-items: center;
  gap: 0;
  margin: 0.2em 0;
}
.flow-arrow-right {
  display: flex;
  align-items: center;
  position: relative;
  width: 60px;
  height: 4px;
  flex-direction: row;
}
.arrow-line-h {
  height: 3px;
  width: 100%;
  background: var(--azure-blue, #0078d4);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
.arrow-pulse-h {
  position: absolute;
  left: -8px;
  top: -2px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--azure-teal, #00b7c3);
  box-shadow: 0 0 6px var(--azure-teal, #00b7c3);
  animation: flowRight 1.5s ease-in-out infinite;
}
@keyframes flowRight {
  0% { left: -8px; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { left: 60px; opacity: 0; }
}
.flow-arrow-right .arrow-label {
  left: auto;
  top: -16px;
  transform: none;
  left: 50%;
  transform: translateX(-50%);
}
</style>

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
transition: slide-up
---

# Competitive Positioning

<p style="color: #0078d4; font-weight: 600; font-size: 0.8em; margin-bottom: 0.1em;">Why Azure PEZ is Stronger Than AWS Local Zones</p>
<p style="color: #6e6e6e; font-size: 0.75em; margin-bottom: 0.3em;">A richer service catalogue and a clearer BC/DR path</p>

<div style="font-size: 0.72em; overflow: hidden;">

| Capability | Azure PEZ (Perth Extended Zone) | AWS Local Zones |
|:-----------|:-------------------------------|:----------------|
| **Object / Blob Storage** | <span class="status-complete">✅</span> Premium Blob Storage locally (Block Blobs, Page Blobs, Files, ADLS Gen2) | <span class="status-no">❌</span> No local S3 or object storage |
| **Managed Databases** | <span class="status-complete">✅</span> Azure SQL Managed Instance | <span class="status-no">❌</span> No local RDS or managed databases |
| **Virtual Desktop (VDI)** | <span class="status-complete">✅</span> Azure Virtual Desktop — IRAP PROTECTED | <span class="status-no">❌</span> No managed VDI service |
| **Key Management** | <span class="status-complete">✅</span> Azure Key Vault locally available | <span class="status-no">❌</span> No local KMS |
| **BC / DR Failover** | <span class="status-complete">✅</span> Azure Site Recovery — managed VM failover to Sydney | <span class="status-no">❌</span> Limited — manual failover paths only |
| **Cost Optimisation** | <span class="status-complete">✅</span> Reserved Instances + Savings Plans | <span class="status-complete">✅</span> Savings Plans + Spot Instances |
| **Government Compliance** | <span class="status-complete">✅</span> IRAP PROTECTED assessed | <span class="status-no">❌</span> IRAP status unclear for Perth Local Zone |

</div>

<blockquote style="font-size: 0.7em; margin-top: 0.3em;">
💡 AWS Local Zones are <strong>compute-only</strong> extensions. Azure PEZ is a <strong>full-service local cloud</strong> — with storage, managed databases, desktop virtualisation, and built-in disaster recovery.
</blockquote>

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

---
layout: section
---

# Appendix

## Changelog & Revision History

---
transition: fade
---

# Changelog

<div style="font-size: 0.68em; overflow: auto; max-height: 85%;">

| Date | Author | Commit | Description |
|:-----|:-------|:-------|:------------|
| 2026-03-23 | Farai Donhwe | [`e2aae30`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/e2aae30) | Refactor cover slide layout and styles for improved structure and aesthetics |
| 2026-03-23 | Farai Donhwe | [`3b27677`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/3b27677) | Enhance Slidev theme with dark mode support and layout adjustments |
| 2026-03-23 | Farai Donhwe | [`32306f2`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/32306f2) | Remove package.json and package-lock.json for Slidev theme dependencies |
| 2026-03-23 | Farai Donhwe | [`2a38e0b`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/2a38e0b) | Add competitive positioning document comparing Azure PEZ and AWS Local Zones |
| 2026-03-23 | Farai Donhwe | [`70a0f61`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/70a0f61) | Add package.json and package-lock.json for Slidev theme dependencies |
| 2026-03-23 | Farai Donhwe | [`4615d43`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/4615d43) | Add initial Slidev presentation slides and components |
| 2026-03-23 | Farai Donhwe | [`a4c06ae`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/a4c06ae) | Add Azure-themed layout components and styles for Slidev presentation |
| 2026-03-23 | Farai Donhwe | [`8c8e412`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/8c8e412) | Update agenda links in Perth Extended Zone Customer Playbook presentation |
| 2026-03-23 | Farai Donhwe | [`c6dd699`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/c6dd699) | Add initial presentation files for Perth Extended Zone Customer Playbook |
| 2026-03-23 | Farai Donhwe | [`c984760`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/c984760) | Implement feature X to enhance user experience and fix bug Y in module Z |
| 2026-03-23 | Farai Donhwe | [`4b302a2`](https://github.com/DonFarCreative/Perth-Extended-Zone/commit/4b302a2) | Add initial documentation for Azure Perth Extended Zone |

</div>

<blockquote style="font-size: 0.7em; margin-top: 0.3em;">
📋 Full commit history: <a href="https://github.com/DonFarCreative/Perth-Extended-Zone/commits/main" target="_blank">github.com/DonFarCreative/Perth-Extended-Zone/commits/main</a>
</blockquote>
