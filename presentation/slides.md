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

<div class="grid grid-cols-2 gap-x-6 gap-y-1 mt-2" style="font-size: 0.92em;">

<div class="feature-card">
<h4>🌏 <a href="/3">What are Azure Extended Zones?</a></h4>
<p>Architecture, key scenarios, overview diagram</p>
</div>

<div class="feature-card">
<h4>📍 <a href="/5">Perth Extended Zone</a></h4>
<p>Why it matters for Western Australia</p>
</div>

<div class="feature-card">
<h4>🏗️ <a href="/7">Deployment Scenarios</a></h4>
<p>Standalone and Extension patterns</p>
</div>

<div class="feature-card">
<h4>⚙️ <a href="/8">Services, SLAs & ISVs</a></h4>
<p>Available services and timelines</p>
</div>

<div class="feature-card">
<h4>🌐 <a href="/10">Networking & Connectivity</a></h4>
<p>Topologies, ExpressRoute, internet access</p>
</div>

<div class="feature-card">
<h4>🔄 <a href="/13">Business Continuity & DR</a></h4>
<p>Availability, backup, and recovery</p>
</div>

<div class="feature-card">
<h4>🔒 <a href="/14">Security & Compliance</a></h4>
<p>Security services and data residency</p>
</div>

<div class="feature-card">
<h4>🏢 <a href="/15">Design Considerations</a></h4>
<p>Resource org, management, observability</p>
</div>

<div class="feature-card">
<h4>💰 <a href="/20">Pricing & Design Decisions</a></h4>
<p>Key recommendations and billing</p>
</div>

<div class="feature-card">
<h4>⚔️ <a href="/21">Competitive Positioning</a></h4>
<p>Azure PEZ vs AWS Local Zones</p>
</div>

</div>

---
layout: section
---

# What are Azure Extended Zones?

## Small-footprint extensions of Azure — close to your users

---
transition: slide-up
---

# Azure Extended Zones

<div class="grid grid-cols-2 gap-6 mt-1">

<div>

<div class="feature-card mb-2">
<h4>☁️ Small-Footprint Extensions</h4>
<p>Located in metropolitan areas, industry hubs, or specific jurisdictions</p>
</div>

<div class="feature-card mb-2">
<h4>🏗️ Architecture</h4>
<p><strong>Control plane</strong> in parent region · <strong>Data plane</strong> at Extended Zone site</p>
</div>

<div class="feature-card mb-2" style="border-left-color: #00b7c3;">
<h4>⚡ Latency</h4>
<p>Run resources close to end users with minimal latency</p>
</div>

<div class="feature-card mb-2" style="border-left-color: #8764b8;">
<h4>📍 Data Residency</h4>
<p>Keep data within a specific geography for privacy and compliance</p>
</div>

</div>

<div>

<img src="/images/overview-diagram.png" alt="Azure Extended Zones architecture overview" style="width: 100%; border-radius: 8px; border: 1px solid var(--azure-gray-200, #ebebeb);" />

<p style="font-size: 0.65em; color: var(--azure-gray-500); text-align: center; margin-top: 0.4em;">Source: Azure Extended Zones — Architecture Overview</p>

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

<div class="grid grid-cols-2 gap-6 mt-1">

<div>

<div class="section-banner">Scenario 1: Standalone</div>

<div class="azure-card" style="padding: 0.8em;">

<p style="font-size: 0.8em; margin-bottom: 0.5em;">Deploy workloads <strong>without connecting</strong> to a parent region landing zone.</p>

<img src="/images/image2.png" alt="Standalone deployment scenario" style="width: 100%; border-radius: 6px;" />

</div>

</div>

<div>

<div class="section-banner">Scenario 2: Extension</div>

<div class="azure-card" style="padding: 0.8em;">

<p style="font-size: 0.8em; margin-bottom: 0.5em;"><strong>Extend an existing landing zone</strong> via vNet peering over the Microsoft backbone.</p>

<img src="/images/image3.png" alt="Extension deployment scenario" style="width: 100%; border-radius: 6px;" />

</div>

</div>

</div>

<p style="font-size: 0.65em; color: var(--azure-gray-500); text-align: center; margin-top: 0.3em;">¹ Azure VPN is a roadmap item. Site-to-Site VPN connectivity via 3rd-party solution.</p>

---
transition: fade
---

# Service Availability & Timelines

<div class="mt-1">

