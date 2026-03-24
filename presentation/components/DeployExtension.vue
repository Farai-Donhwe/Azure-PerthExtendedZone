<template>
<div class="de">
  <!-- Row 0: Remote Location centered above Internet -->
  <div class="row row-top">
    <div class="cell"></div>
    <div class="cell cell-center">
      <div class="n n-gray">Remote Location</div>
      <div class="cv"><div class="lv"><div class="dot dot-d"></div></div></div>
    </div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>

  <!-- Row 1: [On-Prem branch] → Internet ————————→ [to EZ vNet] -->
  <div class="row">
    <div class="cell"></div>
    <div class="cell cell-center">
      <div class="n n-blue">Internet</div>
    </div>
    <div class="cell cell-line">
      <div class="lh"><div class="dot dot-r"></div></div>
    </div>
    <div class="cell"></div>
  </div>

  <!-- Row 2: [On-Prem branch] → VPN ——————————→ [to EZ vNet] -->
  <div class="row">
    <div class="cell"></div>
    <div class="cell cell-center">
      <div class="n n-gray">VPN¹</div>
    </div>
    <div class="cell cell-line">
      <div class="lh"><div class="dot dot-r dot-d2"></div></div>
    </div>
    <div class="cell"></div>
  </div>

  <!-- Row 3: On-Prem DC → ExpressRoute → Azure EZ vNet ↔ Region vNet -->
  <div class="row row-bottom">
    <div class="cell">
      <div class="n n-gray n-dc">On-Premise<br>Datacentre</div>
    </div>
    <div class="cell cell-er">
      <div class="ch"><div class="lh lh-az"><div class="dot dot-r dot-az"></div></div></div>
      <div class="n n-azure">ExpressRoute</div>
      <div class="ch"><div class="lh lh-az"><div class="dot dot-r dot-az dot-d3"></div></div></div>
    </div>
    <div class="cell cell-ez">
      <div class="n n-az-strong">Azure Extended<br>Zone vNet</div>
    </div>
    <div class="cell cell-peer">
      <div class="peer">
        <div class="peer-line"><div class="dot dot-r dot-grn"></div></div>
        <div class="peer-line"><div class="dot dot-l dot-grn"></div></div>
        <div class="peer-label">vNet Peering</div>
      </div>
      <div class="n n-green">Region vNet</div>
    </div>
  </div>

  <!-- Left bracket lines: On-Prem connects up to Internet & VPN -->
  <div class="bracket">
    <div class="bracket-v"><div class="dot dot-d dot-d4"></div></div>
    <div class="bracket-h bracket-h1"></div>
    <div class="bracket-h bracket-h2"></div>
  </div>

  <!-- Right bracket lines: Internet & VPN connect down to EZ vNet -->
  <div class="bracket-r">
    <div class="bracket-rv"><div class="dot dot-d dot-d5"></div></div>
    <div class="bracket-rh bracket-rh1"></div>
    <div class="bracket-rh bracket-rh2"></div>
  </div>

  <div class="foot">Private: ExpressRoute · Public: Std LB · VPN (ISV¹) · vNet Peering to Parent Region</div>
</div>
</template>

<style scoped>
.de { font-family: 'Segoe UI', sans-serif; font-size: .6em; position: relative; }
.n { padding: .2em .4em; border-radius: 4px; font-weight: 600; text-align: center; font-size: .75em; white-space: nowrap; line-height: 1.25; }
.n-gray { background: #f5f5f5; border: 1.5px solid #d2d2d2; color: #3b3b3b; }
.n-blue { background: #f5f5f5; border: 1.5px solid #0078d4; color: #0078d4; }
.n-azure { background: #deecf9; border: 1.5px solid #0078d4; color: #005a9e; }
.n-az-strong { background: #deecf9; border: 2px solid #0078d4; color: #005a9e; font-weight: 700; }
.n-green { background: #e8f4e8; border: 2px solid #107c10; color: #0b5e0b; font-weight: 700; }
.n-dc { white-space: normal; line-height: 1.2; }

/* Grid rows */
.row { display: grid; grid-template-columns: 72px 80px 1fr 100px; gap: 2px; align-items: center; margin-bottom: 4px; }
.row-top { margin-bottom: 0; }
.cell { min-height: 20px; }
.cell-center { display: flex; flex-direction: column; align-items: center; }
.cell-er { display: flex; align-items: center; }
.cell-ez { display: flex; align-items: center; justify-content: center; }
.cell-peer { display: flex; align-items: center; gap: 2px; }
.cell-line { display: flex; align-items: center; }

/* Connectors */
.cv { display: flex; justify-content: center; height: 8px; }
.lv { width: 1.5px; height: 100%; background: #aaa; position: relative; overflow: visible; }
.ch { width: 14px; display: flex; align-items: center; flex-shrink: 0; }
.lh { height: 1.5px; width: 100%; background: #aaa; position: relative; overflow: visible; }
.lh-az { background: #0078d4; }

/* Animated dots */
.dot { position: absolute; width: 4px; height: 4px; border-radius: 50%; }
.dot-d { background: #00b7c3; box-shadow: 0 0 3px #00b7c3; left: -1.5px; animation: dd 1.4s ease-in-out infinite; }
.dot-r { background: #00b7c3; box-shadow: 0 0 3px #00b7c3; top: -1.5px; animation: dr 1.2s ease-in-out infinite; }
.dot-l { background: #107c10; box-shadow: 0 0 3px #107c10; top: -1.5px; animation: dl 1.2s ease-in-out infinite .4s; }
.dot-az { background: #0078d4; box-shadow: 0 0 3px #0078d4; }
.dot-grn { background: #107c10; box-shadow: 0 0 3px #107c10; }
.dot-d2 { animation-delay: .3s; }
.dot-d3 { animation-delay: .6s; }
.dot-d4 { animation-delay: .2s; }
.dot-d5 { animation-delay: .5s; }

@keyframes dd { 0% { top: -4px; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
@keyframes dr { 0% { left: -4px; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
@keyframes dl { 0% { left: calc(100% + 4px); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { left: -4px; opacity: 0; } }

/* Left bracket: On-Prem DC connects up to Internet and VPN rows */
.bracket { position: absolute; left: 36px; bottom: 30px; width: 1.5px; height: 58px; }
.bracket-v { width: 1.5px; height: 100%; background: #aaa; position: relative; overflow: visible; }
.bracket-h { position: absolute; height: 1.5px; background: #aaa; left: 0; width: 36px; }
.bracket-h1 { top: 0; }
.bracket-h2 { top: 50%; }

/* Right bracket: Internet & VPN connect right-down to EZ vNet */
.bracket-r { position: absolute; right: 115px; bottom: 30px; width: 1.5px; height: 58px; }
.bracket-rv { width: 1.5px; height: 100%; background: #aaa; position: relative; overflow: visible; }
.bracket-rh { position: absolute; height: 1.5px; background: #aaa; right: 0; width: 20px; }
.bracket-rh1 { top: 0; }
.bracket-rh2 { top: 50%; }

/* vNet Peering */
.peer { display: flex; flex-direction: column; align-items: center; width: 20px; gap: 1px; }
.peer-line { height: 1.5px; width: 100%; background: #107c10; position: relative; overflow: visible; }
.peer-label { font-size: .4em; color: #107c10; font-weight: 600; white-space: nowrap; }

.foot { font-size: .45em; color: #888; text-align: center; margin-top: .2em; }
</style>
