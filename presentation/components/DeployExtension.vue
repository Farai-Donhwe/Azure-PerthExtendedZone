<template>
<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <marker id="d2a" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" fill="#0078d4"/></marker>
    <marker id="d2g" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" :fill="dim"/></marker>
    <marker id="d2grn" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" fill="#107c10"/></marker>
  </defs>

  <rect x="2" y="2" width="376" height="256" rx="6" :fill="bg" :stroke="bdr" stroke-width="0.8"/>

  <!-- Remote Location -->
  <rect x="110" y="10" width="100" height="28" rx="5" :fill="box" :stroke="bdr" stroke-width="1"/>
  <text x="160" y="28" text-anchor="middle" :fill="txt" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">Remote Location</text>

  <!-- Arrow down -->
  <line x1="160" y1="38" x2="160" y2="52" :stroke="bdr" stroke-width="1" marker-end="url(#d2g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="160;160" dur="1.2s" repeatCount="indefinite"/><animate attributeName="cy" values="40;50" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="1.2s" repeatCount="indefinite"/></circle>

  <!-- Internet -->
  <rect x="110" y="54" width="100" height="28" rx="5" :fill="box" stroke="#0078d4" stroke-width="1"/>
  <text x="160" y="72" text-anchor="middle" fill="#0078d4" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">Internet</text>

  <!-- On-Prem → Internet -->
  <path d="M 55,186 L 55,68 L 107,68" fill="none" :stroke="bdr" stroke-width="1" marker-end="url(#d2g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="55;55;104" dur="2.2s" repeatCount="indefinite"/><animate attributeName="cy" values="182;71;71" dur="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.8;.8;0" dur="2.2s" repeatCount="indefinite"/></circle>

  <!-- Internet → VPN -->
  <line x1="160" y1="82" x2="160" y2="108" :stroke="bdr" stroke-width="1" marker-end="url(#d2g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="160;160" dur="1.2s" repeatCount="indefinite"/><animate attributeName="cy" values="84;106" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="1.2s" repeatCount="indefinite"/></circle>

  <!-- VPN -->
  <rect x="110" y="110" width="100" height="28" rx="5" :fill="box" :stroke="bdr" stroke-width="1"/>
  <text x="160" y="128" text-anchor="middle" :fill="txt" font-size="8" font-weight="600" font-family="Segoe UI,sans-serif">VPN</text>

  <!-- On-Prem → VPN -->
  <path d="M 75,186 L 75,124 L 107,124" fill="none" :stroke="bdr" stroke-width="1" marker-end="url(#d2g)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="75;75;104" dur="1.8s" begin=".4s" repeatCount="indefinite"/><animate attributeName="cy" values="182;127;127" dur="1.8s" begin=".4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.8;.8;0" dur="1.8s" begin=".4s" repeatCount="indefinite"/></circle>

  <!-- On-Premise DC -->
  <rect x="12" y="188" width="100" height="32" rx="5" :fill="box" :stroke="bdr" stroke-width="1"/>
  <text x="62" y="206" text-anchor="middle" :fill="txt" font-size="7.5" font-weight="600" font-family="Segoe UI,sans-serif">On-Premise DC</text>

  <!-- ExpressRoute -->
  <rect x="124" y="188" width="80" height="32" rx="5" fill="#deecf9" stroke="#0078d4" stroke-width="1"/>
  <text x="164" y="208" text-anchor="middle" fill="#005a9e" font-size="7.5" font-weight="600" font-family="Segoe UI,sans-serif">ExpressRoute</text>

  <!-- On-Prem → ER -->
  <line x1="112" y1="204" x2="121" y2="204" stroke="#0078d4" stroke-width="1.2" marker-end="url(#d2a)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="114;119" dur="0.8s" repeatCount="indefinite"/><animate attributeName="cy" values="204;204" dur="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="0.8s" repeatCount="indefinite"/></circle>

  <!-- Azure EZ vNet -->
  <rect x="216" y="182" width="78" height="42" rx="6" fill="#deecf9" stroke="#0078d4" stroke-width="1.5"/>
  <text x="255" y="200" text-anchor="middle" fill="#005a9e" font-size="6.5" font-weight="700" font-family="Segoe UI,sans-serif">Azure Extended</text>
  <text x="255" y="212" text-anchor="middle" fill="#005a9e" font-size="6.5" font-weight="700" font-family="Segoe UI,sans-serif">Zone vNet</text>

  <!-- ER → EZ -->
  <line x1="204" y1="204" x2="213" y2="204" stroke="#0078d4" stroke-width="1.2" marker-end="url(#d2a)"/>
  <circle r="2.5" fill="#00b7c3"><animate attributeName="cx" values="206;211" dur="0.8s" begin=".3s" repeatCount="indefinite"/><animate attributeName="cy" values="204;204" dur="0.8s" begin=".3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="0.8s" begin=".3s" repeatCount="indefinite"/></circle>

  <!-- Region vNet -->
  <rect x="306" y="182" width="62" height="42" rx="6" fill="#e8f4e8" stroke="#107c10" stroke-width="1.5"/>
  <text x="337" y="200" text-anchor="middle" fill="#0b5e0b" font-size="6.5" font-weight="700" font-family="Segoe UI,sans-serif">Region</text>
  <text x="337" y="212" text-anchor="middle" fill="#0b5e0b" font-size="6.5" font-weight="700" font-family="Segoe UI,sans-serif">vNet</text>

  <!-- EZ ↔ Region (bidirectional) -->
  <line x1="294" y1="198" x2="303" y2="198" stroke="#107c10" stroke-width="1" marker-end="url(#d2grn)"/>
  <line x1="303" y1="210" x2="294" y2="210" stroke="#107c10" stroke-width="1" marker-end="url(#d2grn)"/>
  <circle r="1.5" fill="#107c10"><animate attributeName="cx" values="296;301" dur="1s" repeatCount="indefinite"/><animate attributeName="cy" values="198;198" dur="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="1s" repeatCount="indefinite"/></circle>
  <circle r="1.5" fill="#107c10"><animate attributeName="cx" values="301;296" dur="1s" begin=".3s" repeatCount="indefinite"/><animate attributeName="cy" values="210;210" dur="1s" begin=".3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="1s" begin=".3s" repeatCount="indefinite"/></circle>
  <text x="299" y="178" text-anchor="middle" fill="#107c10" font-size="5.5" font-weight="500" font-family="Segoe UI,sans-serif">vNet Peering</text>

  <!-- VPN → EZ -->
  <path d="M 210,124 L 255,124 L 255,179" fill="none" stroke="#0078d4" stroke-width="1" marker-end="url(#d2a)"/>
  <circle r="2" fill="#00b7c3"><animate attributeName="cx" values="214;255;255" dur="1.8s" repeatCount="indefinite"/><animate attributeName="cy" values="124;124;176" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.8;.8;0" dur="1.8s" repeatCount="indefinite"/></circle>

  <!-- Label -->
  <text x="12" y="240" :fill="dim" font-size="5.5" font-family="Segoe UI,sans-serif">Private: ExpressRoute · Public: Standard LB · VPN (ISV) · vNet Peering to Region</text>
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
