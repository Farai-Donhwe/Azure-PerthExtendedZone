---
title: Networking & Connectivity
parent: Design Considerations
nav_order: 5
---

# Networking and Connectivity

## Network Topology

Azure Extended Zones can be deployed in the following scenarios:

- **Azure Extended Zone — Standalone**
- **Azure Extended Zone — Extension**

### Standalone Topologies

#### Traditional Network

Traditional Azure network topology configurations (single vNet or Hub-and-Spoke) can be effectively deployed within an Azure Extended Zone.

#### Azure Virtual WAN

{: .roadmap }
> The deployment of Azure Virtual WAN Hub within Azure Extended Zones is **currently unsupported**. See [Service Availability]({% link docs/overview/service-availability.md %}) for updates.

### Extension Topologies

#### Traditional Network

Traditional Azure network topology configurations can be deployed within an Azure Extended Zone and **extended back to the parent region's network topology**. Connectivity between the Extended Zone Hub vNet and the Parent Region Hub vNet is established via a **vNet Peering connection**.

#### Virtual WAN (Microsoft Managed) — Hybrid

{: .roadmap }
> Azure Virtual WAN Hub deployment in Azure Extended Zones is currently unsupported. However, traditional network topologies can be deployed within an Extended Zone and extended back to a Parent Region Azure Virtual WAN using a vNet peering connection.

---

## Connectivity Options

Hybrid network connectivity to resources within an Azure Extended Zone can be established through:

### ExpressRoute

ExpressRoute is the **preferred solution** to extend an on-premises network into the Azure Extended Zone.

**Perth peering locations:**

There will be two Microsoft Points of Presence (PoP) in Perth, but only a **single ExpressRoute peering location**:

- **NextDC P1**

**Available partners:**
- Equinix
- Megaport
- NextDC
- ExpressRoute Direct

**Available SKUs:**

| SKU | Details |
|:----|:--------|
| **ExpressRoute Local** | ❌ Not supported for Azure Extended Zones |
| **ExpressRoute Standard** | Connectivity within the geopolitical boundary (e.g., Oceania — Australia East, Australia Southeast, New Zealand North) |
| **ExpressRoute Premium** | Global connectivity over the Microsoft core network across geopolitical regions |

#### Availability

ExpressRoute is supported by a **99.95% uptime SLA**. Microsoft provides two separate links for each circuit, each terminating in different physical hardware inside the PoP.

{: .important }
> High availability is a **shared responsibility**. Clients need to utilise both physical links and regularly test their configuration and failover processes. Ensure customer premises equipment (CPE) meets HA requirements.

#### Disaster Recovery

Although there will be two PoPs in Perth, there is only a **single ExpressRoute peering location**. To minimise the impact of a peering location failure:

1. **Deploy a second ExpressRoute circuit** connecting to another PoP in the parent region (e.g., Sydney). While this may increase latency, it is generally acceptable during disaster scenarios. See [ExpressRoute disaster recovery guidance](https://learn.microsoft.com/en-us/azure/expressroute/designing-for-disaster-recovery-with-expressroute-privatepeering).
2. **Use a site-to-site VPN as a fallback.**

### Site-to-Site VPN

{: .roadmap }
> The Azure VPN Gateway service is on the Extended Zones roadmap.

ISV VPN solutions can be used to establish a site-to-site VPN connection in the interim.

---

## Outbound Internet Access

{: .warning }
> In Azure Extended Zones, there is **no default outbound internet access**. The default outbound route is being phased out across all Azure regions by September 2025. Attempts to disable the Private Subnet feature will result in an error.

To provide outbound internet access, implement one of:

| Solution | Status |
|:---------|:-------|
| **Network Virtual Appliance** | ✅ Available |
| **Azure Load Balancer (SNAT)** | ✅ Available |
| **Instance Level Public IP** | ✅ Available |
| **Azure Firewall** | 🔮 Roadmap |
| **NAT Gateway** | 🔮 Roadmap |

### Network Virtual Appliance

Network Virtual Appliances (NVA) from ISVs (e.g., F5 Networks, Palo Alto, Cisco) can be utilised to:

- Inspect **egress** traffic to prevent data exfiltration
- Inspect **ingress** traffic to prevent attacks
- Filter **lateral traffic** between VMs
- Filter traffic between **on-premises and Azure** resources

### Azure Load Balancer (SNAT)

Azure Standard Load Balancer (public) provides outbound internet access via Source Network Address Translation (SNAT). SNAT maps the VM's private IP to the load balancer's public IP, preventing external sources from directly accessing backend instances.

### Instance Level Public IP

Assigning a public IP address to a VM instance enables direct internet access.

---

## Inbound Internet Access

| Solution | Status |
|:---------|:-------|
| **Azure Load Balancer** | ✅ Available (Standard SKU only, Regional tier only) |
| **Network Virtual Appliance** | ✅ Available |
| **Application Gateway** | 🔮 Roadmap |

{: .note }
> Only the Azure **Standard Load Balancer** SKU is supported. Gateway and Basic SKUs are not supported. Only the **Regional** tier is supported.

---

## Name Resolution

### Hybrid DNS Resolution

Hybrid DNS resolution (Azure resolving on-premises domains and vice versa) can be implemented through:

#### Customer Managed DNS Server

Deploy a customer-managed DNS server into the Azure Extended Zone to:
- Resolve on-premises computer and service names from Azure VMs
- Resolve Azure hostnames from on-premises computers

#### Azure Private DNS Resolver

{: .roadmap }
> The Azure Private DNS Resolver is **currently unsupported** in Azure Extended Zones.
