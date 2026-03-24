<template>
<div class="d2">
  <!-- Step 1: Remote → Internet → EZ vNet -->
  <div class="d2-row">
    <div class="d2-c"></div>
    <div class="d2-c d2-vc">
      <div class="nd nd-std">Remote<br>Location</div>
      <div class="conn-v"><div class="line-v"><div class="pulse pulse-d"></div></div></div>
    </div>
    <div class="d2-c"></div>
    <div class="d2-c"></div>
  </div>

  <div class="d2-row">
    <div class="d2-c"></div>
    <div class="d2-c d2-vc">
      <div class="nd nd-cloud">Internet</div>
    </div>
    <div class="d2-c d2-hc">
      <div class="conn-h"><div class="line-h"><div class="pulse pulse-r"></div></div><span class="lbl">Public ingress</span></div>
    </div>
    <div class="d2-c"></div>
  </div>

  <!-- Step 2: On-prem → VPN → EZ vNet -->
  <div class="d2-row">
    <div class="d2-c"></div>
    <div class="d2-c d2-vc">
      <div class="nd nd-std">VPN</div>
    </div>
    <div class="d2-c d2-hc">
      <div class="conn-h"><div class="line-h"><div class="pulse pulse-r pulse-2"></div></div><span class="lbl">IPsec/IKE tunnel</span></div>
    </div>
    <div class="d2-c"></div>
  </div>

  <!-- Step 3: On-prem → ExpressRoute → EZ vNet  +  EZ vNet ↔ Region vNet -->
  <div class="d2-row d2-row-bot">
    <div class="d2-c">
      <div class="nd nd-std nd-wrap">On-Premise<br>Datacentre</div>
    </div>
    <div class="d2-c d2-hc">
      <div class="conn-h"><div class="line-h line-az"><div class="pulse pulse-r pulse-az"></div></div><span class="lbl lbl-az">Private circuit</span></div>
      <div class="nd nd-std">ExpressRoute</div>
      <div class="conn-h"><div class="line-h line-az"><div class="pulse pulse-r pulse-az pulse-3"></div></div><span class="lbl lbl-az">Private peering</span></div>
    </div>
    <div class="d2-c d2-vc">
      <div class="nd nd-az">Azure Extended<br>Zone vNet</div>
    </div>
    <div class="d2-c d2-hc">
      <div class="conn-h conn-bi">
        <div class="line-h line-grn"><div class="pulse pulse-r pulse-grn"></div></div>
        <div class="line-h line-grn"><div class="pulse pulse-l pulse-grn"></div></div>
        <span class="lbl lbl-grn">vNet peering</span>
      </div>
      <div class="nd nd-az">Region<br>vNet</div>
    </div>
  </div>

  <!-- Bracket: On-prem connects up to Internet & VPN -->
  <svg class="bracket-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M 18 88 L 18 12 L 30 12" fill="none" stroke="#bbb" stroke-width="1.2"/>
    <path d="M 18 88 L 18 50 L 30 50" fill="none" stroke="#bbb" stroke-width="1.2"/>
    <circle cx="18" cy="30" r="2" fill="#00b7c3"><animate attributeName="cy" values="88;12" dur="1.6s" repeatCount="indefinite"/></circle>
  </svg>

  <div class="foot">
    <span class="ft-item"><span class="ft-dot ft-az"></span> Private: ExpressRoute</span>
    <span class="ft-item"><span class="ft-dot ft-tl"></span> Public: Std LB / Internet</span>
    <span class="ft-item"><span class="ft-dot ft-grn"></span> Peering: Microsoft backbone</span>
    <span class="ft-item">¹ VPN via ISV solution</span>
  </div>
</div>
</template>

<style scoped>
.d2 { font-family: 'Segoe UI', sans-serif; font-size: .58em; position: relative; }

/* Nodes */
.nd { padding: .2em .5em; border-radius: 6px; font-weight: 600; text-align: center; font-size: .78em; white-space: nowrap; line-height: 1.25; }
.nd-std { background: #f5f5f5; border: 1.5px solid #d2d2d2; color: #3b3b3b; }
.nd-cloud { background: #f5f5f5; border: 1.5px dashed #0078d4; color: #0078d4; }
.nd-az { background: #deecf9; border: 2px solid #0078d4; color: #005a9e; font-weight: 700; }
.nd-wrap { white-space: normal; }

/* Grid */
.d2-row { display: grid; grid-template-columns: 68px 1fr 1fr 100px; gap: 2px; align-items: center; margin-bottom: 3px; }
.d2-row-bot { margin-bottom: 0; }
.d2-c { min-height: 18px; }
.d2-vc { display: flex; flex-direction: column; align-items: center; }
.d2-hc { display: flex; align-items: center; }

/* Vertical connector */
.conn-v { display: flex; justify-content: center; height: 8px; }
.line-v { width: 1.5px; height: 100%; background: #bbb; position: relative; overflow: visible; }

/* Horizontal connector with label */
.conn-h { display: flex; flex-direction: column; align-items: center; width: 100%; min-width: 18px; }
.conn-bi { gap: 1px; }
.line-h { height: 1.5px; width: 100%; background: #bbb; position: relative; overflow: visible; }
.line-az { background: #0078d4; }
.line-grn { background: #107c10; }

/* Labels on connections */
.lbl { font-size: .5em; color: #888; white-space: nowrap; margin-top: 1px; }
.lbl-az { color: #005a9e; }
.lbl-grn { color: #107c10; }

/* Animated pulses */
.pulse { position: absolute; width: 4px; height: 4px; border-radius: 50%; }
.pulse-d { background: #00b7c3; box-shadow: 0 0 3px #00b7c3; left: -1.5px; animation: pd 1.4s ease-in-out infinite; }
.pulse-r { background: #00b7c3; box-shadow: 0 0 3px #00b7c3; top: -1.5px; animation: pr 1.2s ease-in-out infinite; }
.pulse-l { background: #107c10; box-shadow: 0 0 3px #107c10; top: -1.5px; animation: pl 1.2s ease-in-out infinite .4s; }
.pulse-az { background: #0078d4; box-shadow: 0 0 3px #0078d4; }
.pulse-grn { background: #107c10; box-shadow: 0 0 3px #107c10; }
.pulse-2 { animation-delay: .4s; }
.pulse-3 { animation-delay: .7s; }

@keyframes pd { 0%{top:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{top:100%;opacity:0} }
@keyframes pr { 0%{left:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:100%;opacity:0} }
@keyframes pl { 0%{left:calc(100%);opacity:0}15%{opacity:1}85%{opacity:1}100%{left:-4px;opacity:0} }

/* SVG bracket: On-Prem connects up to Internet & VPN */
.bracket-svg { position: absolute; left: 0; top: 0; width: 72px; height: calc(100% - 16px); pointer-events: none; }

/* Footer legend */
.foot { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-top: 3px; }
.ft-item { font-size: .48em; color: #777; display: flex; align-items: center; gap: 2px; }
.ft-dot { width: 5px; height: 5px; border-radius: 50%; }
.ft-az { background: #0078d4; }
.ft-tl { background: #00b7c3; }
.ft-grn { background: #107c10; }
</style>
