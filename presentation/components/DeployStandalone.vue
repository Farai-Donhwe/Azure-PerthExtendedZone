<template>
<div class="ds">
  <!-- Remote Location (top center) -->
  <div class="ds-top">
    <div class="ds-spacer"></div>
    <div class="ds-top-center">
      <div class="n n-gray">Remote Location</div>
      <div class="cv"><div class="lv"><div class="dot dot-d"></div></div></div>
    </div>
    <div class="ds-spacer"></div>
  </div>

  <!-- 3-path grid: On-Premise | Paths | Azure EZ vNet -->
  <div class="ds-grid">
    <!-- Left: On-Premise Datacentre -->
    <div class="ds-left">
      <div class="n n-gray n-dc">On-Premise<br>Datacentre</div>
    </div>

    <!-- Center: 3 horizontal paths stacked -->
    <div class="ds-paths">
      <!-- Path 1: Internet -->
      <div class="path">
        <div class="ch"><div class="lh"><div class="dot dot-r"></div></div></div>
        <div class="n n-blue">Internet</div>
        <div class="ch"><div class="lh"><div class="dot dot-r dot-r2"></div></div></div>
      </div>
      <!-- Path 2: VPN -->
      <div class="path">
        <div class="ch"><div class="lh"><div class="dot dot-r dot-r3"></div></div></div>
        <div class="n n-gray">VPN</div>
        <div class="ch"><div class="lh"><div class="dot dot-r dot-r4"></div></div></div>
      </div>
      <!-- Path 3: ExpressRoute -->
      <div class="path">
        <div class="ch"><div class="lh lh-az"><div class="dot dot-r dot-az"></div></div></div>
        <div class="n n-azure">ExpressRoute</div>
        <div class="ch"><div class="lh lh-az"><div class="dot dot-r dot-az dot-r5"></div></div></div>
      </div>
    </div>

    <!-- Right: Azure Extended Zone vNet -->
    <div class="ds-right">
      <div class="n n-az-strong">Azure Extended<br>Zone vNet</div>
    </div>
  </div>

  <div class="ds-foot">Private: ExpressRoute · Public: Std LB · VPN (ISV¹)</div>
</div>
</template>

<style scoped>
.ds { font-family: 'Segoe UI', sans-serif; font-size: .72em; }

/* Nodes */
.n { padding: .3em .6em; border-radius: 5px; font-weight: 600; text-align: center; font-size: .82em; white-space: nowrap; }
.n-gray { background: #f5f5f5; border: 1.5px solid #d2d2d2; color: #3b3b3b; }
.n-blue { background: #f5f5f5; border: 1.5px solid #0078d4; color: #0078d4; }
.n-azure { background: #deecf9; border: 1.5px solid #0078d4; color: #005a9e; }
.n-az-strong { background: #deecf9; border: 2px solid #0078d4; color: #005a9e; font-weight: 700; }
.n-dc { line-height: 1.3; white-space: normal; }

/* Top section: Remote Location → Internet */
.ds-top { display: flex; justify-content: center; margin-bottom: 0; }
.ds-top-center { display: flex; flex-direction: column; align-items: center; }
.ds-spacer { flex: 1; }

/* Vertical connector */
.cv { display: flex; justify-content: center; height: 16px; }
.lv { width: 1.5px; height: 100%; background: #aaa; position: relative; overflow: visible; }

/* Horizontal connector */
.ch { width: 20px; display: flex; align-items: center; flex-shrink: 0; }
.lh { height: 1.5px; width: 100%; background: #aaa; position: relative; overflow: visible; }
.lh-az { background: #0078d4; }

/* 3-path grid */
.ds-grid { display: grid; grid-template-columns: auto 1fr auto; gap: 4px; align-items: center; }
.ds-left, .ds-right { display: flex; align-items: center; }
.ds-paths { display: flex; flex-direction: column; gap: 6px; }
.path { display: flex; align-items: center; }

/* Animated dots */
.dot { position: absolute; width: 5px; height: 5px; border-radius: 50%; top: -2px; }
.dot-d { background: #00b7c3; box-shadow: 0 0 4px #00b7c3; left: -2px; animation: dd 1.4s ease-in-out infinite; }
.dot-r { background: #00b7c3; box-shadow: 0 0 4px #00b7c3; animation: dr 1.2s ease-in-out infinite; }
.dot-r2 { animation-delay: .3s; }
.dot-r3 { animation-delay: .5s; }
.dot-r4 { animation-delay: .8s; }
.dot-r5 { animation-delay: .2s; }
.dot-az { background: #0078d4; box-shadow: 0 0 4px #0078d4; }

@keyframes dd { 0% { top: -5px; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
@keyframes dr { 0% { left: -5px; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { left: 100%; opacity: 0; } }

.ds-foot { font-size: .52em; color: #888; text-align: center; margin-top: .4em; }
</style>
