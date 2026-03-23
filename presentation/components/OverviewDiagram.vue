<template>
<div class="ov-wrap">
  <div class="ov-region">
    <div class="ov-region-label">Azure Region (Australia East)</div>
    <div class="ov-box ov-cp">
      <div class="ov-box-title">Control Plane</div>
      <div class="ov-box-sub">Management · Identity · Monitoring</div>
    </div>
  </div>
  <div class="ov-arrow-h">
    <div class="ov-arrow-line-h"><div class="ov-dot-h"></div></div>
  </div>
  <div class="ov-region ov-ez-region">
    <div class="ov-region-label ov-ez-label">Azure Extended Zone (Perth)</div>
    <div class="ov-box ov-dp">
      <div class="ov-box-title">Data Plane</div>
      <div class="ov-box-sub">VMs · Containers · Storage</div>
    </div>
  </div>
</div>
<div class="ov-net-bar">
  <div class="ov-net-dot"></div>
  <div class="ov-net-dot ov-net-dot-2"></div>
  <span>Microsoft Global Network</span>
</div>
<div class="ov-bottom">
  <div class="ov-bnode">On-Premises<br/><small>Perth, WA</small></div>
  <div class="ov-bnode">End Users<br/><small>Low latency</small></div>
  <div class="ov-bnode ov-bnode-az">Compute</div>
  <div class="ov-bnode ov-bnode-az">Storage</div>
  <div class="ov-bnode ov-bnode-az">Networking</div>
</div>
</template>

<style scoped>
.ov-wrap{display:flex;align-items:stretch;gap:0;margin-top:.3em}
.ov-region{flex:1;border:1px dashed #aaa;border-radius:6px;padding:.4em .5em;position:relative}
.ov-ez-region{border:1.5px solid #0078d4;border-style:solid}
.ov-region-label{font-size:.45em;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.04em;margin-bottom:.3em}
.ov-ez-label{color:#0078d4}
.ov-box{border-radius:5px;padding:.35em .5em;border:1px solid #ccc;background:#fff}
.ov-cp .ov-box-title{color:#005a9e}
.ov-dp{background:#deecf9;border-color:#0078d4}
.ov-dp .ov-box-title{color:#005a9e}
.ov-box-title{font-size:.55em;font-weight:700}
.ov-box-sub{font-size:.4em;color:#888;margin-top:.1em}
.ov-arrow-h{display:flex;align-items:center;width:40px;flex-shrink:0;justify-content:center}
.ov-arrow-line-h{width:100%;height:2px;background:linear-gradient(90deg,#00b7c3,#0078d4);position:relative;overflow:visible}
.ov-dot-h{position:absolute;top:-2.5px;width:6px;height:6px;border-radius:50%;background:#00b7c3;box-shadow:0 0 4px #00b7c3;animation:dh 1.8s linear infinite}
@keyframes dh{0%{left:-6px;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:100%;opacity:0}}
.ov-net-bar{margin-top:.3em;background:linear-gradient(90deg,rgba(0,183,195,.12),rgba(0,120,212,.12));border:1px solid rgba(0,120,212,.25);border-radius:4px;padding:.2em .5em;text-align:center;font-size:.45em;font-weight:600;color:#0078d4;position:relative;overflow:hidden}
.ov-net-dot{position:absolute;top:50%;width:5px;height:5px;border-radius:50%;background:#00b7c3;transform:translateY(-50%);animation:dn 3s linear infinite}
.ov-net-dot-2{animation-delay:1s;background:#0078d4}
@keyframes dn{0%{left:-5px;opacity:0}10%{opacity:.8}90%{opacity:.8}100%{left:100%;opacity:0}}
.ov-bottom{display:flex;gap:.3em;margin-top:.3em}
.ov-bnode{flex:1;border:1px solid #ccc;border-radius:4px;padding:.2em;text-align:center;font-size:.4em;font-weight:600;color:#333;background:#fff}
.ov-bnode small{font-weight:400;color:#888;font-size:.85em}
.ov-bnode-az{border-color:#0078d4;color:#0078d4}
:global(html.dark) .ov-region{border-color:#555}
:global(html.dark) .ov-box{background:#2a2a2a;border-color:#555}
:global(html.dark) .ov-dp{background:#0f2440;border-color:#0078d4}
:global(html.dark) .ov-region-label{color:#777}
:global(html.dark) .ov-box-sub{color:#999}
:global(html.dark) .ov-bnode{background:#2a2a2a;border-color:#555;color:#ddd}
:global(html.dark) .ov-bnode small{color:#999}
:global(html.dark) .ov-bnode-az{border-color:#4db8ff;color:#4db8ff}
</style>
