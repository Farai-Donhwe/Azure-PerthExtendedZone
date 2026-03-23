---
title: Overview
layout: default
nav_order: 2
has_children: true
permalink: /overview/
---

# Overview of Azure Extended Zones

Azure Extended Zones are small-footprint extensions of an Azure region, strategically located in metropolitan areas, industry hubs, or specific jurisdictions. Extended Zones support virtual machines, containers, storage, and a selection of Azure services, enabling the execution of latency-sensitive and throughput-intensive applications close to end users while adhering to approved data residency requirements.

Azure Extended Zones are integrated into the Microsoft global network, providing secure, reliable, high-bandwidth connectivity between applications running in an Extended Zone and their users. Azure customers can provision and manage their Azure Extended Zones resources, services, and workloads through the Azure portal and other essential Azure tools.

The **control plane** for services running within an Extended Zone remains in the region and the **data plane** is deployed at the Extended Zone site, resulting in a smaller Azure footprint.

## Key Scenarios

Azure Extended Zones are designed to address two key scenarios:

- **Latency** — Users need to operate their resources, such as media editing software, remotely with minimal latency.
- **Data residency** — Users require their application data to remain within a specific geography, hosting locally for various privacy, regulatory, and compliance reasons.

## Planning Considerations

When considering the deployment of workloads to an Azure Extended Zone, consider the following questions:

| Question | Guidance |
|:---------|:---------|
| **What are your timelines?** | Services within Azure Extended Zones will become available in phases. Ensure your deadline aligns with the launch schedules and incorporates a buffer for contingencies. See [Service Availability]({% link docs/overview/service-availability.md %}). |
| **What services will you use?** | Assess whether your solution requires specific services that may not yet be available. Third-party Marketplace services also need ISV validation. See [Service Availability]({% link docs/overview/service-availability.md %}) and [ISV Solutions]({% link docs/overview/isv-solutions.md %}). |
| **How will you grow?** | Microsoft needs to monitor projected growth in service usage. Discuss anticipated usage with Microsoft or your primary partner. |
| **HA & DR requirements?** | Azure Extended Zones do not support availability zones but support additional services for availability and disaster recovery. See [BCDR]({% link docs/design-considerations/bcdr.md %}). |
