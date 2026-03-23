<template>
<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <marker id="d1a" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" fill="#0078d4"/></marker>
    <marker id="d1g" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" :fill="dim"/></marker>
  </defs>

  <rect x="2" y="2" width="336" height="256" rx="6" :fill="bg" :stroke="bdr" stroke-width="0.8"/>

  <!-- Remote Location -->
  <rect x="120" y="10" width="100" height="28" rx="5" :fill="box" :stroke="bdr" stroke-width="1"/>
  <text x="170" y="28" text-anchor="middle" :fill="txt" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">Remote Location</text>

  <!-- Arrow down -->
  <line x1="170" y1="38" x2="170" y2="52" :stroke="bdr" stroke-width="1" marker-end="url(#d1g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="170;170" dur="1.2s" repeatCount="indefinite"/><animate attributeName="cy" values="40;50" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.9;0" dur="1.2s" repeatCount="indefinite"/></circle>

  <!-- Internet -->
  <rect x="120" y="54" width="100" height="28" rx="5" :fill="box" stroke="#0078d4" stroke-width="1"/>
  <text x="170" y="72" text-anchor="middle" fill="#0078d4" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">Internet</text>

  <!-- On-Prem → Internet (left path) -->
  <path d="M 65,190 L 65,68 L 117,68" fill="none" :stroke="bdr" stroke-width="1" marker-end="url(#d1g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="65;65;114" dur="2.2s" repeatCount="indefinite"/><animate attributeName="cy" values="186;71;71" dur="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.8;.8;0" dur="2.2s" repeatCount="indefinite"/></circle>

  <!-- Arrow Internet → VPN -->
  <line x1="170" y1="82" x2="170" y2="108" :stroke="bdr" stroke-width="1" marker-end="url(#d1g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="170;170" dur="1.2s" repeatCount="indefinite"/><animate attributeName="cy" values="84;106" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="1.2s" repeatCount="indefinite"/></circle>

  <!-- VPN -->
  <rect x="120" y="110" width="100" height="28" rx="5" :fill="box" :stroke="bdr" stroke-width="1"/>
  <text x="170" y="128" text-anchor="middle" :fill="txt" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">VPN</text>

  <!-- On-Prem → VPN (left path) -->
  <path d="M 85,190 L 85,124 L 117,124" fill="none" :stroke="bdr" stroke-width="1" marker-end="url(#d1g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="85;85;114" dur="1.8s" begin=".4s" repeatCount="indefinite"/><animate attributeName="cy" values="186;127;127" dur="1.8s" begin=".4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.8;.8;0" dur="1.8s" begin=".4s" repeatCount="indefinite"/></circle>

  <!-- On-Premise Datacentre -->
  <rect x="16" y="192" width="112" height="32" rx="5" :fill="box" :stroke="bdr" stroke-width="1"/>
  <text x="72" y="210" text-anchor="middle" :fill="txt" font-size="7.5" font-weight="600" font-family="Segoe UI,sans-serif">On-Premise DC</text>

  <!-- ExpressRoute -->
  <rect x="140" y="192" width="88" height="32" rx="5" fill="#deecf9" stroke="#0078d4" stroke-width="1"/>
  <text x="184" y="212" text-anchor="middle" fill="#005a9e" font-size="7.5" font-weight="600" font-family="Segoe UI,sans-serif">ExpressRoute</text>

  <!-- Arrow On-Prem → ER -->
  <line x1="128" y1="208" x2="137" y2="208" stroke="#0078d4" stroke-width="1.2" marker-end="url(#d1a)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="130;135" dur="0.8s" repeatCount="indefinite"/><animate attributeName="cy" values="208;208" dur="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="0.8s" repeatCount="indefinite"/></circle>

  <!-- Azure EZ vNet -->
  <rect x="240" y="186" width="90" height="42" rx="6" fill="#deecf9" stroke="#0078d4" stroke-width="1.5"/>
  <text x="285" y="204" text-anchor="middle" fill="#005a9e" font-size="7" font-weight="700" font-family="Segoe UI,sans-serif">Azure Extended</text>
  <text x="285" y="216" text-anchor="middle" fill="#005a9e" font-size="7" font-weight="700" font-family="Segoe UI,sans-serif">Zone vNet</text>

  <!-- Arrow ER → EZ -->
  <line x1="228" y1="208" x2="237" y2="208" stroke="#0078d4" stroke-width="1.2" marker-end="url(#d1a)"/>
  <circle r="2.5" fill="#00b7c3"><animate attributeName="cx" values="230;235" dur="0.8s" begin=".3s" repeatCount="indefinite"/><animate attributeName="cy" values="208;208" dur="0.8s" begin=".3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="0.8s" begin=".3s" repeatCount="indefinite"/></circle>

  <!-- Arrow VPN → EZ -->
  <path d="M 220,124 L 285,124 L 285,183" fill="none" stroke="#0078d4" stroke-width="1" marker-end="url(#d1a)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="224;285;285" dur="1.8s" repeatCount="indefinite"/><animate attributeName="cy" values="124;124;180" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.8;.8;0" dur="1.8s" repeatCount="indefinite"/></circle>

  <!-- Labels -->
  <text x="16" y="244" :fill="dim" font-size="5.5" font-family="Segoe UI,sans-serif">Private: ExpressRoute · Public: Standard LB · VPN (ISV)</text>
</svg>
</template>
<script setup>
import { computed } from 'vue'
const dark = computed(() => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
const bg = computed(() => dark.value ? '#1e1e1e' : '#fff')
const bdr = computed(() => dark.value ? '#555' : '#aaa')
const box = computed(() => dark.value ? '#2a2a2a' : '#fff')
const txt = computed(() => dark.value ? '#ddd' : '#222')
const dim = computed(() => dark.value ? '#888' : '#888')
</script>
