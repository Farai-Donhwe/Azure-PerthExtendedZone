<template>
<div class="de">
  <div class="de-grid">
    <!-- Left column: On-Premise + Remote -->
    <div class="de-left">
      <div class="n n-gray n-sm">Remote<br>Location</div>
      <div class="cv"><div class="lv"><div class="dot dot-d"></div></div></div>
      <div class="n n-gray n-sm n-dc">On-Premise<br>Datacentre</div>
    </div>

    <!-- Center: 3 connection paths -->
    <div class="de-paths">
      <div class="path">
        <div class="ch"><div class="lh"><div class="dot dot-r"></div></div></div>
        <div class="n n-blue n-sm">Internet</div>
        <div class="ch"><div class="lh"><div class="dot dot-r dot-d2"></div></div></div>
      </div>
      <div class="path">
        <div class="ch"><div class="lh"><div class="dot dot-r dot-d3"></div></div></div>
        <div class="n n-gray n-sm">VPN¹</div>
        <div class="ch"><div class="lh"><div class="dot dot-r dot-d4"></div></div></div>
      </div>
      <div class="path">
        <div class="ch"><div class="lh lh-az"><div class="dot dot-r dot-az"></div></div></div>
        <div class="n n-azure n-sm">ExpressRoute</div>
        <div class="ch"><div class="lh lh-az"><div class="dot dot-r dot-az dot-d5"></div></div></div>
      </div>
    </div>

    <!-- Right: Azure EZ vNet + Peering + Region vNet -->
    <div class="de-right">
      <div class="n n-az-strong n-sm">Azure EZ<br>vNet</div>
      <div class="peer">
        <div class="peer-line"><div class="dot dot-r dot-grn"></div></div>
        <div class="peer-line"><div class="dot dot-l dot-grn"></div></div>
        <div class="peer-label">vNet Peering</div>
      </div>
      <div class="n n-green n-sm">Parent Region<br>vNet</div>
    </div>
  </div>
  <div class="de-foot">Private: ExpressRoute · Public: Std LB · VPN (ISV¹) · vNet Peering to Region</div>
</div>
</template>

<style scoped>
.de{font-family:'Segoe UI',sans-serif;font-size:.64em}
.n{padding:.2em .45em;border-radius:4px;font-weight:600;text-align:center;font-size:.78em;white-space:nowrap;line-height:1.3}
.n-sm{font-size:.72em}
.n-gray{background:#f5f5f5;border:1.5px solid #d2d2d2;color:#3b3b3b}
.n-blue{background:#f5f5f5;border:1.5px solid #0078d4;color:#0078d4}
.n-azure{background:#deecf9;border:1.5px solid #0078d4;color:#005a9e}
.n-az-strong{background:#deecf9;border:2px solid #0078d4;color:#005a9e;font-weight:700}
.n-green{background:#e8f4e8;border:2px solid #107c10;color:#0b5e0b;font-weight:700}
.n-dc{white-space:normal}
.de-grid{display:grid;grid-template-columns:auto 1fr auto;gap:3px;align-items:center}
.de-left{display:flex;flex-direction:column;align-items:center;gap:0}
.de-right{display:flex;align-items:center;gap:0}
.de-paths{display:flex;flex-direction:column;gap:4px}
.path{display:flex;align-items:center}
.cv{display:flex;justify-content:center;height:10px}
.lv{width:1.5px;height:100%;background:#aaa;position:relative;overflow:visible}
.ch{width:16px;display:flex;align-items:center;flex-shrink:0}
.lh{height:1.5px;width:100%;background:#aaa;position:relative;overflow:visible}
.lh-az{background:#0078d4}
.dot{position:absolute;width:4px;height:4px;border-radius:50%}
.dot-d{background:#00b7c3;box-shadow:0 0 3px #00b7c3;left:-1.5px;animation:dd 1.4s ease-in-out infinite}
.dot-r{background:#00b7c3;box-shadow:0 0 3px #00b7c3;top:-1.5px;animation:dr 1.2s ease-in-out infinite}
.dot-l{background:#107c10;box-shadow:0 0 3px #107c10;top:-1.5px;animation:dl 1.2s ease-in-out infinite .4s}
.dot-az{background:#0078d4;box-shadow:0 0 3px #0078d4}
.dot-grn{background:#107c10;box-shadow:0 0 3px #107c10}
.dot-d2{animation-delay:.3s}.dot-d3{animation-delay:.5s}.dot-d4{animation-delay:.8s}.dot-d5{animation-delay:.2s}
@keyframes dd{0%{top:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{top:100%;opacity:0}}
@keyframes dr{0%{left:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:100%;opacity:0}}
@keyframes dl{0%{left:calc(100% + 4px);opacity:0}15%{opacity:1}85%{opacity:1}100%{left:-4px;opacity:0}}
.peer{display:flex;flex-direction:column;align-items:center;width:22px;gap:1px}
.peer-line{height:1.5px;width:100%;background:#107c10;position:relative;overflow:visible}
.peer-label{font-size:.45em;color:#107c10;font-weight:600;white-space:nowrap}
.de-foot{font-size:.48em;color:#888;text-align:center;margin-top:.25em}
</style>
