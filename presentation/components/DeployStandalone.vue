<template>
<div class="ds-diagram">
  <div class="ds-node ds-gray">Remote Location</div>
  <div class="ds-conn"><div class="ds-line-v"><div class="ds-dot-down"></div></div></div>
  <div class="ds-node ds-blue">Internet</div>
  <div class="ds-row">
    <div class="ds-side-path">
      <div class="ds-side-line"><div class="ds-dot-up"></div></div>
      <div class="ds-side-line"><div class="ds-dot-up ds-dot-up-2"></div></div>
    </div>
    <div class="ds-center-col">
      <div class="ds-conn"><div class="ds-line-v"><div class="ds-dot-down"></div></div></div>
      <div class="ds-node ds-gray">VPN</div>
      <div class="ds-conn"><div class="ds-line-v ds-line-az"><div class="ds-dot-down ds-dot-az"></div></div></div>
    </div>
  </div>
  <div class="ds-bottom">
    <div class="ds-node ds-gray ds-sm">On-Premise DC</div>
    <div class="ds-conn-h"><div class="ds-line-h ds-line-az"><div class="ds-dot-right ds-dot-az"></div></div></div>
    <div class="ds-node ds-azure ds-sm">ExpressRoute</div>
    <div class="ds-conn-h"><div class="ds-line-h ds-line-az"><div class="ds-dot-right ds-dot-az"></div></div></div>
    <div class="ds-node ds-azure-strong ds-sm">Azure EZ vNet</div>
  </div>
  <div class="ds-footnote">Private: ExpressRoute · Public: Std LB · VPN (ISV)</div>
</div>
</template>

<style scoped>
.ds-diagram{display:flex;flex-direction:column;align-items:center;gap:0;font-family:'Segoe UI',sans-serif;font-size:.7em}
.ds-node{padding:.3em .7em;border-radius:5px;font-weight:600;text-align:center;font-size:.85em;white-space:nowrap}
.ds-gray{background:var(--azure-gray-100,#f5f5f5);border:1.5px solid var(--azure-gray-300,#d2d2d2);color:var(--azure-gray-700,#3b3b3b)}
.ds-blue{background:var(--azure-gray-100,#f5f5f5);border:1.5px solid #0078d4;color:#0078d4}
.ds-azure{background:#deecf9;border:1.5px solid #0078d4;color:#005a9e}
.ds-azure-strong{background:#deecf9;border:2px solid #0078d4;color:#005a9e;font-weight:700}
.ds-sm{font-size:.75em;padding:.25em .5em}
.ds-conn{display:flex;justify-content:center;height:18px}
.ds-line-v{width:2px;height:100%;background:#aaa;position:relative;overflow:visible}
.ds-line-az{background:#0078d4}
.ds-dot-down{position:absolute;left:-2.5px;width:5px;height:5px;border-radius:50%;background:#00b7c3;box-shadow:0 0 4px #00b7c3;animation:dd 1.3s ease-in-out infinite}
.ds-dot-az{background:#0078d4;box-shadow:0 0 4px #0078d4}
@keyframes dd{0%{top:-5px;opacity:0}15%{opacity:1}85%{opacity:1}100%{top:100%;opacity:0}}
.ds-dot-up{position:absolute;left:-2.5px;width:5px;height:5px;border-radius:50%;background:#00b7c3;box-shadow:0 0 4px #00b7c3;animation:du 1.8s ease-in-out infinite}
.ds-dot-up-2{animation-delay:.6s}
@keyframes du{0%{bottom:-5px;opacity:0}15%{opacity:1}85%{opacity:1}100%{bottom:100%;opacity:0}}
.ds-row{display:flex;align-items:stretch;width:100%}
.ds-side-path{position:absolute;left:20%;display:flex;gap:8px;height:100%}
.ds-side-line{width:2px;height:100%;background:#aaa;position:relative;overflow:visible}
.ds-center-col{display:flex;flex-direction:column;align-items:center;flex:1}
.ds-row{position:relative}
.ds-bottom{display:flex;align-items:center;gap:0;margin-top:.2em}
.ds-conn-h{width:16px;display:flex;align-items:center}
.ds-line-h{height:2px;width:100%;background:#aaa;position:relative;overflow:visible}
.ds-dot-right{position:absolute;top:-2.5px;width:5px;height:5px;border-radius:50%;background:#00b7c3;box-shadow:0 0 4px #00b7c3;animation:dr .9s ease-in-out infinite}
@keyframes dr{0%{left:-5px;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:100%;opacity:0}}
.ds-footnote{font-size:.55em;color:#888;margin-top:.4em;text-align:center}
</style>
