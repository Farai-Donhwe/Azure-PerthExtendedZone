---
title: Deployment Scenarios
sidebar:
  order: 1
---

Azure Extended Zones are available for deployment in the following scenarios:

## Scenario 1: Azure Extended Zone — Standalone

Organizations can choose to deploy workloads within the Azure Extended Zone (e.g., Perth Extended Zone) **without the necessity of connecting to a parent region's landing zone** (e.g., Australia East).

Access to workloads within the Extended Zone can be facilitated through:

- **Private connectivity** — ExpressRoute or Site-to-Site VPN¹
- **Public connectivity** — Standard Load Balancer

:::note
¹ Azure VPN is a roadmap item for Azure Extended Zone. Site-to-Site VPN connectivity would need to be via a 3rd-party solution.
:::

---

## Scenario 2: Azure Extended Zone — Extension

Azure customers with **existing landing zones** might consider extending their presence to include Azure Extended Zones (e.g., Perth Extended Zone).

Access to workloads within the Extended Zone can be facilitated through:

- **Private connectivity** — ExpressRoute or Site-to-Site VPN¹
- **Public connectivity** — Standard Load Balancer
- **Microsoft backbone** — Peering connections to a landing zone in a parent region

:::note
¹ Azure VPN is a roadmap item for Azure Extended Zone. Site-to-Site VPN connectivity would need to be via a 3rd-party solution.
:::
