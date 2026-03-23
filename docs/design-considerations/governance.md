---
title: Governance
parent: Design Considerations
nav_order: 3
---

# Governance

## Azure Policy

Azure Policy assists in enforcing organizational standards and assessing compliance at scale. Through its compliance dashboard, it provides an aggregated view for evaluating the overall state of the environment, with the capability to drill down to per-resource and per-policy details.

Azure Policy is a **non-regional service** and will evaluate resources deployed to an Azure Extended Zone for adherence to assigned policy definitions.

## Azure Tags

Tags are metadata elements that can be applied to Azure resources, consisting of key-value pairs that assist in identifying resources based on parameters pertinent to organizational needs.

Tags are **supported within an Azure Extended Zone** and are recommended as part of a comprehensive governance strategy.
