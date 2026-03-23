<template>
<svg :viewBox="'0 0 ' + w + ' ' + h" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="ov-g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00b7c3"/><stop offset="100%" stop-color="#0078d4"/></linearGradient>
    <marker id="ov-ar" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6z" fill="#0078d4"/></marker>
  </defs>

  <!-- Region box -->
  <rect x="8" y="8" :width="w/2-16" :height="h-16" rx="6" fill="none" :stroke="dim" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="16" y="22" :fill="dim" font-size="7" font-weight="600" font-family="Segoe UI,sans-serif">AZURE REGION (AUSTRALIA EAST)</text>

  <!-- EZ box -->
  <rect :x="w/2+8" y="8" :width="w/2-16" :height="h-16" rx="6" fill="none" stroke="#0078d4" stroke-width="1.2"/>
  <text :x="w/2+16" y="22" fill="#0078d4" font-size="7" font-weight="600" font-family="Segoe UI,sans-serif">AZURE EXTENDED ZONE (PERTH)</text>

  <!-- Control Plane -->
  <rect x="20" y="32" width="160" height="40" rx="5" :fill="box" :stroke="dim" stroke-width="1"/>
  <text x="100" y="48" text-anchor="middle" :fill="pri" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">Control Plane</text>
  <text x="100" y="60" text-anchor="middle" :fill="dim" font-size="6" font-family="Segoe UI,sans-serif">Management, Identity, Monitoring</text>

  <!-- Data Plane -->
  <rect :x="w/2+20" y="32" width="160" height="40" rx="5" fill="#deecf9" stroke="#0078d4" stroke-width="1"/>
  <text :x="w/2+100" y="48" text-anchor="middle" fill="#005a9e" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">Data Plane</text>
  <text :x="w/2+100" y="60" text-anchor="middle" fill="#0078d4" font-size="6" font-family="Segoe UI,sans-serif">VMs, Containers, Storage</text>

  <!-- Arrow CP → DP -->
  <line x1="180" y1="52" x2="w/2+16" y2="52" stroke="url(#ov-g)" stroke-width="1.5" stroke-dasharray="3,2" :x2="w/2+16"/>
  <polygon :points="(w/2+12)+',49 '+(w/2+20)+',52 '+(w/2+12)+',55'" fill="#0078d4"/>
  <circle r="2.5" fill="#00b7c3"><animate attributeName="cx" :values="'184;'+(w/2+12)" dur="2s" repeatCount="indefinite"/><animate attributeName="cy" values="52;52" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/></circle>

  <!-- Global Network bar -->
  <rect x="8" y="82" :width="w-16" height="20" rx="4" fill="url(#ov-g)" opacity="0.12"/>
  <rect x="8" y="82" :width="w-16" height="20" rx="4" fill="none" stroke="url(#ov-g)" stroke-width="0.8"/>
  <text :x="w/2" y="95" text-anchor="middle" fill="#0078d4" font-size="6.5" font-weight="600" font-family="Segoe UI,sans-serif">Microsoft Global Network</text>
  <circle r="2" fill="#00b7c3" opacity="0.8"><animate attributeName="cx" :values="'14;'+(w-14)" dur="3.5s" repeatCount="indefinite"/><animate attributeName="cy" values="92;92" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.5s" repeatCount="indefinite"/></circle>
  <circle r="2" fill="#0078d4" opacity="0.8"><animate attributeName="cx" :values="'14;'+(w-14)" dur="3.5s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="cy" values="92;92" dur="3.5s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.5s" begin="1.2s" repeatCount="indefinite"/></circle>

  <!-- Bottom: On-Prem & Users | Services -->
  <rect x="20" y="112" width="72" height="30" rx="4" :fill="box" :stroke="dim" stroke-width="0.8"/>
  <text x="56" y="125" text-anchor="middle" :fill="txt" font-size="6.5" font-weight="600" font-family="Segoe UI,sans-serif">On-Premises</text>
  <text x="56" y="134" text-anchor="middle" :fill="dim" font-size="5.5" font-family="Segoe UI,sans-serif">Perth, WA</text>

  <rect x="104" y="112" width="72" height="30" rx="4" :fill="box" :stroke="dim" stroke-width="0.8"/>
  <text x="140" y="125" text-anchor="middle" :fill="txt" font-size="6.5" font-weight="600" font-family="Segoe UI,sans-serif">End Users</text>
  <text x="140" y="134" text-anchor="middle" :fill="dim" font-size="5.5" font-family="Segoe UI,sans-serif">Low latency</text>

  <rect :x="w/2+20" y="112" width="48" height="30" rx="4" :fill="box" stroke="#0078d4" stroke-width="0.8"/>
  <text :x="w/2+44" y="128" text-anchor="middle" fill="#0078d4" font-size="5.5" font-weight="600" font-family="Segoe UI,sans-serif">Compute</text>

  <rect :x="w/2+74" y="112" width="48" height="30" rx="4" :fill="box" stroke="#0078d4" stroke-width="0.8"/>
  <text :x="w/2+98" y="128" text-anchor="middle" fill="#0078d4" font-size="5.5" font-weight="600" font-family="Segoe UI,sans-serif">Storage</text>

  <rect :x="w/2+128" y="112" width="48" height="30" rx="4" :fill="box" stroke="#0078d4" stroke-width="0.8"/>
  <text :x="w/2+152" y="128" text-anchor="middle" fill="#0078d4" font-size="5.5" font-weight="600" font-family="Segoe UI,sans-serif">Network</text>

  <!-- Vertical connectors to network bar -->
  <line x1="56" y1="112" x2="56" y2="102" :stroke="dim" stroke-width="0.8"/>
  <line x1="140" y1="112" x2="140" y2="102" :stroke="dim" stroke-width="0.8"/>
  <line :x1="w/2+44" y1="112" :x2="w/2+44" y2="102" stroke="#0078d4" stroke-width="0.8"/>
  <line :x1="w/2+98" y1="112" :x2="w/2+98" y2="102" stroke="#0078d4" stroke-width="0.8"/>
  <line :x1="w/2+152" y1="112" :x2="w/2+152" y2="102" stroke="#0078d4" stroke-width="0.8"/>
</svg>
</template>
<script setup>
import { computed } from 'vue'
const w = 400
const h = 152
const dark = computed(() => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
const box = computed(() => dark.value ? '#2a2a2a' : '#fff')
const dim = computed(() => dark.value ? '#666' : '#999')
const txt = computed(() => dark.value ? '#ddd' : '#222')
const pri = computed(() => dark.value ? '#8cc8ff' : '#005a9e')
</script>
