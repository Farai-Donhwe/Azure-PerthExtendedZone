---
title: Security & Compliance
sidebar:
  order: 7
---

Azure provides a comprehensive framework to ensure the security, compliance, and proper data residency of cloud resources.

## Microsoft Cloud Security Benchmark (MCSB)

The MCSB provides prescriptive best practices and recommendations for enhancing security of workloads, data, and services, drawing from:

- **Cloud Adoption Framework** — Strategy, roles, Azure Top 10 Security Best Practices
- **Azure Well-Architected Framework** — Securing workloads on Azure
- **CISO Workshop** — Zero Trust principles for security modernisation
- **Industry standards** — AWS Well-Architected Framework, CIS Controls, NIST, PCI-DSS

:::note
Consult MCSB and the service baselines for any service deployed to an Azure Extended Zone to plan for appropriate security configuration.
:::

## Cloud Security Posture Management

**Microsoft Defender for Cloud** is recommended for managing and enhancing the security posture of the Azure Extended Zone. It integrates:

- **DevSecOps** — Unified security management at the code level
- **CSPM** — Actionable insights to prevent breaches
- **CWPP** — Protections for servers, containers, storage, databases, and other workloads

## Security Information and Event Management (SIEM)

**Microsoft Sentinel** is recommended for SIEM and SOAR within the Azure Extended Zone. It provides:

- Cyber threat detection, investigation, response, and proactive hunting
- Integration with Log Analytics and Logic Apps
- Microsoft's threat intelligence and custom feeds

See the [Observability — Logs](./observability/) section for guidance on deploying the Log Analytics workspace.

---

## Azure Security Services

### Network Security Groups (NSGs)

NSGs filter network traffic between Azure resources within a virtual network. When a VM is created in an Azure Extended Zone, the NSG will automatically be established in the **parent region** corresponding to the resource group's region.

### Azure Private Link

Azure Private Link enables secure, private access to Azure PaaS services (e.g., Azure Storage, SQL Database) via a **private endpoint** within your virtual network. Traffic traverses the Microsoft backbone network, eliminating public internet exposure.

### DDoS Protection

Azure DDoS Protection provides enhanced mitigation features, automatically tuned to protect Azure resources in a virtual network.

:::caution
- The DDoS Protection plan must be created in the **parent region**, not the Extended Zone.
- For L7 application layer protection, deploy **Azure WAF** with Azure Front Door Premium or Application Gateway WAF v2 SKU.
- A multi-layered security approach (network, application, and data protection) should always be implemented.
:::

### Azure Firewall

:::tip[Roadmap]
Azure Firewall is on the Extended Zone roadmap. It is a cloud-native, stateful firewall service with built-in high availability and unlimited cloud scalability, providing both east-west and north-south traffic inspection.
:::

---

## Data Residency

You might choose to utilize an Azure Extended Zone to **meet data residency requirements** within the Microsoft cloud.

:::note
In certain limited scenarios, data may be stored outside of your selected geography. Refer to the [Data residency in Azure](https://azure.microsoft.com/en-au/explore/global-infrastructure/data-residency/) documentation for details.
:::

If your solution employs a broad range of Azure services, multiple regions may be necessary as not all services are available in the Extended Zone. Carefully assess service availability and evaluate regions that offer an optimal balance between data residency, costs, and latency.

## Extended Security Updates (ESUs)

Extended Security Updates will be provided **at no additional cost** for customers utilizing Azure services, including:

- Azure Virtual Machines
- Azure Dedicated Host
- Azure VMware Solutions
- Nutanix Cloud Clusters on Azure
- Azure Stack Hub/Edge/HCI

Eligible VMs configured to receive updates will automatically benefit from ESUs.

For more information, refer to the [ESU FAQ](https://learn.microsoft.com/en-us/lifecycle/faq/extended-security-updates) on Microsoft Learn.

## Compliance and Regulatory Standards

Azure Extended Zones meet the following compliance standards:

| Standard | Status |
|:---------|:-------|
| **ISO 27001** | ✅ Compliant |
| **SOC 2 Type II** | ✅ Compliant |
| **PCI DSS** | ✅ Compliant |
