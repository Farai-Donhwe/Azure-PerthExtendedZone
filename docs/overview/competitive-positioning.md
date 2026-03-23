---
title: Competitive Positioning
parent: Overview
nav_order: 6
---

# Competitive Positioning — Azure PEZ vs AWS Local Zones

A richer service catalogue and a clearer BC/DR path.

## Comparison Summary

Azure Perth Extended Zone (PEZ) is a **full-service local cloud** — with storage, managed databases, desktop virtualisation, and built-in disaster recovery to the Sydney region. AWS Local Zones are **compute-only extensions** with significantly fewer managed services available locally.

## Feature Comparison

| Capability | Azure PEZ (Perth Extended Zone) | AWS Local Zones |
|:-----------|:-------------------------------|:----------------|
| **Object / Blob Storage** | ✅ Premium Blob Storage locally (Block Blobs, Page Blobs, Files, ADLS Gen2) | ❌ No local S3 or object storage |
| **Managed Databases** | ✅ Azure SQL Managed Instance | ❌ No local RDS or managed databases |
| **Virtual Desktop (VDI)** | ✅ Azure Virtual Desktop — IRAP PROTECTED assessed | ❌ No managed VDI service |
| **Key Management** | ✅ Azure Key Vault locally available | ❌ No local KMS |
| **BC / DR Failover** | ✅ Azure Site Recovery — managed VM failover to Sydney | ❌ Limited — manual failover paths only |
| **Cost Optimisation** | ✅ Reserved Instances + Savings Plans | ✅ Savings Plans + Spot Instances |
| **Government Compliance** | ✅ IRAP PROTECTED assessed | ❌ IRAP status unclear for Perth Local Zone |

## Key Differentiators

### Full-Service Local Cloud
Azure PEZ provides a comprehensive set of services locally — including storage, databases, VDI, and key management — while AWS Local Zones are primarily compute-only extensions that require traffic to route back to the parent region for most managed services.

### Built-In Disaster Recovery
Azure Site Recovery provides **managed VM failover to Sydney** directly from the Perth Extended Zone. AWS Local Zones offer only limited, manual failover paths with no equivalent managed DR service.

### Government-Ready
Azure PEZ is **IRAP PROTECTED assessed**, making it suitable for Australian government workloads. AWS's IRAP status for their Perth Local Zone remains unclear.

### Data Sovereignty
With Premium Blob Storage, Azure SQL Managed Instance, and Azure Key Vault all available locally, data can remain entirely within Western Australia — a critical requirement for data sovereignty and compliance.

{: .note }
> AWS Local Zones are compute-only extensions. Azure PEZ is a full-service local cloud — with storage, managed databases, desktop virtualisation, and built-in disaster recovery to the Sydney region.