<img src="/images/image4.png" alt="Azure Extended Zones service deployment diagram" style="width: 100%; border-radius: 8px; border: 1px solid var(--azure-gray-200, #ebebeb); margin-bottom: 0.5em;" />

</div>

<div style="font-size: 0.72em;">

| Category | Available Services | Status | Timeline |
|:---------|:-------------------|:-------|:---------|
| **Compute** | AKS, AVD, VMSS, VMs (A/B/D/E/F + GPU NVadsA10 v5) | <span class="status-complete">✅ GA</span> | At launch |
| **Networking** | ExpressRoute, DDoS, Private Link, Standard LB, vNet Peering | <span class="status-complete">✅ GA</span> | At launch |
| **Storage** | Managed Disks, Premium Blobs/Files, ADLS Gen2, SFTP, NFS | <span class="status-complete">✅ GA</span> | At launch |
| **BCDR** | Azure Site Recovery, Azure Backup | <span class="status-complete">✅ GA</span> | At launch |
| **Arc-enabled** | PostgreSQL, Managed SQL, Container Apps | <span class="status-progress">🔄 Preview</span> | Preview at launch |
| **Firewall** | Azure Firewall | <span class="status-complete">✅ GA</span> | Available at GA |
| **App Gateway** | Application Gateway | <span class="status-roadmap">🔮 Roadmap</span> | Post-GA |
| **VPN Gateway** | VPN Gateway | <span class="status-roadmap">🔮 Roadmap</span> | Post-GA |
| **NAT Gateway** | NAT Gateway | <span class="status-roadmap">🔮 Roadmap</span> | Post-GA |

</div>

