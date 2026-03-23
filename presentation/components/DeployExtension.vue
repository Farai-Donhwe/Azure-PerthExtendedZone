<template>
<div class="de-diagram">
  <div class="de-node de-gray">Remote Location</div>
  <div class="de-conn"><div class="de-line-v"><div class="de-dot-down"></div></div></div>
  <div class="de-node de-blue">Internet</div>
  <div class="de-row">
    <div class="de-side-path">
      <div class="de-side-line"><div class="de-dot-up"></div></div>
      <div class="de-side-line"><div class="de-dot-up de-dot-up-2"></div></div>
    </div>
    <div class="de-center-col">
      <div class="de-conn"><div class="de-line-v"><div class="de-dot-down"></div></div></div>
      <div class="de-node de-gray">VPN</div>
      <div class="de-conn"><div class="de-line-v de-line-az"><div class="de-dot-down de-dot-az"></div></div></div>
    </div>
  </div>
  <div class="de-bottom">
    <div class="de-node de-gray de-sm">On-Premise DC</div>
    <div class="de-conn-h"><div class="de-line-h de-line-az"><div class="de-dot-right de-dot-az"></div></div></div>
    <div class="de-node de-azure de-sm">ExpressRoute</div>
    <div class="de-conn-h"><div class="de-line-h de-line-az"><div class="de-dot-right de-dot-az"></div></div></div>
    <div class="de-node de-azure-strong de-sm">Azure EZ vNet</div>
    <div class="de-peer">
      <div class="de-peer-arrows">
        <div class="de-line-h de-line-grn"><div class="de-dot-right de-dot-grn"></div></div>
        <div class="de-line-h de-line-grn"><div class="de-dot-left de-dot-grn"></div></div>
      </div>
      <div class="de-peer-label">vNet Peering</div>
    </div>
    <div class="de-node de-green de-sm">Region vNet</div>
  </div>
  <div class="de-footnote">Private: ExpressRoute · Public: Std LB · VPN (ISV) · vNet Peering to Region</div>
</div>
</template>

<style scoped>
.de-diagram{display:flex;flex-direction:column;align-items:center;gap:0;font-family:'Segoe UI',sans-serif;font-size:.65em}
.de-node{padding:.25em .55em;border-radius:5px;font-weight:600;text-align:center;font-size:.85em;white-space:nowrap}
.de-gray{background:var(--azure-gray-100,#f5f5f5);border:1.5px solid var(--azure-gray-300,#d2d2d2);color:var(--azure-gray-700,#3b3b3b)}
.de-blue{background:var(--azure-gray-100,#f5f5f5);border:1.5px solid #0078d4;color:#0078d4}
.de-azure{background:#deecf9;border:1.5px solid #0078d4;color:#005a9e}
.de-azure-strong{background:#deecf9;border:2px solid #0078d4;color:#005a9e;font-weight:700}
.de-green{background:#e8f4e8;border:2px solid #107c10;color:#0b5e0b;font-weight:700}
.de-sm{font-size:.7em;padding:.2em .4em}
.de-conn{display:flex;justify-content:center;height:16px}
.de-line-v{width:2px;height:100%;background:#aaa;position:relative;overflow:visible}
.de-line-az{background:#0078d4}
.de-dot-down{position:absolute;left:-2px;width:4px;height:4px;border-radius:50%;background:#00b7c3;box-shadow:0 0 3px #00b7c3;animation:ded 1.3s ease-in-out infinite}
.de-dot-az{background:#0078d4;box-shadow:0 0 3px #0078d4}
@keyframes ded{0%{top:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{top:100%;opacity:0}}
.de-dot-up{position:absolute;left:-2px;width:4px;height:4px;border-radius:50%;background:#00b7c3;box-shadow:0 0 3px #00b7c3;animation:deu 1.8s ease-in-out infinite}
.de-dot-up-2{animation-delay:.6s}
@keyframes deu{0%{bottom:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{bottom:100%;opacity:0}}
.de-row{display:flex;align-items:stretch;width:100%;position:relative}
.de-side-path{position:absolute;left:18%;display:flex;gap:6px;height:100%}
.de-side-line{width:2px;height:100%;background:#aaa;position:relative;overflow:visible}
.de-center-col{display:flex;flex-direction:column;align-items:center;flex:1}
.de-bottom{display:flex;align-items:center;gap:0;margin-top:.15em}
.de-conn-h{width:12px;display:flex;align-items:center}
.de-line-h{height:2px;width:100%;background:#aaa;position:relative;overflow:visible}
.de-line-grn{background:#107c10}
.de-dot-right{position:absolute;top:-2px;width:4px;height:4px;border-radius:50%;background:#00b7c3;box-shadow:0 0 3px #00b7c3;animation:der .9s ease-in-out infinite}
.de-dot-grn{background:#107c10;box-shadow:0 0 3px #107c10}
.de-dot-left{position:absolute;top:-2px;width:4px;height:4px;border-radius:50%;background:#107c10;box-shadow:0 0 3px #107c10;animation:del .9s ease-in-out infinite .3s}
@keyframes der{0%{left:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:100%;opacity:0}}
@keyframes del{0%{right:-4px;opacity:0;left:auto}15%{opacity:1}85%{opacity:1}100%{right:100%;opacity:0;left:auto}}
.de-peer{display:flex;flex-direction:column;align-items:center;width:18px}
.de-peer-arrows{display:flex;flex-direction:column;gap:3px;width:100%}
.de-peer-label{font-size:.5em;color:#107c10;font-weight:500;white-space:nowrap;margin-top:1px}
.de-footnote{font-size:.5em;color:#888;margin-top:.3em;text-align:center}
</style>
