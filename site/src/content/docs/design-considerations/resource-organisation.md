---
title: Resource Organisation
sidebar:
  order: 1
---

Resource organization within Azure necessitates a structured approach to secure, manage, and optimize cloud resources effectively.

## Parent Region

The control plane for services deployed to an Azure Extended Zone remains situated within an Azure Region while the data plane is deployed at the Extended Zone site. Consequently, utilizing services in an Azure Extended Zone necessitates the employment of certain services, resources, and features within an Azure Region, referred to as the **"parent region"**.

When deploying resources within an Azure Extended Zone, the resource overview will indicate the Azure Extended Zone. The portal views for the resource type (e.g., Virtual Network View) will display the parent region.

## Subscriptions

An Azure subscription serves several purposes:

- A legal agreement
- A payment agreement
- A boundary of scale
- An administrative boundary

Every Azure resource is logically associated with one subscription. Subscriptions are not tied to a specific Azure region or Azure Extended Zone, though each Azure resource deploys to only one region or extended zone.

:::caution
Access to Azure Extended Zones is regulated through a controlled access process. You must register the subscription(s) intended for Extended Zone deployments. See the [Onboarding](../overview/pricing/) section.
:::

It is advisable to consider **dedicating specific subscriptions** for deployments within an Azure Extended Zone. This approach facilitates:
- Monitoring of quotas within the extended zone
- Reducing confusion with resources deployed in the parent region

### Management Groups

Management groups offer a governance scope above subscriptions. By organizing subscriptions within management groups, any governance conditions applied will cascade by inheritance to all associated subscriptions.

Management groups are **not tied to any specific Azure Region** and can be utilized with both Extended Zone subscriptions and deployed resources.

### Resource Groups

A resource group is a container that facilitates the management of related resources. It serves as a scope for RBAC and Azure Policy governance.

:::danger
Creating a resource group **within** an Azure Extended Zone is **not possible**. Resource groups should be established in an Azure parent region.
:::

It is recommended to adopt a **naming convention** that clearly indicates which resource groups are associated with an Azure Extended Zone.