<p style="font-size: 0.6em; color: var(--azure-gray-500); margin-top: 0.2em;">Source: <a href="https://learn.microsoft.com/en-us/azure/extended-zones/overview" target="_blank">Azure Extended Zones documentation</a> · Contact your Microsoft account team for latest timeline updates.</p>

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
| [**Aviatrix**](https://aviatrix.com/azure/) | <span class="status-complete">✅ Complete</span> |
| [**Fortinet**](https://azuremarketplace.microsoft.com/en-au/marketplace/apps/fortinet.fortinet-fortigate?tab=Overview) | <span class="status-complete">✅ Complete</span> |
| [**Checkpoint**](https://azuremarketplace.microsoft.com/en-au/marketplace/apps/checkpoint.vsec?tab=Overview) | <span class="status-progress">🔄 Validating</span> |
| [**Citrix**](https://docs.citrix.com/en-us/citrix-daas/overview.html) | <span class="status-progress">🔄 Validating</span> |
| [**F5 Network**](https://azuremarketplace.microsoft.com/en-au/marketplace/apps/f5-networks.f5-big-ip-byol?tab=Overview) | <span class="status-progress">🔄 Validating</span> |
| [**Palo Alto**](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/paloaltonetworks.vmseries-ngfw?tab=Overview) | <span class="status-progress">🔄 Validating</span> |
| [**Red Hat**](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/redhat.rhel-20190605?tab=Overview) | <span class="status-progress">🔄 Validating</span> |

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
layout: section
---

# Design Considerations

## Resource Organisation, Management & Observability

---
transition: slide-left
---

# Resource Organisation

<div class="grid grid-cols-2 gap-6 mt-1">

<div>

<div class="feature-card mb-2">
<h4>🌏 Parent Region</h4>
<p><strong>Control plane</strong> stays in the parent region (Australia East). Portal views show the parent region for resource types like Virtual Networks.</p>
</div>

<div class="feature-card mb-2">
<h4>📋 Subscriptions</h4>
<p><strong>Dedicate specific subscriptions</strong> for Extended Zone deployments to monitor quotas and avoid confusion with parent region resources.</p>
</div>

<div class="feature-card mb-2">
<h4>🏢 Management Groups</h4>
<p>Not tied to any Azure Region — can be used with both Extended Zone subscriptions and deployed resources.</p>
</div>

</div>

<div>

<div class="azure-card mb-3">

### Resource Groups

Resource groups **cannot be created** within an Azure Extended Zone.

| Constraint | Guidance |
|:-----------|:---------|
| **RG Location** | Must be in parent region |
| **Naming** | Use convention to identify EZ resources |
| **RBAC** | Applied as scope for governance |
| **Policy** | Azure Policy applies to EZ resources |

</div>

<blockquote style="font-size: 0.8em;">
💡 Register subscription(s) for Extended Zone access via the controlled access process.
</blockquote>

</div>

</div>

---
transition: slide-up
---

# Management

<div class="grid grid-cols-2 gap-6 mt-1">

<div>

<div class="feature-card mb-2">
<h4>🔐 Azure Bastion</h4>
<p><span class="status-no">❌</span> Basic, Standard & Premium SKUs <strong>not supported</strong> in Extended Zones.<br/>
<span class="status-complete">✅</span> Deploy in <strong>parent region</strong> with global vNet peering (not Developer SKU).</p>
</div>

<div class="feature-card mb-2">
<h4>💡 Azure Advisor</h4>
<p><span class="status-complete">✅</span> Non-regional service — recommendations apply to Extended Zone resources.</p>
</div>

<div class="feature-card mb-2">
<h4>🏷️ Azure Tags</h4>
<p><span class="status-complete">✅</span> Supported in Extended Zones. Recommended as part of governance strategy.</p>
</div>

</div>

<div>

<div class="feature-card mb-2">
<h4>🖼️ Compute Gallery Images</h4>
<p><span class="status-complete">✅</span> Replicate from parent region via CLI. <span class="status-no">❌</span> Not available via Portal UX.</p>
</div>

<div class="azure-card mb-2" style="font-size: 0.8em;">

```bash
az sig image-version update \
  --resource-group MyRG \
  --gallery-name MyGallery \
  --gallery-image-definition MyImage \
  --gallery-image-version 0.0.1 \
  --target-edge-zones \
    australiaeast=perth=1=standardssd_lrs
```

</div>

<div class="feature-card mb-2">
<h4>📜 Azure Policy</h4>
<p><span class="status-complete">✅</span> Non-regional — evaluates Extended Zone resources for policy compliance.</p>
</div>

</div>

</div>

---
transition: fade
---

# Observability

<div class="grid grid-cols-3 gap-3 mt-1" style="font-size: 0.85em;">

<div>

<div class="feature-card mb-2">
<h4>🔔 Action Groups</h4>
<p><span class="status-no">❌</span> Cannot create in EZ. Use <strong>global</strong> action groups.</p>
</div>

<div class="feature-card mb-2">
<h4>🩺 Service Health</h4>
<p><span class="status-complete">✅</span> Supported for EZ resources (status, outages, maintenance).</p>
</div>

<div class="feature-card mb-2">
<h4>📊 Logs</h4>
<p><span class="status-no">❌</span> Log Analytics in <strong>parent region</strong> only. Additional bandwidth costs may apply.</p>
</div>

<div class="feature-card mb-2">
<h4>📈 Metrics</h4>
<p><span class="status-complete">✅</span> Azure Monitor Metrics compatible with EZ resources.</p>
</div>

</div>

<div>

<div class="feature-card mb-2">
<h4>🔍 Insights & Workbooks</h4>
<p><span class="status-complete">✅</span> Both supported for EZ resources.</p>
</div>

<div class="feature-card mb-2">
<h4>📡 Application Insights</h4>
<p><span class="status-complete">✅</span> Supported. Workspace in parent region.</p>
</div>

<div class="feature-card mb-2">
<h4>🌐 Network Watcher</h4>
<p><span class="status-complete">✅</span> Auto-created in parent region. Full diagnostics suite available.</p>
</div>

<div class="feature-card mb-2">
<h4>🔗 Connection Monitor</h4>
<p><span class="status-no">❌</span> Cannot create in EZ. Select parent region.</p>
</div>

</div>

<div>

<div class="feature-card mb-2">
<h4>🖥️ Boot Diagnostics</h4>
<p><span class="status-complete">✅</span> Supported. <strong>Managed only</strong> — no custom storage accounts.</p>
</div>

<div class="feature-card mb-2">
<h4>📦 Quotas</h4>
<p>Managed via <strong>parent region</strong>. No EZ-specific monitoring. Request increases via Azure Portal.</p>
</div>

<div class="feature-card mb-2">
<h4>🔄 VM Guest Patching</h4>
<p><span class="status-complete">✅</span> Automatic patching supported in EZ.</p>
</div>

<div class="feature-card mb-2">
<h4>🛡️ Update Manager</h4>
<p><span class="status-complete">✅</span> Unified Windows & Linux update compliance.</p>
</div>

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
